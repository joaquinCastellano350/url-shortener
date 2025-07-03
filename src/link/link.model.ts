import {Schema, model, Document} from 'mongoose';

export interface ILink extends Document {
    url: string,
    shortCode: string,
    accesCount: number,
}

const linkSchema = new Schema<ILink>({
    url: {type: String, required: true},
    shortCode: {type: String, required: true, unique: true},
    accesCount: {type: Number, required: true, default: 0}
}, {timestamps: true})

export const LinkModel = model<ILink>('Link',linkSchema)