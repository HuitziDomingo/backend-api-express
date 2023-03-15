import { Router } from "express"
import { Users } from '../controllers/users.controller'

const router = Router()

router.post('/users', Users.createUser)
router.get('/users', Users.showUser)

export default router