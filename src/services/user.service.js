import { URL_SERVER } from "../server/URL_SERVER";

export const getUser = () => {
    const user = sessionStorage.getItem('user');
    return user ? JSON.parse(user) : null;
}

export const createUser = async(data) => {


    const options = {
        method:'POST',
        headers:{
            'Content-type':'application/json'
        }
    }

    try {
    
        const response = await fetch()

    } catch (error) {
        
    }

}