import jwt from 'jsonwebtoken' 

const auth = (req,res,next) => {
    const token = req.headers.authorizatioin;

    try {
        jwt.verify(token , process.env.SECRET);
        next();
    } catch (error) {
        res.json({success : false , message : "Invalid Token" });
    }
}

export default auth;