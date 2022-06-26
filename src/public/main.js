const {app, BrowserWindow, ipcMain} = require('electron') 

require('@electron/remote/main').initialize()
//dev dependencies
try{
    require('electron-reloader')(module)
} catch (_) {}
//dev dependencies - END

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1000,
        height: 700,
        minHeight: 500,
        minWidth: 900,
        titleBarStyle: 'hidden', 
        titleBarOverlay: {
            color: '#222629',
            symbolColor: '#6B6E70',
            height: '32'
        },
        webPreferences: {
            enableRemoteModule: true
        }
    })
    win.loadURL('http://localhost:3000')
}

app.on('ready', createWindow)
app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked an there are no other windows open.
    if (BrowserWindow.getAllWindows().length == 0) createWindow()
}) 