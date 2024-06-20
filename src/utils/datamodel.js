import db from "../data/db";

const updateDataOffline = async(modelName, data) => {
    return db.table(modelName).put(data);
}

const getDataOffline = async(modelName, id) => {
    return db.table(modelName).get(id);
}

const deleteDataOffline = async(modelName, id) => {
    return db.table(modelName).delete(id);
}

const listDataOffline = async(modelName) => {
    return db.table(modelName).toArray();
}

const addDataOffline = async(modelName, data) => {
    return db.table(modelName).add(data);
}

export {
    updateDataOffline,
    getDataOffline,
    deleteDataOffline,
    listDataOffline,
    addDataOffline
}