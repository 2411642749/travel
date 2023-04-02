import Request from '../request'

export const getCityAllApi = () => (
    Request.get({
        url: 'city/all',
    })
)