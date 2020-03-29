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

export function throttle(func, delay) {
    let last = 0    // 上一次执行时间
    const that = this

    return function() {
        let now = new Date().getTime() // 当前时间
        if (now - last >= delay) {      // 当前时间和上次执行时间的间隔大于指定的延时
            last = now                  // 更新上次执行时间为本次执行时间
            func.call(that)             //调用方法
        }
    }
}

export function rfa(after) {
    //option说明：after [回调函数，16.7ms触发一次]
        var isScroll;// RAF 触发锁
        return function() {
            if (isScroll) return;
            isScroll = true;
            requestAnimationFrame(function() {
                after && after();
                isScroll = false;
            });
        }
    }