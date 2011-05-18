/// <reference path="../jquery-1.5.1.js" />
/// <reference path="../knockout-1.2.0.js" />

var quoteInterfaceManager = function () {

    var viewModel = {
        lives: new ko.observableArray([
            { title: "Mr", firstName: "Tatham", lastName: "Oddie" },
            { title: "Mr", firstName: "Jake", lastName: "Robson" }
        ])
    };

    return {
        init: function () {
            ko.applyBindings(viewModel);
        }
    };

}();

$(quoteInterfaceManager.init);