import { chatDetail } from './index';
import { IChatUser, IChatsService } from '../chats/chats.service';

interface IChatStateParams extends ng.ui.IStateParamsService {
    chatId: string;
}

class ChatDetailCtrl {
    static $inject = ['ChatsService'];
    chat: IChatUser;

    constructor(private $stateParams: IChatStateParams, private ChatsService: IChatsService) {
        this.chat = ChatsService.get($stateParams.chatId);
    }
}

chatDetail.controller('ChatDetailCtrl', ChatDetailCtrl);
