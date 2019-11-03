'use babel'

export default {

  activate(state) {
    this.setEffect()
  },

  setEffect() {
    require('electron').remote.getCurrentWindow().setVibrancy('appearance-based')
    document.documentElement.classList.add('one-vibrancy')
  },

  deactivate() {
    document.documentElement.classList.remove('one-vibrancy')
    require('electron').remote.getCurrentWindow().setVibrancy(null)
  }

}
