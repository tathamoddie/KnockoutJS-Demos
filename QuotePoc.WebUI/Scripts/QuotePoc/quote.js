/// <reference path="../jquery-1.5.1.js" />
/// <reference path="../knockout-1.2.0.js" />
/// <reference path="site.js" />
/// <reference path="life.js" />

var quoteViewModel = function () {
    var vm = {
        lives: new ko.observableArray()
    };
    vm.submitEnabled = ko.dependentObservable(function () {
        return vm.lives().length > 0;
    });
    vm.addLife = function () {
        vm.lives.push(new lifeViewModel());
        refreshValidation();
    };
    return vm;
};

$(function () {
    $(".quote-interface")
        .applyViewModel(quoteViewModel, function (initialData, viewModel) {
            if (initialData.Lives) {
                //TODO: Wrap this up in to a generic framework method. There's no reason for this to be handcoded.
                var lifeCount = initialData.Lives.length;
                for (var i = 0; i < lifeCount; i++) {
                    var life = initialData.Lives[i];
                    var lifeVM = new lifeViewModel();
                    lifeVM.title(life.Title);
                    lifeVM.firstName(life.FirstName);
                    lifeVM.lastName(life.LastName);
                    lifeVM.dateOfBirth(life.DateOfBirth);
                    viewModel.lives.push(lifeVM);
                }
            }
        });
});