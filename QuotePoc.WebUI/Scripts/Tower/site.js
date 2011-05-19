/// <reference path="../jquery-1.5.1.js" />
/// <reference path="../knockout-1.2.0.js" />
/// <reference path="../json2.js" />

var refreshValidation = function () {
    $("form").removeData("validator");
    $("form").removeData("unobtrusiveValidation");
    $.validator.unobtrusive.parse("form");
};

(function (jQuery) {
    jQuery.fn.applyViewModel = function (viewModelType) {
        this.each(function () {
            var viewModel = new viewModelType();
            var initialJson = $(this).find("script.knockout-initial-data").html();
            if (initialJson.length > 0) {
                var initialData = JSON.parse(initialJson);
                if (initialData.Lives) {
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
            };
            ko.applyBindings(viewModel, this);
        });
    };
})(jQuery);