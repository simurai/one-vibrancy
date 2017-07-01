'use babel';

export default {

  activate(state) {
    atom.config.observe('one-vibrancy.effect', (value) => {
      document.documentElement.classList.add('one-vibrancy');

      // Automatically switch based on if the theme is light or dark
      if (value == 'auto') {
        let currentThemes = atom.config.get('core.themes').join(' ');
        if ( currentThemes.includes('light-ui') ) {
          require('electron').remote.getCurrentWindow().setVibrancy('medium-light');
        } else {
          require('electron').remote.getCurrentWindow().setVibrancy('dark');
        }

      // Otherwise use the config value
      } else {
        require('electron').remote.getCurrentWindow().setVibrancy(value);
      }
    })
  },

  deactivate() {
    document.documentElement.classList.remove('one-vibrancy');
    require('electron').remote.getCurrentWindow().setVibrancy();
  }

};
