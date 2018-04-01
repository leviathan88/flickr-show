## Instructions
```sh
$ git clone git@github.com:leviathan88/flickr-show.git
$ cd flickr-show
$ npm install
(plug in your Android Phone or run Emulator, tested on: Nexus 5X API 24)
$ react-native run-android
(if there are problems with sdk path follow instructions on: https://stackoverflow.com/questions/32634352/react-native-android-build-failed-sdk-location-not-found)
```

## Libraries used

```
native-base -> cross platform UI components, reason: for faster development, and good looks :)

react-native-router-flux -> declarative RN router, based on React Navigation, reason: awesome to use with Flux pattern

react-redux -> react bindings for redux, reason: need it for redux

redux -> state container for JS apps, reason: best state management tool

redux-observable -> rxjs based middleware for redux, reason: to handle all 
the async actions with reactive programming

rxjs -> The ReactiveX library for JavaScript, reason: need it for redux-observable and reactive programming
```