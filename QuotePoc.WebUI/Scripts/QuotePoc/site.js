/// <reference path="../jquery-1.5.1.js" />
/// <reference path="../knockout-1.2.0.js" />
/// <reference path="../json2.js" />

var refreshValidation = function () {
    $("form").removeData("validator");
    $("form").removeData("unobtrusiveValidation");
    $.validator.unobtrusive.parse("form");
};

(function (jQuery) {
    jQuery.fn.applyViewModel = function (viewModelType, hydrateCallback) {
        this.each(function () {
            var viewModel = new viewModelType();
            var initialJson = $(this).find("script.knockout-initial-data").html();
            if (initialJson.length > 0) {
                var initialData = JSON.parse(initialJson);
                hydrateCallback(initialData, viewModel);
            };
            ko.applyBindings(viewModel, this);
        });
    };
})(jQuery);