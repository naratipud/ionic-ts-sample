import { IChatsService } from './chats.service';

describe('Service: ChatsService', () => {

    beforeEach(() => {
        angular.mock.module('app');
        angular.mock.module('chats');
    });

    describe('#all()', () => {

        it('should not empty chat list.', inject(function (ChatsService: IChatsService) {
            let chats = ChatsService.all();
            expect(angular.equals(chats, [])).toBeFalsy();
        }));

    });

});
