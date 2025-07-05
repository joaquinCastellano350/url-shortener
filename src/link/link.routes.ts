import {Router} from 'express'
import { LinkController } from './link.controller.js';

export const linkRouter = Router();

const linkController = new LinkController();

linkRouter.post('/', linkController.createShortURL)
linkRouter.get('/:shortCode', linkController.findOriginalURL)
linkRouter.put('/:shortCode', linkController.updateOriginalURL)
linkRouter.delete('/:shortCode', linkController.deleteLinkByShortCode)
// linkRouter.get('/:shortCode/stats')