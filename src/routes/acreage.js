import express from 'express'
import * as controllers from '../controllers/acreage'

const router = express.Router()

router.get('/all', controllers.getAcreagesController)

export default router