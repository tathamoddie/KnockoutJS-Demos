﻿/// <reference path="../jquery-1.5.1.js" />
/// <reference path="../knockout-1.2.0.js" />

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
    vm.addLife = function () {
        vm.lives.push(new lifeViewModel());
    };
    return vm;
};

$(function () {
    $(".quote-interface").each(function () {
        ko.applyBindings(new quoteViewModel(), this);
    });
});