/**
 * Account module.
 */
export let account: angular.IModule = angular.module('account', []);

account.config(function ($stateProvider: ng.ui.IStateProvider) {
    // Account route state.
    $stateProvider.state('tab.account', {
        url: '/account',
        views: {
            'tab-account': {
                templateUrl: 'pages/account/account.html',
                controller: 'AccountCtrl',
                controllerAs: 'vm'
            }
        }
    });
});
