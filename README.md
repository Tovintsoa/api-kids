
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

* getAllUsers : https://api-kids.herokuapp.com/user/allUsers
* addUser : https://api-kids.herokuapp.com/user/addUser
* getOneUser :  https://api-kids.herokuapp.com/user/getOne/1
* updateUser :  https://api-kids.herokuapp.com/user/updateUser/1
* deleteUser :  https://api-kids.herokuapp.com/user/deleteUser/1
* authenticateUser : https://api-kids.herokuapp.com/user/authenticateUser
* getAllCategories : https://api-kids.herokuapp.com/category/allCategories
* addCategory : https://api-kids.herokuapp.com/category/addCategory
* getOneCategory : https://api-kids.herokuapp.com/category/getOne/1
* updateCategory :  https://api-kids.herokuapp.com/category/updateCategory/1
* deleteCategory : https://api-kids.herokuapp.com/category/deleteCategory/1

### Authors

* [Tovintsoa](https://github.com/Tovintsoa)
* [Tsiky](https://github.com/TsikyNavalona)

### License
----

MIT
