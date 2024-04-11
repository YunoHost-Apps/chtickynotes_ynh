<!--
Ohart ongi: README hau automatikoki sortu da <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>ri esker
EZ editatu eskuz.
-->

# ChtickyNotes YunoHost-erako

[![Integrazio maila](https://dash.yunohost.org/integration/chtickynotes.svg)](https://dash.yunohost.org/appci/app/chtickynotes) ![Funtzionamendu egoera](https://ci-apps.yunohost.org/ci/badges/chtickynotes.status.svg) ![Mantentze egoera](https://ci-apps.yunohost.org/ci/badges/chtickynotes.maintain.svg)

[![Instalatu ChtickyNotes YunoHost-ekin](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=chtickynotes)

*[Irakurri README hau beste hizkuntzatan.](./ALL_README.md)*

> *Pakete honek ChtickyNotes YunoHost zerbitzari batean azkar eta zailtasunik gabe instalatzea ahalbidetzen dizu.*  
> *YunoHost ez baduzu, kontsultatu [gida](https://yunohost.org/install) nola instalatu ikasteko.*

## Aurreikuspena

ChtickyNotes is a "simple post-it" based on [Post It All!](https://github.com/txusko/PostItAll).

## Features

- notes movable and resizable
- edit note by just typing on it (or CTRL-V to paste chunks of HTML)
- menu on each note to change its color, and so on
- global menu to change board, and so on
- autosave every 10 seconds
- storage on the server (not on the browser local storage)


**Paketatutako bertsioa:** 1.0~ynh6

## Pantaila-argazkiak

![ChtickyNotes(r)en pantaila-argazkia](./doc/screenshots/chtickynotes.gif)

## :red_circle: Ezaugarri zalantzagarriak

- **Jatorrizko garapena utzita**: Software honek ez du arduradunik. Denborak aurrera egin ahala funtzionatzeari utziko dio, konpondu gabeko segurtasun arazoak izango ditu, etab.

## Dokumentazioa eta baliabideak

- Jatorrizko aplikazioaren kode-gordailua: <https://github.com/YunoHost-Apps/chtickynotes_ynh/>
- YunoHost Denda: <https://apps.yunohost.org/app/chtickynotes>
- Eman errore baten berri: <https://github.com/YunoHost-Apps/chtickynotes_ynh/issues>

## Garatzaileentzako informazioa

Bidali `pull request`a [`testing` abarrera](https://github.com/YunoHost-Apps/chtickynotes_ynh/tree/testing).

`testing` abarra probatzeko, ondorengoa egin:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/chtickynotes_ynh/tree/testing --debug
edo
sudo yunohost app upgrade chtickynotes -u https://github.com/YunoHost-Apps/chtickynotes_ynh/tree/testing --debug
```

**Informazio gehiago aplikazioaren paketatzeari buruz:** <https://yunohost.org/packaging_apps>
