class Storage {

    constructor(storageType = chrome.storage.sync){
        this.ChromeSyncStorage = storageType;
    }

    async getFromStore(key){
        let result = await this.ChromeSyncStorage.get([key]);
        console.log(`The value retrieved for ${key} is ${value}`);
    }

    async saveToStore(value, key){
        await this.ChromeSyncStorage.set({ key: value });
        console.log(`The new value set for ${key} is ${value}`);
    }

}