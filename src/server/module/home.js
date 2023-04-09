import Request from '../request'

// 热门建议
export const getHotSuggestsApi = () => (
    Request.get({
        url: '/home/hotSuggests',
    })
)

// 分类
export const gethouseTypeApi = () => (
    Request.get({
        url: '/home/categories',
    })
)

// 热门精选
export const gethotDataApi = (currentPage) => (
    Request.get({
        url: 'home/houselist',
        params : {
            page:currentPage
        }
    })
)