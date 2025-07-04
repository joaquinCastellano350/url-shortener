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

}