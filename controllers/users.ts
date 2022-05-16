import { Request, Response } from 'express'
import { createUserPrisma } from '../services/users'

export async function userCreate(req: Request, res: Response) {
    try{
        await createUserPrisma()
        res.status(200).send({
            'message' : 'User created successfully !',
            'user' : 'Teapot'
        })
    }
    catch(error:any) {
        res.status(400).send({
            'message' : error
        })
    }
}