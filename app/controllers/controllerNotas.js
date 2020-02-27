app.controller('NotasCtrl', function ($scope, $http) {

    $scope.buscar = function (id, nomeAluno, dataNascimento) {
        var data1 = {
            id: id,
            nomeAluno: nomeAluno,
            dataNascimento: dataNascimento
        };

        $http.get('http://localhost:8080/alunos', data1).then(function (response) {

            $scope.alunoList = response.data;
            console.log($scope.alunoList);

        });
    };

    $scope.ok = function (id, disciplinas) {
        var data = {
            id: id,
            disciplinas: disciplinas
        };

        $http.get('http://localhost:8080/disciplinas', data).then(function (response) {
            $scope.disciplinaList = response.data;
            console.log(response.data);

        });
    };

    $scope.add = function (alunos, disciplinas, primeiraNota, segundaNota, terceiraNota) {
        var data = {
            alunos: alunos,
            disciplinas: disciplinas,
            primeiraNota: primeiraNota,
            segundaNota: segundaNota,
            terceiraNota: terceiraNota
        };

        $http.post('http://localhost:8080/notas', data).then(function (response) {


        });
    };

});