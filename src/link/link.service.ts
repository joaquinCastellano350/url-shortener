import { generateUniqueShortCode } from "../utils/generateShortCode";
import { LinkRepository } from "./link.repository";

const linkRepository = new LinkRepository();

export class LinkService {
    async createShortURL(url: string) {
        try {
            const shortCode = await generateUniqueShortCode();
            const shortened = await linkRepository.createLink({url: url, shortCode: shortCode});
            return shortened;
        }catch(error){
            return error
        }
    }

}