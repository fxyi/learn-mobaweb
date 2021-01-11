const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

require('./plugins/db')()
require('./routes/admin/rest')(app)

app.listen(3000, () => {
    console.log('listening 3000 port ...')
})