const User = require('../models/users');
const {hash} = require('../helper/hash');

exports.createUser = async(req,res) => {
   const newUser = new User();
        newUser.name = req.body.name;
        newUser.email = req.body.email;
        newUser.password = await hash(req.body.password);
        newUser.role = 'STANDARD_USER';
        newUser.date = new Date();
        newUser.save().then((user)=>{
            res.send(user).status(201);
        }).catch((error) => {
            res.send(error).status(400)
        }
        )
}
