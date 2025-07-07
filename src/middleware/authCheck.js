import jwt from "jsonwebtoken"

export const authCheck = async (req, res, next) =>{
  try {
    const auth = await req.headers.authorization
    const token = auth.split(' ')[1]
    const payLoad = jwt.verify(token, process.env.JWT_KEY)
    if(payLoad) req.payLoad = payLoad
    if(!payLoad) return res.status(404).json({message: 'unauthorized'})

    next()

  } catch (error) {
    return res.status(404).json({message : 'unauthorized'})
  }
}

export const authToken = async (req, res, next) => {
  try {
    if(!req.payLoad){ 
   return res.status(404).json({message : error.message})
    }
    next()
  }

   catch (error) {
    res.status(404).json({messaage: error.message})
  }
}