import { baseUrl } from '../../../src/scripts/variables.js'

async function getEvent(userName){
    const response = await fetch(`${baseUrl}/${userName}/events`)
    const data = await response.json();
    const responseFilter = [];
    
    for (const event of data) {
        if (event.type === "CreateEvent" || event.type === "PushEvent") {
          responseFilter.push(event);
        }
    }

    const responseSlice =  responseFilter.slice(0, 10);
    return await responseSlice
}

export { getEvent }