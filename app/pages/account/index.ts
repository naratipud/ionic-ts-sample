import { AccountCtrl } from './account.ctrl';
/**
 * Account module.
 */
export let accountModule = angular.module('account', [])

    .config(function ($stateProvider: ng.ui.IStateProvider) {
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
    })
    .controller('AccountCtrl', AccountCtrl);
