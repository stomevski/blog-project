const mongo = require('mongoose');

mongo.connect('mongodb+srv://admin:admin123@project1.rguax.mongodb.net/Project1?retryWrites=true&w=majority',(err) => {
    if(err) {
        console.log(err);
    }

    console.log('Connected Successful');
})


module.exports = mongo ;