(function() {
  'use strict';

  const { app, BrowserWindow } = require('electron');
  const path                   = require('path');
  const url                    = require('url');

  // Quit on Cmd + Q and close-button clicked
  app.on('window-all-closed', () => {
    app.quit();
  });

  // Dev dependencies
  if (process.env.ENV === 'development') {
    // Do livereload on filechange
    require('electron-reload')(path.join(__dirname, 'dist'), {
      electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
    });

  }

  // Keep a global reference. Else it will be garbage collected
  let window;

  /**
   * Creates main Window
   */
  function createWindow () {
    // Window otions
    const options = {
      width: 1100,
      height: 750,
      center: true,
      minWidth: 1100,
      minHeight: 750,
      titleBarStyle: 'default',
      frame: true,
      show: false
    };

    // Create the browser window.
    window = new BrowserWindow(options);

    // Load the index.html of the app.
    window.loadURL(url.format({
      pathname: path.join(__dirname, 'dist/index.html'),
      protocol: 'file:',
      slashes: true
    }));

    // Directly open dev tools in development
    if (process.env.ENV === 'development')
      window.openDevTools();

    // Emitted when the window is closed.
    window.on('closed', () => {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      window = null;
    });

    // Show window when ready
    window.once('ready-to-show', () => {
      window.show();
    });
  }

  /**
   * This method will be called when Electron has finished
   * initialization and is ready to create browser windows.
   * Some APIs can only be used after this event occurs.
   */
  app.on('ready', createWindow);

})();
