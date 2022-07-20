import jwt from 'jsonwebtoken'



export const jwtGenerator = (id = '') => {

    return new Promise((resolve, rejects)=>{
        const payload = { id };

        jwt.sign(
            payload,
            'Th1S1SMyS3CR37k3Y',
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

