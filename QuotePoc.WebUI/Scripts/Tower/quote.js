/// <reference path="../jquery-1.5.1.js" />
/// <reference path="../knockout-1.2.0.js" />
/// <reference path="site.js" />

var lifeViewModel = function () {
    var vm = {
        title: ko.observable(""),
        firstName: ko.observable(""),
        lastName: ko.observable(""),
        dateOfBirth: ko.observable("")
    };
    vm.formattedDateOfBirth = ko.dependentObservable({
        read: function () {
            var dateOfBirth = vm.dateOfBirth();
            var isValidDate = Object.prototype.toString.call(dateOfBirth) === "[object Date]" && !isNaN(dateOfBirth.getTime());
            return isValidDate
                ? dateOfBirth.getDate() + '/' + (dateOfBirth.getMonth() + 1) + '/' + dateOfBirth.getFullYear()
                : '';
        },
        write: function (value) {
            var d = /(\d{1,2})\/(\d{1,2})\/(\d{4})/.exec(value);
            if (d) {
                vm.dateOfBirth(new Date(+d[3], +d[2]-1, +d[1]));
            }
        },
        owner: vm
    });
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
    return vm;
};

$(function () {
    $(".quote-interface").applyViewModel(quoteViewModel);
});