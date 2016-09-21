import { chats } from './index';
import { IChatUser, IChatsService } from './chats.service';

class ChatsCtrl {
    static $inject = ['ChatsService'];
    chats: IChatUser[];

    constructor(private ChatsService: IChatsService) {
        this.chats = ChatsService.all();
    }

    remove(chat: IChatUser): void {
        this.ChatsService.remove(chat);
    }
}

chats.controller('ChatsCtrl', ChatsCtrl);
