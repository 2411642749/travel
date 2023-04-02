// 获取资源
export const getAssetsImg = (image) => {
    // 参数一 : 相对路径
    // 参数二 : 在哪个文件下面查找参数一的相对路劲 import.meta.url 当前的组件名称
    return new URL(`../assets/imgs/${image}`, import.meta.url).href
}