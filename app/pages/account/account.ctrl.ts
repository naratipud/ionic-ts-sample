import { account } from './index';

class AccountCtrl {
    settings = { enableFriends: false };
    constructor() {
        this.settings.enableFriends = true;
    }
}

account.controller('AccountCtrl', AccountCtrl);
