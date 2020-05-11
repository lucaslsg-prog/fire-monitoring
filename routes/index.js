const express = require('express');
const router = express.Router();
const ttn = require("ttn")
var appID = "aplication-ufam-01"
var accessKey = "ttn-account-v2.8M6ONqBxrPe15YbwaMBxnJtlrSNSwYdAVHzviQBc2n4"

//API REST
module.exports = function(io){

    ttn.data(appID, accessKey)
    .then(function (client) {
        client.on("uplink", function (devID, payload) {
            console.log("Received uplink from ", devID)
            console.log(payload)
            io.emit('chegou',{dados:payload});
        })
    })
    .catch(function (error) {
        console.error("Error", error)
         process.exit(1)
    })

    router.get('/dashboard',(req,res)=>{
        res.render("dashboard.html");
    });
    return router;

}
