import jwt from "jsonwebtoken"

const isAuth = (req, res, next) => {
    try {
        // Check cookies first, then fall back to Authorization header
        let token = req.cookies?.token;
        if (!token && req.headers.authorization) {
            const authHeader = req.headers.authorization;
            if (authHeader.startsWith("Bearer ")) {
                token = authHeader.split(" ")[1];
            }
        }

        if(!token){
            return res.status(401).json({message:"Unauthorized"})
        }
        const verifyToken = jwt.verify(token, process.env.JWT_SECRET)  // verify the token using the secret(jwt) key
        if(!verifyToken){
            return res.status(401).json({message:"Unauthorized"})
        }

        req.userId = verifyToken.userId
        next()
    }catch (error) {
        return res.status(500).json({message:`isAuth middleware error: ${error}`})
    }
}

export default isAuth