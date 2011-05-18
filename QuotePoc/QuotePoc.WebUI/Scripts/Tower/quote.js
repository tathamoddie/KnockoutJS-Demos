/// <reference path="../jquery-1.5.1.js" />
/// <reference path="../knockout-1.2.0.js" />

var quoteInterfaceManager = function () {

    var lifeViewModel = function () {
        return {
            title: "",
            firstName: "",
            lastName: ""
        };
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