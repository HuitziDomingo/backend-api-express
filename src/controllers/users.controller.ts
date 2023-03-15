import { Request, Response } from "express"
import { User } from '../entities/user'
import { AppDataSource } from '../db'

export class Users {


    static async showUser(req: Request, res: Response) {
        let users = await AppDataSource.getRepository(User).find()
        res.json(users)
    }


    static async createUser(req: Request, res: Response) {
        try {
            let { numero_1, numero_2 } = req.body
            let operacion = numero_1 + numero_2
            let user = AppDataSource.getRepository(User).create({ numero_1, numero_2, operacion })
            let results = await AppDataSource.getRepository(User).save(user)
            return res.send(results)
        } catch (error) {
            res.send(error)
        }
    }


}