app.controller('novoContatoCtrl', function ($scope, contatosAPI, $location) {

    $scope.operadoras = [
        { nome: "Oi", codigo: "14", categoria: "Celular" },
        { nome: "Vivo", codigo: "15", categoria: "Celular" },
        { nome: "Tim", codigo: "41", categoria: "Celular" },
        { nome: "GVT", codigo: "25", categoria: "Fixo" },
        { nome: "Embratel", codigo: "21", categoria: "Fixo" },
    ];

    $scope.adicionarContato = function (contato, isRediecionar) {
        contato.id = Math.floor((Math.random() * 10000) + 1);
        contatosAPI.saveContato(contato).success(function (data) {
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            if (isRediecionar) {
                $scope.toContatos();
            }
        });
    };

    $scope.toContatos = function () {
        $location.path('/contatos')
    }

    $scope.myModal = "#myModal";
});