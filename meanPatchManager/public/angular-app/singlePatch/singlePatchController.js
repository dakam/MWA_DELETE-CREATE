angular.module("meanPatchManager").controller("singlePatchController", singlePatchController);

function singlePatchController(patchFactory,  $routeParams, $location,$window,$scope) {

    const vm = this;
    let id = $routeParams.id;
    vm.err = false;
    vm.error = "";
    
        
        patchFactory.getOne(id).then(function(response) {

        vm.patch = response.data;
        
       
    })

  

    vm.deletePatch = function(patchId) {

        console.log("patchId", id)

        if(patchId && patchId.length==24 ) {

            patchFactory.deletePatch(patchId).then(function(response) {

                vm.err = false;
                vm.error = "";
                console.log("Patch Deleted", response)
                $location.path("/");

            }).catch(function(error) {

                vm.err = true;
                vm.error = error;

                
            })

        } else {

            vm.err = true;
            vm.error = "PatchId no found, please try again"


        }
    }
}


    