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
            disciplinas: disciplinas
        };

        $http.post('http://localhost:8080/disciplinas', disciplinas)
    };

    $scope.okey = function (notas) {
        var notas = {
            primeiraNota: primeira_nota,
            segundaNota: segunda_nota,
            terceiraNota: terceira_nota
        };

        $http.post('http://localhost:8080/notas', notas)
    };
});