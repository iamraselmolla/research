import jwt from "jsonwebtoken"
const secretKey = "f4c1e7001409121f1db8aa18f8dc841c4a861fb03e116717abb1ef95b5f4cd609046109907876726261eeb21b4dcd57a0b97849fb090abb74e2c10e1";

export const isStudent=(req, res, next)=> {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];
  jwt.verify(token,secretKey,(err,decoded)=>{
    if(err){
      return res.status(401).json({ error: 'Wrong Token Value' });
    }
    else{
      if(decoded.role==='student'){
        next(req,res,next,decoded);
      }
      else{
        return res.status(401).json({error:'Unauthorized'});
      }
    }
  })

}

export const  isAdmin=(req, res, next)=> {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];
  jwt.verify(token,secretKey,(err,decoded)=>{
    if(err){
      return res.status(401).json({ error: err });
    }
    else{
      if(decoded.role==='admin'){
        next(req,res,next,decoded);
      }
      else{
        return res.status(401).json({error:'Unauthorized'});
      }
    }
  })

}

export const  isFaculty=(req, res, next)=> {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];
  jwt.verify(token,secretKey,(err,decoded)=>{
    if(err){
      return res.status(401).json({ error: err });
    }
    else{
      if(decoded.role==='faculty'){
        next(req,res,next,decoded);
      }
      else{
        return res.status(401).json({error:'Unauthorized'});
      }
    }
  })

}