import express from 'express'
import { testController } from '../controllers/test.js'
// import {  predict, predict2} from '../controllers/test2db.js'

export const router=express.Router()

router.post('/test', testController)
// router.post('/predict', predict)
// router.post('/predict2',predict2)