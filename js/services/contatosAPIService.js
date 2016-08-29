/**
 * Created by leonardo on 24/06/2016.
 */
angular.module('listaTelefonica').service("contatosAPI", function($http, config){

    this.getContatos = function () {
        return $http.get(config.baseUrl + "/contatos");
    };

    this.getById = function(id) {
        return $http.get(config.baseUrl + "/contatos/" + id);
    }

    this.saveContato = function (contato) {
        return $http.post(config.baseUrl + "/contatos", contato);
    };

    this.deleteContato = function (id) {
        return $http.delete(config.baseUrl + "/contatos/" + id);
    };
});