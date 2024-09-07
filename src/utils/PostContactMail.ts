const apiurl = process.env.NEXT_PUBLIC_API_URL; 
import { IFormData } from "./IFormData";

export const PostContactMail = async (formData: IFormData)=>{

    try{
        const response = await fetch(`${apiurl}/form/contact`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        
        if(!response.ok){
            throw new Error ("No se pudo enviar el mensaje")
        }

        const statusMessage = await response.json();
        return statusMessage;
    } catch(err){
        console.log("error inesperado");
    }
    
}