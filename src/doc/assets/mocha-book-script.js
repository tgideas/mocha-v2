/*
 * Mocha Book Scrtip
 */
var mochaBook = (function () {
    var util = {}, init = function () { };
    util.showCode = function () {
        $("div.page-wrapper").on("click", "a.example-prev-code", function () {
            var $examplePrev = $(this).parent();
            var $pre = $examplePrev.next();
            $examplePrev.toggleClass("show-code");
            if ($examplePrev.hasClass("show-code")) {
                $pre.show();
            } else {
                $pre.hide();
            }
        })
    }
    init = function () {
        util.showCode();
    };
    return {
        init: init
    }
})();
mochaBook.init();
