class Storage {

    constructor(storageType = chrome.storage.sync){
        this.ChromeSyncStorage = storageType;
    }

    async getFromStore(key){
        return new Promise((resolve, reject) => {
            try {
                this.ChromeSyncStorage.get(key, function (value) {
                    resolve(value[key]);
                })
            }
            catch (ex) {
                reject(ex);
            }
        });
    }

    async saveToStore(value, key){
        return new Promise((resolve, reject) => {
            try {
                this.ChromeSyncStorage.set({ [key]: value }, function () {
                    resolve();
                })
            }
            catch (ex) {
                reject(ex);
            }
        });

    }

}