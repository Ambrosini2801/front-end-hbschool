app.controller('BoletimCtrl', function ($scope, $http) {

    $scope.gerar = function (id, nomeAluno, dataNascimento) {
        var data2 = {
            id: id,
            nomeAluno: nomeAluno,
            dataNascimento: dataNascimento
        };

        $http.get('http://localhost:8080/alunos', data2).then(function (response) {
            $scope.alunoList = response.data;
            console.log(response);

        });

    };
});
