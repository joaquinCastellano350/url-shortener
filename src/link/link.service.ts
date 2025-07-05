import { AppError } from "../utils/AppError.js";
import { generateUniqueShortCode } from "../utils/generateShortCode.js";
import { LinkRepository } from "./link.repository.js";

const linkRepository = new LinkRepository();

export class LinkService {
    
    async createShortURL(url: string) {
        try {
            const shortCode = await generateUniqueShortCode();
            const shortened = await linkRepository.createLink({url: url, shortCode: shortCode});
            if  (!shortened._id){
                throw new AppError("Internal app error",500);
            }
            return shortened;
        }catch(error){
            return error
        }
    }

    async findOriginalURL(shortCode: string){
        const shortened = await linkRepository.findByShortCode(shortCode)
        if (!shortened){
            throw new AppError('URL Not found',404);
        }
        linkRepository.incrementViews(shortCode)
        return shortened
    }

    async updateOriginalURL(shortCode: string, newURL: string) {
        const newAccesCount = 0
        const shortened = await linkRepository.updateByShortCode(shortCode, {url: newURL, accesCount: newAccesCount})
        if  (!shortened){
            throw new AppError('URL Not found',404);
        }
        if (shortened && !shortened._id){
            throw  new AppError('Internal app Error',500)
        }
        return shortened
    }
}