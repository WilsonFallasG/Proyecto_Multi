import {app} from "./firebase";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore(app)
export default async function addData(collection , id, data) {
    let result = null;
    let error = null;

    try {
        result = await setDoc(doc(db, collection, id), data, {
            merge: true,
        });
    } catch (e) {
        error = e;
    }

    return { result, error };
}