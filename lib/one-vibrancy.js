'use babel';

export default {

  activate(state) {
    atom.config.observe('one-vibrancy.effect', (value) => {
      document.documentElement.classList.add('one-vibrancy');

      // vibrancy String (optional) - Add a type of vibrancy effect to the window, only on macOS.
      // Can be: appearance-based, light, dark, titlebar, selection, menu, popover, sidebar, medium-light or ultra-dark.
      require('electron').remote.getCurrentWindow().setVibrancy(value);
    })
  },

  deactivate() {
    document.documentElement.classList.remove('one-vibrancy');
    require('electron').remote.getCurrentWindow().setVibrancy();
  }

};
