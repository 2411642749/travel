import {defineStore} from "pinia";
import {getCityAllApi} from '../../server'

export const useCityStore = defineStore('city', {
    state: () => {
        return {
            cityData: {}
        }
    },
    actions: {
        async fetchCityData() {
            let res = await getCityAllApi()
            this.cityData = res.data
        }
    }
})