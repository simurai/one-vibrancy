'use babel';

export default {

  activate(state) {
    // Observe config
    atom.config.observe('one-vibrancy.effect', (value) => {
      this.setEffect();
    })

    // React to theme changes
    atom.config.onDidChange('core.themes', (value) => {
      this.setEffect();
    })
  },

  setEffect() {
    let effect = atom.config.get('one-vibrancy.effect');

    // Automatically switch based on if the theme is light or dark
    if (effect == 'auto') {
      let currentThemes = atom.config.get('core.themes').join(' ');
      if ( currentThemes.includes('light-ui') ) {
        require('electron').remote.getCurrentWindow().setVibrancy('medium-light');
      } else {
        require('electron').remote.getCurrentWindow().setVibrancy('dark');
      }

    // Otherwise use the config value
    } else if (effect == 'auto-opaque') {
      let currentThemes = atom.config.get('core.themes').join(' ');
      if ( currentThemes.includes('light-ui') ) {
        require('electron').remote.getCurrentWindow().setVibrancy('light');
      } else {
        require('electron').remote.getCurrentWindow().setVibrancy('ultra-dark');
      }

    // Otherwise use the config value
    } else {
      require('electron').remote.getCurrentWindow().setVibrancy(effect);
    }

    // Enable styling
    document.documentElement.classList.add('one-vibrancy');
  },

  deactivate() {
    document.documentElement.classList.remove('one-vibrancy');
    require('electron').remote.getCurrentWindow().setVibrancy();
  }

};
