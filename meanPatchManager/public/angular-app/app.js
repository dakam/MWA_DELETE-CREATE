angular.module("meanPatchManager", ['ngRoute']).config(config);

function config($routeProvider) {

    $routeProvider.when("/", {

        templateUrl:"angular-app/patchesList/patches.html",
        controller:"patchesController",
        controllerAs:"vm"
    }).when("/patches/:id", {
        templateUrl:"angular-app/singlePatch/singlepatch.html",
        controller:"singlePatchController",
        controllerAs:"vm"

    }).when("/patch/add", {

        templateUrl:"angular-app/patchAdd/addpatch.html",
        controller:"addpatchController",
        controllerAs:"vm"
    });

}