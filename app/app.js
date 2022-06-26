const {app, BrowserWindow, ipcMain} = require('electron') 

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
        }
    })
    win.loadFile('index.html')
}


app.whenReady().then(() => createWindow())