/**
 * key 镜像
 *
 * @export
 * @param {object} originObj
 */
function keyMirror(originObj: object | string[]) {

  if (typeof originObj !== 'object')
    throw new Error('keMirror(...): Argument must be an object or a string[]');

  if (originObj instanceof Array) return mirrorByArray(originObj);
  else return mirrorByObject(originObj);
}


/**
 * 镜像处理对象
 *
 * @export
 * @param {object} originObj
 * @returns
 */
export function mirrorByObject(originObj: object) {
  const obj: any = {};
  for (const key in originObj) {
    if (originObj.hasOwnProperty(key)) obj[key] = key;
  }
  return obj
}


/**
 * 镜像处理数组
 *
 * @export
 * @param {string[]} originArr
 * @returns
 */
export function mirrorByArray(originArr: string[]) {
  const obj: any = {};
  const length = originArr.length
  for (let i = 0; i < length; i++) {
    const key = originArr[i]
    obj[key] = key
  }
  return obj
}

export default keyMirror;
