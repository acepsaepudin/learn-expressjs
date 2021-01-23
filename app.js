const express = require('express')
const app = express()
const port = 3333

app.get('/', (req, res) => {
  res.status(404)
  res.send({
    error: 'error again'
  })
})

// our custom JSON 404 middleware. Since it's placed last
// it will be the last middleware called, if all others
// invoke next() and do not respond.
app.use(function(req, res){
  res.status(404);
  res.send({ error: "Content not found." });
});

app.post('/', function(req, res) {
  res.send('post method!')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
