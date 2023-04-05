import {defineStore} from "pinia";
import {getCityAllApi} from '../../server'

export const useCityStore = defineStore('city', {
    state: () => {
        return {
            cityData: {},
            currentData: {cityName: '山西'}  //我的位置暂不能用 先写死
        }
    },
    actions: {
        async fetchCityData() {
            let res = await getCityAllApi()
            this.cityData = res.data
        }
    }
})