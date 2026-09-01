const adminAuth=(req,res,next)=>{
    console.log("admin is getting authenticated");
    const token ="bhumika";
    const isAdminAuthorized=token ==="bhumika";
    if(!isAdminAuthorized){
        res.status(401).send("unauthorized request");
    }
    else{
        next();
    }
};


const userAuth=(req,res,next)=>{
    console.log("user is getting authorized");
    const token="bhumika";
    const isAdminAuthorized=token ==="bhumika";
    if(!isAdminAuthorized){
        res.status(401).send("unauthorized request");
    }
    else{
        next();
    }
}
;

module.exports={
    adminAuth,userAuth
}