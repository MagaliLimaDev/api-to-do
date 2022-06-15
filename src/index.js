//import express from "express";
const express = require('express');
const app = express();

//import {usuario} from './controllers/usuario-controller';

const usuario = require('./controllers/usuario-controller');
const tarefa = require('./controllers/tarefa-controller');

app.listen(3000, ()=>{
    console.log('rota ativa')
});
