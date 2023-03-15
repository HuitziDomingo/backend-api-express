import express from "express"
import cors from 'cors'
import morgan from 'morgan'
import Users from './routes/user.routes'

const app = express()

//Middelwares
app.use(cors())
app.use(express.json())// Procesar elementos JSON 
app.use(morgan('dev'))// Ver las peticiones en consola

app.use(Users)

export default app