app.controller('HomeCtrl', function ($scope) {
    $scope.title = 'Bem-vindo ao nosso gerador de boletim!';
});

app.controller('CadastroCtrl', function ($scope, $http) {

    $scope.salvar = function (nome, data) {
        var data = {
            nomeAluno: nome,
            dataNascimento: data

        };

        $http.post('http://localhost:8080/alunos', data)
    };

    $scope.ok = function (disciplinas) {
        var disciplinas = {
            disciplinas: disciplinas,
        };

        $http.post('http://localhost:8080/disciplinas', disciplinas)
    };

});