

const verifyRole = (req,res,next)=>{
    console.log("role has been verified")
//    database work
    if(false)
    {
        res.send("problem ocucred")
    }
    next();
}

export default verifyRole;