import jwt from 'jsonwebtoken'



export const jwtGenerator = (id = '') => {

    const SECRET_PRIVATE_KEY:any = process.env.SECRETORPRIVATEKEY

    return new Promise((resolve, rejects)=>{
        const payload = { id };

        jwt.sign(
            payload,
            SECRET_PRIVATE_KEY,
            {
                expiresIn: '368d',
            } ,
            (err, token)=>{
                if(err){
                    console.log(err);
                    rejects('Token cant be generated');
                }else{
                    resolve(token);
                }
            }
        )
    })
}

