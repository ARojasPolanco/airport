import { Router } from "express"
import {
    findAllPlanes,
    createPlane,
    findOnePlane,
    updatePlane,
    deletePlane
} from './plane.controller.js'

import { validateExistPlane } from "./plane.middleware.js"

export const router = Router()

router.route('/')
    .get(findAllPlanes)
    .post(createPlane)

router
    .use('/:id', validateExistPlane)
    .route('/:id')
    .get(findOnePlane)
    .patch(updatePlane)
    .delete(deletePlane)