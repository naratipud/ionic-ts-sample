import { account } from './index';

interface ISettings {
    enableFriends: boolean;
}

class AccountCtrl {
    settings: ISettings;

    constructor() {
        this.settings = { enableFriends: true };
    }
}

account.controller('AccountCtrl', AccountCtrl);
