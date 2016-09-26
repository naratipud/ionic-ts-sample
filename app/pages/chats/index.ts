/**
 * Chats module.
 */
export let chatsModule = angular.module('chats', []);

chatsModule.config(function ($stateProvider: ng.ui.IStateProvider) {
    // chatsModule route state.
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
