module.exports.profile= function(req,res){
    return res.render('user_profile', {
        title: "User profile"
    });
}

module.exports.createUser= function(req,res){
    return res.end('<h1> Create a new User </h1>');
}