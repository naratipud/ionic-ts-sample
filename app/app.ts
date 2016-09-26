import { dashboard } from './pages/dash/index';
import { account } from './pages/account/index';
import { chatsModule } from './pages/chats/index';
import { chatDetail } from './pages/chat-detail/index';

/**
 * Ionic Starter App.
 */
export let app = angular.module('app', [
    'ionic',
    dashboard.name,
    account.name,
    chatsModule.name,
    chatDetail.name
]);

app.run(function ($ionicPlatform: ionic.platform.IonicPlatformService) {
    $ionicPlatform.ready(() => {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
});

app.config(function ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    $stateProvider.state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'pages/tabs/tabs.html'
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/dashboard');
});
