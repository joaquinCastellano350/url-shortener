import {Router} from 'express'

export const linkRouter = Router();

linkRouter.post('/')
linkRouter.get('/:shortCode')
linkRouter.put('/:shortCode')
linkRouter.delete('/:shortCode')
linkRouter.get('/:shortCode/stats')