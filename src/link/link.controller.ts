import {NextFunction, Request, Response} from 'express';
import { LinkService } from './link.service';
import { createLinkSchema, searchLinkSchema } from './link.validation';
const linkService = new LinkService()

export class LinkController {
    async createShortURL(req: Request, res: Response, next: NextFunction){
        try{
            const url = createLinkSchema.parse(req.body).url
            const shortened = await linkService.createShortURL(url);
            res.status(201).json({shortened});
        }catch(error){
            next(error);
        }
        
    }
}