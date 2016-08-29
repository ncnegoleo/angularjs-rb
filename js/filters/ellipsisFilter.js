angular.module('listaTelefonica').filter("ellipsis", function () {

    return function (input, size) {
        if (!input || !input.length) { return; }
        if (input.length <= size) return input;
        return input.substring(0, (size || 10)) + "...";
    };
});