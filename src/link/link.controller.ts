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

    async deleteLinkByShortCode(req: Request, res: Response, next: NextFunction){
        try {
            const shortCode = req.params.shortCode;
            await linkService.deleteLinkByShortCode(shortCode);
            res.status(204).send();
        }catch(error){
            next(error)
        }

    }
    async getLinkStats(req: Request, res: Response, next: NextFunction){
        try{
            const shortCode = req.params.shortCode;
            const stats = await linkService.getLinkStats(shortCode)
            res.status(201).json({stats})
        }catch(error){
            next(error)
        }
    }
}