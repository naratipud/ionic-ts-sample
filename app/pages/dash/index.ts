/**
 * Dashboard module.
 */
export let dashboard: angular.IModule = angular.module('dashboard', []);

dashboard.config(function ($stateProvider: ng.ui.IStateProvider) {
    // Dashboard route state.
    $stateProvider.state('tab.dash', {
        url: '/dashboard',
        views: {
            'tab-dash': {
                templateUrl: 'pages/dash/dash.html',
                controller: 'DashboardCtrl'
            }
        }
    });
});
