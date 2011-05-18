/// <reference path="../jquery-1.5.1.js" />
/// <reference path="../knockout-1.2.0.js" />

var quoteInterfaceManager = function () {

    var lifeViewModel = function () {
        var vm = {
            title: ko.observable(""),
            firstName: ko.observable(""),
            lastName: ko.observable(""),
            dateOfBirth: ko.observable("")
        };
        vm.ageNext = ko.dependentObservable(function () {
            var parsedDateOfBirth = new Date(vm.dateOfBirth());
            return new Date().getFullYear() - parsedDateOfBirth.getFullYear();
        });
        return vm;
    };

    var viewModel = {

        lives: new ko.observableArray(),

        addLife: function () {
            viewModel.lives.push(new lifeViewModel());
        }
    };

    return {
        init: function () {
            ko.applyBindings(viewModel);
        }
    };

} ();

$(quoteInterfaceManager.init);