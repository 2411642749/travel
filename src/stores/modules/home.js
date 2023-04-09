import {defineStore} from "pinia";
import {getHotSuggestsApi,gethouseTypeApi,gethotDataApi} from "../../server";

export const useHomeStore = defineStore('home', {
    state: () => {
        return {
            hotSuggests: [],
            houseType : [],
            hotData : [],
            currentPage : 1
        }
    },
    actions: {
        async getHotSuggests() {
            let res = await getHotSuggestsApi()
            this.hotSuggests = res.data
        },
        async gethouseType() {
            let res = await gethouseTypeApi()
            this.houseType = res.data
        },
        async gethotData() {
            let res = await gethotDataApi(this.currentPage)
            this.hotData.push(...res.data)
            this.currentPage++
        },
    }
})
