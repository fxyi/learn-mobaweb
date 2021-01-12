const express = require('express')
const cors = require('cors')

const app = express()

app.set('secret', 'dnskadnke1e12dsn9csnjn')

app.use(cors())
app.use(express.json())

require('./plugins/db')()
require('./routes/admin/rest')(app)
require('./routes/admin/login')(app)

app.listen(3000, () => {
    console.log('listening 3000 port ...')
})