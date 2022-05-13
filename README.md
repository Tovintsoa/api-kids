
### Description

API Kids est la source de donnée qui va alimenter l'application mobile KIDZ

### Tech

API kidz uses a number of open source projects to work:
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

<h4>User</h4>

* getAllUsers : https://api-kids.herokuapp.com/user/allUsers
* addUser : https://api-kids.herokuapp.com/user/addUser
* getOneUser :  https://api-kids.herokuapp.com/user/getOne/:id
* updateUser :  https://api-kids.herokuapp.com/user/updateUser/:id
* deleteUser :  https://api-kids.herokuapp.com/user/deleteUser/:id
* authenticateUser : https://api-kids.herokuapp.com/user/authenticateUser

<h4>Categorie</h4>

* getAllCategories : https://api-kids.herokuapp.com/category/allCategories
* addCategory : https://api-kids.herokuapp.com/category/addCategory
* getOneCategory : https://api-kids.herokuapp.com/category/getOne/:id
* updateCategory :  https://api-kids.herokuapp.com/category/updateCategory/:id
* deleteCategory : https://api-kids.herokuapp.com/category/deleteCategory/:id

<h4>Video</h4>

* getAllVideos : https://api-kids.herokuapp.com/video/allVideos
* getAllVideosByCategory : https://api-kids.herokuapp.com/video/allVideosByCategory/:vIdCategory
* addVideo : https://api-kids.herokuapp.com/video/addVideo
* getOneVideo : https://api-kids.herokuapp.com/video/getOne/:id
* updateVideo :  https://api-kids.herokuapp.com/video/updateVideo/:id
* deleteVideo : https://api-kids.herokuapp.com/video/deleteVideo/:id

<h4>Favori</h4>

* getAllFavoris : https://api-kids.herokuapp.com/favori/allFavoris
* getAllFavorisByUser : https://api-kids.herokuapp.com/favori/allFavorisByUser/:fIdUser
* addFavori : https://api-kids.herokuapp.com/favori/addFavori
* getOneFavori : https://api-kids.herokuapp.com/favori/getOne/:id
* updateFavori :  https://api-kids.herokuapp.com/favori/updateFavori/:id
* deleteFavori : https://api-kids.herokuapp.com/favori/deleteFavori/:id

### Authors

* [Tovintsoa](https://github.com/Tovintsoa)
* [Tsiky](https://github.com/TsikyNavalona)

### License
----

MIT
