import jwt from 'jsonwebtoken'



export const jwtGenerator = (id = '') => {
    return new Promise((resolve, rejects)=>{
        const payload = { id };

        jwt.sign(
            payload,
            process.env.SECRETORPRIVATEKEY,
            {
                expiresIn: '368d',
            } ,
            (err, token)=>{
                if(err){
                    console.log(err);
                    rejects('Token can be generated');
                }else{
                    resolve(token);
                }
            }
        )
    })
}

