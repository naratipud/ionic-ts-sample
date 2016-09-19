export let app: angular.IModule = angular.module('app', [
    'ionic',
]);

export class InitApp {
    constructor($ionicPlatform: ionic.platform.IonicPlatformService, $window: angular.IWindowService) {
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
    }
}

app.run(InitApp);
