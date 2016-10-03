/**
 * 
 */
export interface IChatsService {
    all(): IChatUser[];
    remove(chat: IChatUser);
    get(chatId: string): IChatUser;
}

export interface IChatUser {
    id: Number;
    name: String;
    lastText: String;
    face: String;
}

/**
 * Chats service 
 */
export class ChatsService implements IChatsService {
    chats: IChatUser[];

    constructor() {
        this.chats = [
            {
                id: 0,
                name: 'Tim Lancina',
                lastText: 'You on your way?',
                face: 'https://pbs.twimg.com/profile_images/477446871636393985/jPeOlsdz.jpeg'
            }, {
                id: 1,
                name: 'Max Lynx',
                lastText: 'Hey, it\'s me',
                face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
            }, {
                id: 2,
                name: 'Adam Bradleyson',
                lastText: 'I should buy a boat',
                face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
            }, {
                id: 3,
                name: 'Perry Governor',
                lastText: 'Look at my mukluks!',
                face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
            }, {
                id: 4,
                name: 'Brandy Carney',
                lastText: 'This is wicked good ice cream.',
                face: 'https://pbs.twimg.com/profile_images/698530343297556482/EaRzOPMt.jpg'
            }];
    }

    all(): IChatUser[] {
        return this.chats;
    }

    remove(chat: IChatUser) {
        this.chats.splice(this.chats.indexOf(chat), 1);
    }

    get(chatId: string): IChatUser {
        for (let chat of this.chats) {
            if (chat.id === Number(chatId)) {
                return chat;
            }
        }
        return null;
    }
}
