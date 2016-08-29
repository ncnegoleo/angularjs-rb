app.controller('detalhesContatoCtrl', function ($scope, contatosAPI, $routeParams) {

    var getContato = function (id) {
        contatosAPI.getById(id).success(function (data) {
            $scope.contato = data;
        });
    };

    getContato($routeParams.id);
});