import {z} from 'zod';

export const createLinkSchema = z.object({
    url : z.string().url("Write a valid URL.")
});

export const searchLinkSchema = z.object({
    shortCode: z.string().length(6, "Send a valid short code.") 
});