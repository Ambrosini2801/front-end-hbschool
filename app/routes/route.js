app.config(function($routeProvider){

    $routeProvider
    .when('/', {
        templateUrl : 'app/views/home.html',
        controller  : 'HomeCtrl',
    })

    .when('/cadastro', {
        templateUrl : 'app/views/cadastro.html',
        controller  : 'CadastroCtrl',
    })

    .when('/notas', {
        templateUrl : 'app/views/notas.html',
        controller : 'NotasCtrl',
    })

    .when('/boletim', {
        templateUrl : 'app/views/boletim.html',
        controller  : 'BoletimCtrl',
    })
   

    .otherwise ({ redirectTo: '/' });
});