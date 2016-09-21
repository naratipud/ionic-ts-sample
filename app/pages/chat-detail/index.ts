/**
 * Chat detail module.
 */
export let chatDetail = angular.module('chat.detail', []);

chatDetail.config(function ($stateProvider: ng.ui.IStateProvider) {
    // Chat detail route state.
    $stateProvider.state('tab.chat-detail', {
        url: '/chats/:chatId',
        views: {
            'tab-chats': {
                templateUrl: 'pages/chat-detail/chat-detail.html',
                controller: 'ChatDetailCtrl',
                controllerAs: 'vm'
            }
        }
    });
});
