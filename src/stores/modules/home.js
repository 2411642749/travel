import {defineStore} from "pinia";
import {getHotSuggestsApi} from "../../server";

export const useHomeStore = defineStore('home', {
    state: () => {
        return {
            hotSuggests: []
        }
    },
    actions: {
        async getHotSuggests() {
            let res = await getHotSuggestsApi()
            this.hotSuggests = res.data
        }
    }
})
