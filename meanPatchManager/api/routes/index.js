const express = require("express");
const {PatchesGetOne, PatchesGetAll,PatchesAddOne,PatchesFullUpdateOne,
PatchesPartialUpdateOne,PatchesDeleteOne } = require("../controllers/patchesController")

const{ClientsGetAll,ClientsAddOne,ClientsGetOne,ClientsFullUpdateOne,ClientsPartialUpdateOne,ClientsDeleteOne} = require("../controllers/clientsController")

const router = express.Router();

router.route("/patches")
.get(PatchesGetAll)
.post(PatchesAddOne);

router.route("/patches/:patchId")
.get(PatchesGetOne)
.put(PatchesFullUpdateOne)
.patch(PatchesPartialUpdateOne)
.delete(PatchesDeleteOne)

router.route("/patches/:patchId/clients")
.get(ClientsGetAll)
.post(ClientsAddOne)

router.route("/patches/:patchId/clients/:clientId")
.get(ClientsGetOne)
.put(ClientsFullUpdateOne)
.patch(ClientsPartialUpdateOne)
.delete(ClientsDeleteOne);


module.exports = router;