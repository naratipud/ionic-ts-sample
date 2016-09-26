import { chatsModule } from './index';
import { IChatUser, IChatsService } from './chats.service';

class ChatsCtrl {
    chats: IChatUser[];

    constructor(private ChatsService: IChatsService) {
        this.chats = ChatsService.all();
    }

    remove(chat: IChatUser): void {
        this.ChatsService.remove(chat);
    }
}

chatsModule.controller('ChatsCtrl', ChatsCtrl);
