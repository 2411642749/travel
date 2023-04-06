import Request from '../request'

export const getHotSuggestsApi = () => (
    Request.get({
        url: '/home/hotSuggests',
    })
)