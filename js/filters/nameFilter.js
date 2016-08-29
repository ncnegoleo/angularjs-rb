angular.module("listaTelefonica").filter("name", function() {
   return function (input) {
       if (!input || !input.length) { return; }
       var listaDeNomes = input.split(" ");
       var listaDeNomesFormatada = listaDeNomes.map(function (nome) {
           if(/(da|das|de|do|dos)/.test(nome)) return nome;
          return nome.charAt(0).toUpperCase() + nome.substring(1).toLocaleLowerCase();
       });
       return listaDeNomesFormatada.join(" ");
   };
});
