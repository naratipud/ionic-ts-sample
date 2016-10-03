import { DashboardCtrl } from './dash.ctrl';
/**
 * Dashboard module.
 */
export let dashboardModule = angular.module('dashboard', [])

    .config(function ($stateProvider: ng.ui.IStateProvider) {
        // route state.
        $stateProvider.state('tab.dash', {
            url: '/dashboard',
            views: {
                'tab-dash': {
                    templateUrl: 'pages/dash/dash.html',
                    controller: 'DashboardCtrl'
                }
            }
        });
    })
    .controller('DashboardCtrl', DashboardCtrl);
