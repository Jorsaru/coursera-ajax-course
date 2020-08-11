(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var firstController = this;

    firstController.toBuy = ShoppingListCheckOffService.getToBuyItems();

    firstController.buyItem = function (itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);

    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var secondController = this;

    secondController.bought = ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var toBuy = [
      {
        name: "pineapples",
        quantity: "3"
      },
      {
        name: "watermelons",
        quantity: "4"
      },
      {
        name: "apples",
        quantity: "5"
      },
      {
        name: "bananas",
        quantity: "3"
      },
      {
        name: "pears",
        quantity: "4"
      }
    ];

    var bought = [];

    service.getToBuyItems = function () {
      return toBuy;
    };

    service.buyItem = function (itemIndex) {
      bought.push(toBuy[itemIndex]);
      toBuy.splice(itemIndex, 1);
    };

    service.getBoughtItems = function () {
      return bought;
    }
  }

})();
