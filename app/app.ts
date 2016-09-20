/**
 * Ionic app bootstrap.
 */
export let app = angular.module('app', [
    'ionic',
    'app.home'
]);

app.run(function ($ionicPlatform: ionic.platform.IonicPlatformService, $window: angular.IWindowService) {
    // Setup ionic platform.
    $ionicPlatform.ready(() => {
        if ($window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            $window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            $window.cordova.plugins.Keyboard.disableScroll(true);
        }
        if ($window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
});

app.config(function ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    // if none of the above states are matched, use this as the fallback
    $stateProvider.state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'pages/tabs/tabs.html'
    });

    $urlRouterProvider.otherwise('/app/home');
});
