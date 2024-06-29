import async from "@react-native-async-storage/async-storage";
import { StorageService } from "./storageService";

export const asyncStorage: StorageService = {
    getItem: async (key) => {
        const item = await async.getItem(key);
        if (item) {
            return JSON.parse(item);
        }
        return null;
    },
    setItem: async (key, value) => {
        await async.setItem(key, JSON.stringify(value))
    },
    removeItem: async (key) => {
        await async.removeItem(key);
    }
}
