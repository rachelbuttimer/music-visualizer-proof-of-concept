const { app, BrowserWindow} = require('electron');
const osc = require('osc');

let mainWindow;

function createWindow(){
    mainWindow = new BrowserWindow({
        width: 600,
        height: 400,
        webPreferences:{
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    mainWindow.loadFile("index.html");
}

app.whenReady().then(createWindow);

//create OSC UDP port
const udpPort = new osc.UDPPort({
    localAddress: "127.0.0.1",
    localPort: 57121
});

udpPort.on("ready", function(){
    console.log("Listening for OSC over UDP");
});

//listen for messages
udpPort.on("message", function(oscMsg){
    console.log("Received OSC message:", oscMsg);
    if(oscMsg.address === "/instrument/drum"){
        mainWindow.webContents.send("drum-hit");
    }
});

udpPort.open();