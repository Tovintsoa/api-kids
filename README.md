
### Description

API Kids est la source de donnée qui va alimenter l'application mobile KIDZ

### Tech

Book Store uses a number of open source projects to work:
* [NodeJS](https://nodejs.org/en/) - Evented I/O for the backend
* [ExpressJS](https://expressjs.com) - Fast, unopinionated, minimalist web framework for NodeJS


### Installation
Une fois le projet installé sur votre local: 
```sh
$ npm install
$ nodemon app.js
```

Pour pusher les modification sur github

```sh
$ git commit -am ""
$ git push origin main
```
Serveur preprod: 
* [api-kids](https://api-kids.herokuapp.com/) 

Configuration pour pouvoir mettre à jour le serveur preprod: 
* Télécharger et installer [Heroku Cli](https://devcenter.heroku.com/articles/heroku-cli)
* Lancer les commandes : 
```sh
$ heroku login
$ git push heroku main
```
   
Pour mettre à jour le serveur distant heroku

```sh
$ git push heroku main
```

### Liste URL

* getAllUser : https://api-kids.herokuapp.com/user/allUsers

### Authors

* [Tovintsoa](https://github.com/Tovintsoa)

### License
----

MIT
