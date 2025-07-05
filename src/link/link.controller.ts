import {NextFunction, Request, Response} from 'express';
import { LinkService } from './link.service.js';
import { createLinkSchema, searchLinkSchema } from './link.validation.js';
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

    async findOriginalURL(req: Request, res: Response, next: NextFunction){
        try{
            const shortCode = req.params.shortCode
            const shortened = await linkService.findOriginalURL(shortCode);
            res.status(201).json({shortened});
        }catch(error){
            next(error);
        }
    }

    async updateOriginalURL(req: Request, res: Response, next: NextFunction){
        try {
            const shortCode = req.params.shortCode
            const newURL = createLinkSchema.parse(req.body).url
            const shortened = await linkService.updateOriginalURL(shortCode, newURL)
            res.status(201).json({shortened})
        }catch(error){
            next(error);
        }
    }
}