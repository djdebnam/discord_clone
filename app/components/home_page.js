'use strict';

const element = React.createElement;

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.Title = "Home Page"
    }

    render() {
        return this.Title; 
    }
}


const domContainer = document.querySelector('#container');
const root = ReactDOM.createRoot(domContainer);
root.render(element(HomePage));