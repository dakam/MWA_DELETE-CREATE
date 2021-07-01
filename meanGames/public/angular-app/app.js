angular.module("meanGames", ['ngRoute']).config(config);

function config($routeProvider) {

    $routeProvider.when("/", {

        templateUrl:"angular-app/gamesList/games.html",
        controller:"gamesController",
        controllerAs:"vm"
    }).when("/games/:id", {
        templateUrl:"angular-app/singleGame/singlegame.html",
        controller:"singleGameController",
        controllerAs:"vm"

    })

}