let UserSchema = require('../models/user');

function email(email){
    return new Promise((resolve, reject) => {
         UserSchema.find({email}, (err, docs) => {
             if(err) reject(err);

            resolve(docs);
        })
    })
}
function username(username){            //prints message if username already used in database
    return new Promise((resolve, reject) => {
         UserSchema.find({name: username}, (err, docs1) => {
             if(err) reject(err);

            resolve(docs1);
        })
    })
}


//module.exports = getUsers;
module.exports = {email, username}