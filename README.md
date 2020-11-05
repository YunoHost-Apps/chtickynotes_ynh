# ChtickyNotes for YunoHost

[![Integration level](https://dash.yunohost.org/integration/chtickynotes.svg)](https://dash.yunohost.org/appci/app/chtickynotes) ![](https://ci-apps.yunohost.org/ci/badges/chtickynotes.status.svg) ![](https://ci-apps.yunohost.org/ci/badges/chtickynotes.maintain.svg)  
[![Install ChtickyNotes with YunoHost](https://install-app.yunohost.org/install-with-yunohost.png)](https://install-app.yunohost.org/?app=chtickynotes)

*[Lire ce readme en français.](./README_fr.md)*

> *This package allows you to install ChtickyNotes quickly and simply on a YunoHost server.  
If you don't have YunoHost, please consult [the guide](https://yunohost.org/#/install) to learn how to install it.*

## Overview
ChtickyNotes core is based on [Post It All!](https://github.com/txusko/PostItAll).
ChtickyNotes is a "simple post-it" application. Its main features are:
- notes movable and resizable
- edit note by just typing on it (or CTRL-V to paste chunks of HTML)
- menu on each note to change its color, and so on
- global menu to change board, and so on
- autosave every 10 seconds
- storage on the server (not on the browser local storage)

**Shipped version:** 1.0

## Screenshots

![](https://lh4.googleusercontent.com/-ATC-XA5iVsc/VM06cI3ClLI/AAAAAAAACHo/uBhDViaSBRg/s800/chtickynotes.gif)

## Documentation

 * Official documentation: Link to the official documentation of this app
 * YunoHost documentation: If specific documentation is needed, feel free to contribute.

## YunoHost specific features

#### Multi-user support

* Are LDAP and HTTP auth supported?
* Can the app be used by multiple users?

#### Supported architectures

* x86-64 - [![Build Status](https://ci-apps.yunohost.org/ci/logs/chtickynotes%20%28Apps%29.svg)](https://ci-apps.yunohost.org/ci/apps/chtickynotes/)
* ARMv8-A - [![Build Status](https://ci-apps-arm.yunohost.org/ci/logs/chtickynotes%20%28Apps%29.svg)](https://ci-apps-arm.yunohost.org/ci/apps/chtickynotes/)

## Limitations

* Any known limitations.

## Additional information

* Other info you would like to add about this app.

## Links

 * Report a bug: https://github.com/YunoHost-Apps/chtickynotes_ynh/issues
 * YunoHost website: https://yunohost.org/

---

## Developer info

Please send your pull request to the [testing branch](https://github.com/YunoHost-Apps/chtickynotes_ynh/tree/testing).

To try the testing branch, please proceed like that.
```
sudo yunohost app install https://github.com/YunoHost-Apps/chtickynotes_ynh/tree/testing --debug
or
sudo yunohost app upgrade chtickynotes -u https://github.com/YunoHost-Apps/chtickynotes_ynh/tree/testing --debug
```
