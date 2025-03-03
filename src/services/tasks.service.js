import { URL_SERVER } from "../server/URL_SERVER";

export const getTareasUser = async(user) => {
    const options = {
        method:'GET',
        headers:{
            'Content-type':'application/json'
        }
    }

    try {
        const response = await fetch(`${URL_SERVER}/tasksLists/${user.id}`, options);
        if(response.ok){
            const data = await response.json();
            data.status = response.status;
            return data.tasks;
        }else {
            throw new Error("No tiene lista");
        }
    } catch (error) {
        return error.message;
    }
}

export const updateTareas = async(tasks) => {

    const user = JSON.parse(sessionStorage.getItem('user'));
    const options = {
        method:'PATCH',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify({tasks:[...tasks]})
    }
    console.log(tasks)
    try {
        
        const response = await fetch(`${URL_SERVER}/tasksLists/${user.id}`, options)
        console.log(await response.json());
        if(!response.ok)
            throw new Error("Algo salió mal");
            
        const data = await response.json();
        data.status = response.status;
        return data;
    } catch (error) {
        return error.message
    }
} 