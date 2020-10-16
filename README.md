# Vuetube React

### [LIVE APP](https://vuetube-react.herokuapp.com/)
<div>
<a href="https://travis-ci.org/lroberts77/VueTube">
<img src="https://img.shields.io/travis/lroberts77/VueTube/master.svg?logo=travis&colorA=000000&colorB=4000ff">
</a> <img src="https://img.shields.io/badge/made%20with-React-green.svg?logo=react&colorA=000000&colorB=4000ff" alt="made with React">
</div>

### Technologies: React, jest, enzyme, travis CI, heroku CD, JavaScript, Youtube's API, HTML, CSS, axios

## Index
* [Project Direction](#Project)
* [User stories](#user-stories)
* [Installation](#Install)
* [Npm Testing](#Npmtest)
* [Usage](#Usage)
* [Improvemets](#Improvements)

## <a name="Project">Project Direction</a>
I created this app to improve my understanding of testing with jest and enzyme, React components and API's. Although I ran into a few problems making this app I learned alot including shallow tesing with enzyme, state management, API usage and CI/CD with Travis CI and Heroku CD.

## <a name="user-stories">User Stories</a>

```
As a user of Video Player.
I expect to see a search bar, where I can input a term to search for the type of videos I want to watch.
```

```
As a user of Video Player.
When I enter a search term into the search bar and hit enter,
I expect to the loading... message to disappear and the app to rerender.
```

```
As a user of Video Player. 
When I enter a search term into the search bar and hit enter,
I expect the app to rerender with a selection of videos relevent to my search term.
```

```
As a user of Video Player. 
When I've searched for the video I want to watch,
I expect to be able to click the video and my video to begin playing.
```

## <a name="Install">Installation</a>
The deployed live app is [HERE](https://vuetube-react.herokuapp.com/)

* Or to clone the repo
```shell
$ git clone git@github.com:lroberts77/VueTube.git
$ cd Vuetube
$ npm install
```

## <a name="Npmtest">Npm Testing</a>
* In the root of the project
```shell
$ npm test
```

## <a name="Usage">Usage</a>
* In the root of the project
```shell
$ npm start
```
If a tab doesn't open with the Vuetube app running, open a new tab and type in http://localhost:5000 in the url bar and press enter. After Vuetube has loaded click on the search bar and type whatever video you want to see, then click on the video you want to watch.


## <a name="Improvements">Improvements</a>
* Add test coverage results
* Restyle the app
* Deploy app "COMPLETED"