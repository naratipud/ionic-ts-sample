import { ChatsCtrl } from './chats.ctrl';
import { ChatsService } from './chats.service';
/**
 * Chats module.
 */
export let chatsModule = angular.module('chats', [])

    .config(function ($stateProvider: ng.ui.IStateProvider) {
        // route state.
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
    })
    .controller('ChatsCtrl', ChatsCtrl)
    .factory('ChatsService', () => new ChatsService());
