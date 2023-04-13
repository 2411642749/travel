import Request from '../request'

// 房屋详情列表
export const getHouseList = (houseID) => (
    Request.get({
        url: '/detail/infos',
        params : houseID
    })
)
