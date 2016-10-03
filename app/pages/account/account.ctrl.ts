interface ISettings {
    enableFriends: boolean;
}

/**
 * Account controller
 */
export class AccountCtrl {
    settings: ISettings;

    constructor() {
        this.settings = { enableFriends: true };
    }
}
