import { homeModule } from './index';

class HomeCtrl {
    constructor(private $log: angular.ILogService, private $state: ng.ui.IStateService) {
    }

    searchById(id: string) {
        // this.HomeService.search(id);
    }

    goShop() {
        this.$log.info('Go to shop page...');
        this.$state.go('app.shops');
    }
}

homeModule.controller('HomeCtrl', HomeCtrl);
