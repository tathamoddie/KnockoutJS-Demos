/// <reference path="../jquery-1.5.1.js" />
/// <reference path="../knockout-1.2.0.js" />

var refreshValidation = function () {
    $("form").removeData("validator");
    $("form").removeData("unobtrusiveValidation");
    $.validator.unobtrusive.parse("form");
};

var lifeViewModel = function () {
    var vm = {
        title: ko.observable(""),
        firstName: ko.observable(""),
        lastName: ko.observable(""),
        dateOfBirth: ko.observable("")
    };
    vm.ageNext = ko.dependentObservable(function () {
        var parsedDateOfBirth = new Date(vm.dateOfBirth());
        var years = new Date().getFullYear() - parsedDateOfBirth.getFullYear();
        return isNaN(years) ? '' : years;
    });
    return vm;
};

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
    vm.initialize = function (initialData) {
        var lifeCount = initialData.Lives.length;
        for (var i = 0; i < lifeCount; i++) {
            var life = initialData.Lives[i];
            var lifeVM = new lifeViewModel();
            lifeVM.title(life.Title);
            lifeVM.firstName(life.FirstName);
            lifeVM.lastName(life.LastName);
            lifeVM.dateOfBirth(life.DateOfBirth);
            vm.lives.push(lifeVM);
        }
    };
    return vm;
};

$(function () {
    $(".quote-interface").each(function () {
        var viewModel = new quoteViewModel();
        var initialJson = $(this).find("script.knockout-initial-data").html();
        if (initialJson.length > 0) {
            var initialData = ko.utils.parseJson(initialJson);
            viewModel.initialize(initialData);
        };
        ko.applyBindings(viewModel, this);
    });
});