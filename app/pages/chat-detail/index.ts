import { ChatDetailCtrl } from './chat-detail.ctrl';
/**
 * Chat detail module.
 */
export let chatDetailModule = angular.module('chat.detail', [])

    .config(function ($stateProvider: ng.ui.IStateProvider) {
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
    })
    .controller('ChatDetailCtrl', ChatDetailCtrl);
