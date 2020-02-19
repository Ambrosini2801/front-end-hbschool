app.config(function($routeProvider){

    $routeProvider
    .when('/', {
        templateUrl : 'app/views/home.html',
        controller  : 'HomeCtrl',
    })

    .when('/cadastro', {
        templateUrl : 'app/views/cadastro.html',
        controller  : 'NotaCtrl',
    })

    .when('/boletim', {
        templateUrl : 'app/views/boletim.html',
        controller  : 'BoletimCtrl',
    })

    .otherwise ({ redirectTo: '/' });
});