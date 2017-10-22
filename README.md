# One Vibrancy

This package adds a vibrancy effect (translucent background) to Atom One themes.

![one-vibrancy-dark](https://user-images.githubusercontent.com/378023/27769700-ecd344e8-5f6a-11e7-95b0-fb7eb53672b8.png)

![one-vibrancy-light](https://user-images.githubusercontent.com/378023/27769701-ecd46ef4-5f6a-11e7-9643-0078ea2862e5.png)

> Note: Works only on macOS


## Install

```
apm install one-vibrancy
```

## Settings

In the package settings you can switch between different effects:

- `auto` (Automatically switches between dark and medium-light based on the current One UI theme)
- `auto-opaque` (Automatically switches between ultra-dark and light based on the current One UI theme)
- `light`
- `medium-light`
- `dark`
- `ultra-dark`


## FAQ

#### I can't see any vibrancy!

1. Make sure you're using Atom `1.19` or higher.
2. Make sure you use either `One Dark UI` or `One Light UI`. Other themes might work too, see next question.
3. Make sure you have macOS's "Reduce transparency" disabled, see [this gif](https://github.com/simurai/one-vibrancy/issues/7#issuecomment-319578317).

#### Does it work for other Atom themes too?

Possibly. But only the One themes are maintained.

If there are parts that are not translucent, you can override it in your [styles.less](http://flight-manual.atom.io/using-atom/sections/basic-customization/#style-tweaks) file. Find the right selector in the [DevTools](http://flight-manual.atom.io/hacking-atom/sections/creating-a-theme/#developer-tools), then make the background `transparent`. For example:

```less
.one-vibrancy {
  // <- Add selectors here
  atom-pane,
  atom-panel,
  .tree-view {
    background-color: transparent !important;
  }
}
```

#### The font doesn't look sharp!

Yes, sub-pixel aliasing is lost when using a transparent background. A small price for a cool effect in return. 😉


#### Is performance ok?

Hard to say. Haven't noticed major slowdowns, but an opaque background is probably still better for performance.
