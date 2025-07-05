import { connectDB } from "../config/mongoose.js";
import { ILink, LinkModel } from "./link.model.js";

export class LinkRepository {
    
    constructor(){
        connectDB()
    }
    async createLink(data: Partial<ILink>) {

        const link = new LinkModel(data);
        return await link.save();
    }
    async findByShortCode(shortCode: string){
        const link = await LinkModel.findOne({shortCode},{accesCount:0});
        return link;
    }
    async updateByShortCode(shortCode:string, data:Partial<ILink>){
        const link = await LinkModel.findOneAndUpdate({shortCode},data,{new:true, accesCount:0});
        return link;
    }
    async deleteByShortCode(shortCode:string){
        const result = await LinkModel.deleteOne({shortCode});
        return result;
    }
    async incrementViews(shortCode: string) {
        return LinkModel.updateOne({shortCode},{$inc : {accesCount: 1}})
    }
    async getUrlStats(shortCode: string){
        const url = await LinkModel.findOne({shortCode})
        return url;
    }
    
}