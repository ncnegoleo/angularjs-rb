app.controller('listaTelefonicaCtrl', function ($scope, contatosAPI) {

    $scope.app = 'Lista Telefônica';

    $scope.botaoApagarContatos = 'Apagar Contato'

    $scope.contatos = [];

    var carregarContatos = function () {
        contatosAPI.getContatos().success(function (data) {
            $scope.contatos = data;
        }).error(function (data, status) {
            $scope.error = "Não foi possivel carregar os dados!";
        });
    };

    $scope.apagarContatos = function (contatos) {
        contatos.forEach(function (contato) {
            if (contato.selecionado) {
                contatosAPI.deleteContato(contato.id);
            }
        });
        $scope.contatos = contatos.filter(function (contato) {
            if (!contato.selecionado) return contato;
        });
        $scope.hasContatoSelecionado = false;
    };

    $scope.verificarContatoSelecionado = function (contatos) {
        $scope.hasContatoSelecionado = contatos.some(function (contato) {
            return contato.selecionado
        });
    }
    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao
    };

    carregarContatos();
});