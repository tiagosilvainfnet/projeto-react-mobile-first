import { get, getDatabase, ref, set, update } from "firebase/database";

const generateUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0,
            v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

const saveData = async (table, data) => {
    const db = getDatabase();
    set(ref(db, `${table}/` + generateUUID()), data);
}

const updateData = async (table, data, uid) => {
    const db = getDatabase();
    const updates = {};
    updates[`/${table}/` + uid] = data;
    update(ref(db), updates);
}

const loadData = async (table) => {
    const db = getDatabase();
    const snapshot = await get(ref(db, table));
    if (snapshot.exists()) {
        return snapshot.val();
    } else {
        return null;
    }
}

const getData = async (table, uid) => {
    const db = getDatabase();
    const snapshot = await get(ref(db, `${table}/` + uid));
    if (snapshot.exists()) {
        return snapshot.val();
    } else {
        return null;
    }
}

const deleteData = async (table, uid) => {
    const db = getDatabase();
    const updates = {};
    updates[`/${table}/` + uid] = null;
    update(ref(db), updates);
}

export { 
    saveData,
    updateData,
    loadData,
    getData,
    deleteData
}