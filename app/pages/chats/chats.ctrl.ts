import { IChatUser, IChatsService } from './chats.service';

/**
 * Chats controller
 */
export class ChatsCtrl {
    chats: IChatUser[];

    constructor(private ChatsService: IChatsService) {
        this.chats = ChatsService.all();
    }

    remove(chat: IChatUser): void {
        this.ChatsService.remove(chat);
    }
}
