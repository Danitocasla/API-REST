module.exports = httpError = ( textError, err, req, res)=> {
  console.log(err)
  res.status(500).send(textError)
}