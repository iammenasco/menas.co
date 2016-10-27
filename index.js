'use strict';
const {app, BrowserWindow, crashReporter} = require('electron');
const opbeat = require('opbeat');

opbeat.start();

// report crashes to the Electron project
crashReporter.start({
  productName: 'Menasco Journal',
  companyName: 'I Am Menasco',
  submitURL: 'https://electron-crash-reporter.appspot.com/5136269650690048/create/',
  autoSubmit: true
});

// adds debug features like hotkeys for triggering dev tools and reload
require('electron-debug')();

let indexFile = `${__dirname}/index.html`;

const port = process.env.PORT || 3000;

if (process.env.NODE_ENV === 'dev') {
  indexFile = 'http://localhost:' + port;
}

// prevent window being garbage collected
let mainWindow;

function onClosed() {
  // dereference the window
  // for multiple windows store them in an array
  mainWindow = null;
}

function createMainWindow() {
  const win = new BrowserWindow({
    width: 600,
    height: 400
  });

  if (process.env.NODE_ENV === 'dev') {
    // we need to wait until browsersync is ready
    setTimeout(() => {
      win.loadURL(indexFile);
    }, 1000);
  } else {
    win.loadURL(`file:${indexFile}`);
  }

  win.on('closed', onClosed);

  return win;
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate-with-no-open-windows', () => {
  if (!mainWindow) {
    mainWindow = createMainWindow();
  }
});

app.on('ready', () => {
  mainWindow = createMainWindow();
});
