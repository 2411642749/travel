import dayjs from "dayjs";

export const formatMonthDay = (data) => {
    return dayjs(data).format('MM-DD')
}