import express, { Application } from "express";

import { IRoutes } from '../interfaces/server';

class Server {
    PORT: number | string;
    routes: IRoutes;
    app: Application
    
    constructor(){
        this.routes = {
            
        };
        this.PORT = process.env.PORT || 8000;
        this.app = express();
    }

    listen(): void {
        this.app.listen( this.PORT, () => {
            console.log("Servidor Iniciado");
        } )
    }
    
}

export default Server;