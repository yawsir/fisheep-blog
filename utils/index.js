/**
 * 
 * @param {array | object} obj 以json的方式复制数组并返回 
 */
export const copy = (obj) => JSON.parse( JSON.stringify(obj) )