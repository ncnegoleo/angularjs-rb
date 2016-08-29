var app = angular.module('ptBrMasks', []);

/**
 *
 */
app.directive('uiCpf', function ($filter) {
    return {
        require: "ngModel",
        link: function (scope, element, attrs, ctrl) {
            var _formatCpf = function (cpf) {
                if(cpf === undefined) {return;};
                cpf = cpf.replace(/[^0-9]+/g, "");
                if (cpf.length > 3) {
                    cpf = cpf.substring(0, 3) + "." + cpf.substring(3)
                }
                if (cpf.length > 7) {
                    cpf = cpf.substring(0, 7) + "." + cpf.substring(7)
                }
                if (cpf.length > 11) {
                    cpf = cpf.substring(0, 11) + "-" + cpf.substring(11, 13)
                }
                return cpf;
            };

            element.bind("keyup", function () {
                ctrl.$setViewValue(_formatCpf(ctrl.$viewValue));
                ctrl.$render();
            });

            ctrl.$parsers.push(function (value) {
                return value;
            });
        },
    }
});

/**
 *
 */
app.directive('uiDate', function ($filter) {

    return {
        require: "ngModel",
        link: function (scope, element, attrs, ctrl) {
            var _formatDate = function (date) {
                if($filter === undefined) {return;};
                date = date.replace(/[^0-9]+/g, "");
                if (date.length > 2) {
                    date = date.substring(0, 2) + "/" + date.substring(2);
                }
                if (date.length > 5) {
                    date = date.substring(0, 5) + "/" + date.substring(5, 9);
                }
                return date;
            };

            element.bind("keyup", function () {
                ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
                ctrl.$render();
            });

            ctrl.$parsers.push(function (value) {
                if (value.length === 10) {
                    var dateArray = value.split("/");
                    return new Date(dateArray[2], dateArray[1] - 1, dateArray[0]).getTime();
                }
            });
            ctrl.$formatters.push(function (value) {
                return $filter("date")(value, "dd/MM/yyyy");
            });
        },
    };
});

/**
 *
 */
app.directive('uiTelefone', function ($filter) {

    return {
        require: "ngModel",
        link: function (scope, element, attrs, ctrl) {
            // 87 991955410
            var _formatTelefone = function (telefone) {
                if(telefone === undefined) {return;};
                telefone = telefone.replace(/[^0-9]+/g, "");
                if (telefone.length > 2 ) {
                    telefone = telefone.substring(0, 2) + " " + telefone.substring(2)
                }
                if(telefone.length > 7 && telefone.length <= 12) {
                    telefone = telefone.substring(0, 7) + "-" + telefone.substring(7);
                }
                if(telefone.length > 12) {
                    telefone = telefone.replace(/(\-)+/, "");
                    telefone = telefone.substring(0, 8) + "-" + telefone.substring(8, 12);
                }
                return telefone;
            };

            element.bind("keyup", function () {
                ctrl.$setViewValue(_formatTelefone(ctrl.$viewValue));
                ctrl.$render();
            });

            ctrl.$parsers.push(function (value) {
                return value;
            });
        },
    }
});