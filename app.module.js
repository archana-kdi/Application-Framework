app.module.js
In this file the root Angular module for the application is registered. Also some additional configuration can be performed, e.g. creating a state, registering the app in the ‘navigationService’, etc.

(function (angular) {

    'use strict';



    var mainState = '2cfdf119-fbe3-40c7-b780-3fdb90df87fb';



    angular.module('PoseidonApplication1', [])

        .config(function ($stateProvider) {

            // Poseidon uses angular-ui-router for naviagtion

            $stateProvider.state(mainState, {

                url: '/PoseidonApplication1',

                templateUrl: 'Server/Modules/PoseidonApplication1/mainView.html'

            });

        }).run(function (navigationService) {



            // Register our new view with the Poseidon navigationService. 

            // It will show inside the main navigation menu.

            navigationService.registerApplication({

                id: '2cfdf119-fbe3-40c7-b780-3fdb90df87fb',

                label: 'PoseidonApplication1',

                state: mainState

            });

        });

})(angular);

