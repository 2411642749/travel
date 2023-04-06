import dayjs from "dayjs";

// 日期格式化
export const formatMonthDay = (data) => {
    return dayjs(data).format('MM-DD')
}

// 两个日期之间的天数的差值
export const diffDate = (nowDate, nextDate) => {
    return dayjs(nextDate).diff(nowDate, 'day')
}