const {app, BrowserWindow} = require('electron');

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 530,
        height: 380,
        resizable: false,
        backgroundColor: "#15CBE3",
    });

    mainWindow.loadURL(`file://${__dirname}/index.html`)
});

