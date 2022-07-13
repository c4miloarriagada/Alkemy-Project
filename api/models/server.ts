import express, { Application } from 'express';
import cors from 'cors'

import userRoutes from '../routes/users'
import login from '../routes/login'
import db from '../database/connection';


class Server {

    private app: Application;
    private port: string;
    private paths = {
        users: '/api/users',
        login: '/api/login',
        finance: '/api/finance'
    }

    constructor(){
        this.app = express();

        this.port = process.env.PORT || '8000';

        this.dbConnection();

        this.middlewares();

        this.routes();
    }

    async dbConnection () {
        try {
            await db.authenticate();
            console.log('===================')
            console.log('Data Base Connected')
            console.log('===================')
        } catch (err) {
           console.log(err)
        }
    }


    middlewares(){

        this.app.use( cors() );

        this.app.use( express.json() );

        this.app.use( express.static('public') );

    }


    routes(){
        this.app.use(this.paths.users, userRoutes);
        this.app.use(this.paths.login, login);
        this.app.use(this.paths.finance, login)
    }


    listen(){
        this.app.listen( this.port, ()=>{
            console.log('Server listening at port ' + this.port);
        } )
    }

}


export default Server;