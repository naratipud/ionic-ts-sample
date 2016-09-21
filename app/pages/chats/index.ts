/**
 * Chats module.
 */
export let chats = angular.module('chats', []);

chats.config(function ($stateProvider: ng.ui.IStateProvider) {
    // Chats route state.
    $stateProvider.state('tab.chats', {
        url: '/chats',
        views: {
            'tab-chats': {
                templateUrl: 'pages/chats/chats.html',
                controller: 'ChatsCtrl',
                controllerAs: 'vm'
            }
        }
    });
});
