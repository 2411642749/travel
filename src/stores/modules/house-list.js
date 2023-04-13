import {defineStore} from "pinia";
import {getHouseList} from '../../server'

export const useHouseListStore = defineStore('houseList', {
    state: () => {
        return {
            houseList : []
        }
    },
    actions: {
        async getHouseListApi(houseID) {
            console.log(houseID)
            let res = await getHouseList(houseID)
            this.houseList = res.data
            console.log(res.data);
        }
    }
})