const mongoose = require("mongoose");

const clientSchema = mongoose.Schema({
    name: {
        type: String,
    },
    os: {
        type: String
    },
    status: String,
})

const patchSchema = mongoose.Schema({

    name : {
        type: String,
        required: false,
    },
    description: {
        type: String,
        require:false,
    },
    vendor: {
        type: String
    },
    year: Number,
    clients: [clientSchema]
})

mongoose.model("Patch", patchSchema, "patches");