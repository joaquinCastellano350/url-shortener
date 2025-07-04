import {Router} from 'express'
import { LinkController } from './link.controller.js';

export const linkRouter = Router();

const linkController = new LinkController();

linkRouter.post('/', linkController.createShortURL)
// linkRouter.get('/:shortCode',)
// linkRouter.put('/:shortCode')
// linkRouter.delete('/:shortCode')
// linkRouter.get('/:shortCode/stats')