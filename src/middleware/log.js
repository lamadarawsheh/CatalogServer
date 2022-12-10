const log  = (req, res, next)=>{
  console.log('received a request, host:' + req.hostname)
  console.log('path:'+req.path)
  console.log('method:'+req.method)
  console.log('***********************************************************')
  next()       
}
module.exports = log