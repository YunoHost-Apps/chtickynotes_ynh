<!--
Nota bene : ce README est automatiquement généré par <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
Il NE doit PAS être modifié à la main.
-->

# ChtickyNotes pour YunoHost

[![Niveau d’intégration](https://dash.yunohost.org/integration/chtickynotes.svg)](https://dash.yunohost.org/appci/app/chtickynotes) ![Statut du fonctionnement](https://ci-apps.yunohost.org/ci/badges/chtickynotes.status.svg) ![Statut de maintenance](https://ci-apps.yunohost.org/ci/badges/chtickynotes.maintain.svg)

[![Installer ChtickyNotes avec YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=chtickynotes)

*[Lire le README dans d'autres langues.](./ALL_README.md)*

> *Ce package vous permet d’installer ChtickyNotes rapidement et simplement sur un serveur YunoHost.*  
> *Si vous n’avez pas YunoHost, consultez [ce guide](https://yunohost.org/install) pour savoir comment l’installer et en profiter.*

## Vue d’ensemble

ChtickyNotes est une application "post-it" basé sur [Post It All!](Https://github.com/txusko/PostItAll).

## Caractéristiques

- notes mobiles et redimensionnables
- ?iter la note en tapant simplement dessus (ou CTRL-V pour coller du code HTML)
- menu sur chaque note pour changer sa couleur...
- menu global pour changer de tableau...
- sauvegarde automatique toutes les 10 secondes
- stockage sur le serveur (pas de stockage local dans le navigateur)


**Version incluse :** 1.0~ynh6

## Captures d’écran

![Capture d’écran de ChtickyNotes](./doc/screenshots/chtickynotes.gif)

## :red_circle: Anti-fonctionnalités

- **Application non maintenue **: Ce logiciel n'est plus maintenu. Attendez-vous à ce qu'il ne fonctionne plus avec le temps, et que l'on découvre des failles de sécurité qui ne seront pas corrigées, etc.

## Documentations et ressources

- Dépôt de code officiel de l’app : <https://github.com/YunoHost-Apps/chtickynotes_ynh/>
- YunoHost Store : <https://apps.yunohost.org/app/chtickynotes>
- Signaler un bug : <https://github.com/YunoHost-Apps/chtickynotes_ynh/issues>

## Informations pour les développeurs

Merci de faire vos pull request sur la [branche `testing`](https://github.com/YunoHost-Apps/chtickynotes_ynh/tree/testing).

Pour essayer la branche `testing`, procédez comme suit :

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/chtickynotes_ynh/tree/testing --debug
ou
sudo yunohost app upgrade chtickynotes -u https://github.com/YunoHost-Apps/chtickynotes_ynh/tree/testing --debug
```

**Plus d’infos sur le packaging d’applications :** <https://yunohost.org/packaging_apps>
