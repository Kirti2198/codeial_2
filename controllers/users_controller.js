module.exports.profile= function(req,res){
    return res.end('<h1> User Profile </h1>');
}

module.exports.createUser= function(req,res){
    return res.end('<h1> Create a new User </h1>');
}