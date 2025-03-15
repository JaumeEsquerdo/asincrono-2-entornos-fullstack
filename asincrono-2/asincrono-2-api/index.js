import express from 'express';

import {PORT, DOMAIN} from './config/config.js'

import {conectarDB} from './db/mongoose.js'

import cors from 'cors' //para q funcione el fetch al front

import router from './routes/index.routes.js'

const app = express()

app.use(cors()); // conectar desde cualquier conexión
app.use(express.json()); // leer datos que vienen en el body de mi req
app.use(express.urlencoded({extended:true})); // leer datos de un form html


conectarDB();


//rutas front

console.clear(); //limpiar terminal aal reiniciar proyecto

app.get("/", (req,res)=>{
    res.send('Asíncrono 2 con mongo')
})

app.use("api/v1", router)

app.listen(PORT, ()=>{
    console.log(`servidor funcionando en ${DOMAIN}:${PORT}`)
})