import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Components from './components/components';
import AppComponent from './app.component';
import ngMaterial from 'angular-material';
//import 'normalize.css';

angular.module('app', [
    uiRouter,
    ngMaterial,
    Components
  ])
  .config(($locationProvider) => {
    "ngInject";
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
