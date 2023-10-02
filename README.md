<!--
N.B.: This README was automatically generated by https://github.com/YunoHost/apps/tree/master/tools/README-generator
It shall NOT be edited by hand.
-->

# ChtickyNotes for YunoHost

[![Integration level](https://dash.yunohost.org/integration/chtickynotes.svg)](https://dash.yunohost.org/appci/app/chtickynotes) ![Working status](https://ci-apps.yunohost.org/ci/badges/chtickynotes.status.svg) ![Maintenance status](https://ci-apps.yunohost.org/ci/badges/chtickynotes.maintain.svg)

[![Install ChtickyNotes with YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=chtickynotes)

*[Lire ce readme en français.](./README_fr.md)*

> *This package allows you to install ChtickyNotes quickly and simply on a YunoHost server.
If you don't have YunoHost, please consult [the guide](https://yunohost.org/#/install) to learn how to install it.*

## Overview

ChtickyNotes is a "simple post-it" based on [Post It All!](https://github.com/txusko/PostItAll).

## Features

- notes movable and resizable
- edit note by just typing on it (or CTRL-V to paste chunks of HTML)
- menu on each note to change its color, and so on
- global menu to change board, and so on
- autosave every 10 seconds
- storage on the server (not on the browser local storage)


**Shipped version:** 1.0~ynh5

## Screenshots

![Screenshot of ChtickyNotes](./doc/screenshots/chtickynotes.gif)

## :red_circle: Antifeatures

- **Upstream not maintained**: This software is not maintained anymore. Expect it to break down over time, be exposed to unfixed security breaches, etc.

## Documentation and resources

* Upstream app code repository: <https://github.com/YunoHost-Apps/chtickynotes_ynh/>
* Report a bug: <https://github.com/YunoHost-Apps/chtickynotes_ynh/issues>

## Developer info

Please send your pull request to the [testing branch](https://github.com/YunoHost-Apps/chtickynotes_ynh/tree/testing).

To try the testing branch, please proceed like that.

``` bash
sudo yunohost app install https://github.com/YunoHost-Apps/chtickynotes_ynh/tree/testing --debug
or
sudo yunohost app upgrade chtickynotes -u https://github.com/YunoHost-Apps/chtickynotes_ynh/tree/testing --debug
```

**More info regarding app packaging:** <https://yunohost.org/packaging_apps>
