# One Vibrancy

This package adds a vibrancy effect (translucent background) to Atom One themes.

![one-vibrancy](https://user-images.githubusercontent.com/378023/27760219-0d8403a6-5e7d-11e7-8b23-813bc7144e3b.png)

> Note: Works only on macOS

## FAQ

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
