/**
 * 
 * @param {array | object} obj 以json的方式复制数组并返回 
 */
export const copy = (obj) => JSON.parse( JSON.stringify(obj) )
export const formatDate = (originDate) => {
    let timeStamp = new Date(Date.parse(originDate))
    let y = timeStamp.getFullYear()
    let m = addZero(timeStamp.getMonth() +1 )
    let d = addZero(timeStamp.getDate())
    return `${y}-${m}-${d}`
}
function addZero(num) {
    return num < 10 ? '0'+num : num
}