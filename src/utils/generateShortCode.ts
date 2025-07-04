import { LinkModel } from "../link/link.model.js";

function generateShortCode() {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';

    let shortCode = ''
    
    const randomLetters = Array.from({length:3}, () => 
        letters.charAt(Math.floor(Math.random()*letters.length))
    ).join('')

    const randomNumbers = Array.from({length:3}, () => 
        numbers.charAt(Math.floor(Math.random()*numbers.length))
    ).join('')

    shortCode = `${randomLetters}${randomNumbers}`

    return shortCode
}

export async function generateUniqueShortCode(): Promise<string> {
    let code: string;
    let exists: any;

    do {
        code = await generateShortCode();
        exists = await LinkModel.exists({shortCode:code})
        
    }while(exists)

    return code
}