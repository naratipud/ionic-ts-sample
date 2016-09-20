/**
 * Home module.
 */
export let homeModule: angular.IModule = angular.module('app.home', []);

homeModule.config(function ($stateProvider: ng.ui.IStateProvider) {
    // Set route state.
    $stateProvider.state('app.home', {
        url: '/home',
        views: {
            'app-home': {
                templateUrl: 'pages/home/home.html',
                controller: 'HomeCtrl',
                controllerAs: 'vm'
            }
        }
    });
});
