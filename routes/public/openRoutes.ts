import {Express, Request, Response} from 'express';
import { userCreate, getUser } from '../../controllers/users'

function openRoutes(app:Express) {
    app.get('/', (req: Request, res: Response) => {
        res.status(200).send({
            'message':'Server is running successfully 🛣️'})
    })

    app.post('/user/create', (req: Request, res: Response) => {
        userCreate(req, res);
    })

    app.get('/user', (req: Request, res: Response) => {
        getUser(req, res);
    })
}

export default openRoutes;