var app = angular.module('app', ['ngRoute']);

app.controller('NotaCtrl', function ($scope, $http) {

    $scope.salvar = function (nome, data) {
        var data = {
            nomeAluno: nome,
            dataNascimento: data
        };

        $http.post('http://localhost:8080/alunos', data)
    };

    $scope.ok = function (disciplinas) {
        var disciplinas = {
            id: id,
            disciplinas: disciplinas
        };

        $http.post('http://localhost:8080/disciplinas', disciplinas)
    };

    $scope.buscar = function (notas) {
        var notas = {
            id_alunos: id_alunos,
            id_disciplinas: id_disciplinas,
            primeiraNota: primeira_nota,
            segundaNota: segunda_nota,
            terceiraNota: terceira_nota
        };

        $http.get('http://localhost:8080/notas', notas)
    };
});