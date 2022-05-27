import { database } from "./config"
import { ref, set } from "firebase/database";


const newProspects = async (prospectsId, data) => {
    try {
        let result = await set(ref(database, `prospects/${prospectsId}`), data)
        console.log(result);
    } catch (error) {
        return error
    }
}

export { newProspects }