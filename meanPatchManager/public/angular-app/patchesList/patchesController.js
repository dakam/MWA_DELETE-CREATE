angular.module("meanPatchManager").controller("patchesController", patchesController);

function patchesController(patchFactory) {
    const vm = this;

    patchFactory.getAll().then(function(response) {

        console.log(response);
        vm.patches = response.data;
    })
    
}