<!--
Este archivo README esta generado automaticamente<https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
No se debe editar a mano.
-->

# ChtickyNotes para Yunohost

[![Nivel de integración](https://dash.yunohost.org/integration/chtickynotes.svg)](https://dash.yunohost.org/appci/app/chtickynotes) ![Estado funcional](https://ci-apps.yunohost.org/ci/badges/chtickynotes.status.svg) ![Estado En Mantención](https://ci-apps.yunohost.org/ci/badges/chtickynotes.maintain.svg)

[![Instalar ChtickyNotes con Yunhost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=chtickynotes)

*[Leer este README en otros idiomas.](./ALL_README.md)*

> *Este paquete le permite instalarChtickyNotes rapidamente y simplement en un servidor YunoHost.*  
> *Si no tiene YunoHost, visita [the guide](https://yunohost.org/install) para aprender como instalarla.*

## Descripción general

ChtickyNotes is a "simple post-it" based on [Post It All!](https://github.com/txusko/PostItAll).

## Features

- notes movable and resizable
- edit note by just typing on it (or CTRL-V to paste chunks of HTML)
- menu on each note to change its color, and so on
- global menu to change board, and so on
- autosave every 10 seconds
- storage on the server (not on the browser local storage)


**Versión actual:** 1.0~ynh6

## Capturas

![Captura de ChtickyNotes](./doc/screenshots/chtickynotes.gif)

## :red_circle: Características no deseables

- **Upstream not maintained**: This software is not maintained anymore. Expect it to break down over time, be exposed to unfixed security breaches, etc.

## Documentaciones y recursos

- Repositorio del código fuente oficial de la aplicación : <https://github.com/YunoHost-Apps/chtickynotes_ynh/>
- Catálogo YunoHost: <https://apps.yunohost.org/app/chtickynotes>
- Reportar un error: <https://github.com/YunoHost-Apps/chtickynotes_ynh/issues>

## Información para desarrolladores

Por favor enviar sus correcciones a la [`branch testing`](https://github.com/YunoHost-Apps/chtickynotes_ynh/tree/testing

Para probar la rama `testing`, sigue asÍ:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/chtickynotes_ynh/tree/testing --debug
o
sudo yunohost app upgrade chtickynotes -u https://github.com/YunoHost-Apps/chtickynotes_ynh/tree/testing --debug
```

**Mas informaciones sobre el empaquetado de aplicaciones:** <https://yunohost.org/packaging_apps>
