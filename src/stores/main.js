import {defineStore} from "pinia";
import { ref } from 'vue'
const nowDate =new Date()
const newDate =new Date()
newDate.setDate(nowDate.getDate() + 1)
export const useMainStore = defineStore('main', {
    state: () => {
        return {
            nowDate,
            newDate
        }
    }
})
