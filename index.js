(function() {
  'use strict';

  const { app, BrowserWindow } = require('electron');
  const path                   = require('path');
  const url                    = require('url');

  // Quit on Cmd + Q and close-button clicked
  app.on('window-all-closed', function() {
      app.quit();
  });

  // Dev dependencies
  if (process.env.ENV === 'development') {
    // Do livereload on filechange
    require('electron-reload')( __dirname + '/dist', {
      electron: require('electron')
    });

  }

  app.on('ready', function() {

    // Window otions
    const options =  {
      width: 1100,
      height: 750,
      center: true,
      minWidth: 1100,
      minHeight: 750,
      titleBarStyle: 'default',
      frame: true,
      show: false
    };

    // Main Window
    let mainWindow = new BrowserWindow(options);

    // Show window after content is loaded
    mainWindow.once('ready-to-show', function() {
      mainWindow.show();
    });

    mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, 'dist/index.html'),
      protocol: 'file:',
      slashes: true
    }));

    // Directly open dev tools in debug
    if (process.env.ENV === 'development')
      mainWindow.openDevTools();

    mainWindow.on('closed', function() {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      mainWindow = null;
    });

  });

})();
