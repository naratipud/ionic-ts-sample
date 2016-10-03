import { IChatUser, IChatsService } from '../chats/chats.service';

interface IChatStateParams extends ng.ui.IStateParamsService {
    chatId: string;
}

/**
 * Chat detail controller
 */
export class ChatDetailCtrl {
    chat: IChatUser;

    constructor(private $stateParams: IChatStateParams, private ChatsService: IChatsService) {
        this.chat = ChatsService.get($stateParams.chatId);
    }
}
