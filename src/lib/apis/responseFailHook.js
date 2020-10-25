import responseErrorType from './responseErrorType'
export default response => {
  console.log(response);
  let code=String(response.data.errno)
  let errmsg=String(response.data.errmsg)
  for(let errCodeKey in responseErrorType) {
    if(code===errCodeKey) {
      return new responseErrorType[errCodeKey](errmsg)
    }
  }
  if(code!='200') {
    return new responseErrorType['!200'](errmsg)
  }
  return response
}