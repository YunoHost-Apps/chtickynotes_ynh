# ChtickyNotes pour YunoHost

[![Integration level](https://dash.yunohost.org/integration/chtickynotes.svg)](https://dash.yunohost.org/appci/app/chtickynotes) ![](https://ci-apps.yunohost.org/ci/badges/chtickynotes.status.svg) ![](https://ci-apps.yunohost.org/ci/badges/chtickynotes.maintain.svg)  
[![Install ChtickyNotes with YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=chtickynotes)

*[Read this readme in english.](./README.md)* 

> *Ce package vous permet d'installer ChtickyNotes rapidement et simplement sur un serveur YunoHost.  
Si vous n'avez pas YunoHost, consultez [le guide](https://yunohost.org/#/install) pour apprendre comment l'installer.*

## Overview
Le noyau de ChtickyNotes est basé sur [Post It All!](Https://github.com/txusko/PostItAll).
ChtickyNotes est une application "post-it". Ses principales caractéristiques sont :
- notes mobiles et redimensionnables
- éditer la note en tapant simplement dessus (ou CTRL-V pour coller du code HTML)
- menu sur chaque note pour changer sa couleur...
- menu global pour changer de tableau...
- sauvegarde automatique toutes les 10 secondes
- stockage sur le serveur (pas de stockage local dans le navigateur)

**Version incluse :** 1.0

## Captures d'écran

![](https://lh4.googleusercontent.com/-ATC-XA5iVsc/VM06cI3ClLI/AAAAAAAACHo/uBhDViaSBRg/s800/chtickynotes.gif)

## Documentation

 * Documentation officielle : Lien vers la documentation officielle de cette application.
 * Documentation YunoHost : Si une documentation spécifique est nécessaire, n'hésitez pas à contribuer.

## Caractéristiques spécifiques YunoHost

#### Support multi-utilisateur

* L'authentification LDAP et HTTP est-elle prise en charge ?
* L'application peut-elle être utilisée par plusieurs utilisateurs ?

#### Architectures supportées

* x86-64 - [![Build Status](https://ci-apps.yunohost.org/ci/logs/chtickynotes.svg)](https://ci-apps.yunohost.org/ci/apps/chtickynotes/)
* ARMv8-A - [![Build Status](https://ci-apps-arm.yunohost.org/ci/logs/chtickynotes.svg)](https://ci-apps-arm.yunohost.org/ci/apps/chtickynotes/)

## Limitations

* Limitations connues.

## Informations additionnelles

* Autres informations que vous souhaitez ajouter sur cette application.

## Liens

 * Signaler un bug : https://github.com/YunoHost-Apps/chtickynotes_ynh/issues
 * Site web YunoHost : https://yunohost.org/

---

## Informations pour les développeurs

Merci de faire vos pull request sur la [branche testing](https://github.com/YunoHost-Apps/chtickynotes_ynh/tree/testing).

Pour essayer la branche testing, procédez comme suit.
```
sudo yunohost app install https://github.com/YunoHost-Apps/chtickynotes_ynh/tree/testing --debug
or
sudo yunohost app upgrade chtickynotes -u https://github.com/YunoHost-Apps/chtickynotes_ynh/tree/testing --debug
```
