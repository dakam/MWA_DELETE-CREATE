angular.module("meanPatchManager").factory("patchFactory", patchFactory);

function patchFactory($http) {

    return {
        getAll: getAllPatches,
        getOne: getOnePatch,
        addPatch: addOnePatch,
        deletePatch:deleteOnePatch
     
    }

    function deleteOnePatch(patchId) {

        return $http.delete("/api/patches/"+patchId).then(complete).catch(failed);

    }

    function addOnePatch(newPatch) {
        return $http.post("/api/patches", newPatch).then(complete).catch(failed);
    }

    function getAllPatches() {
        return $http.get("/api/patches").then(complete).catch(failed);
    }

    function getOnePatch(gid) {

        return $http.get("/api/patches/"+gid).then(complete).catch(failed);
    }
    
    function complete(response) {
    
        console.log(response)
    
        return response;
      
    }
    
    function failed(error) {

        console.log(error)
        return error.status.statusText;
    }
}

