const express = require('express')
const router = require('./routers/index');
const path = require('path');
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use('/css', express.static(path.join(__dirname, 'public/css')))
app.use('/img', express.static(path.join(__dirname, 'public/img')))
app.use('/js', express.static(path.join(__dirname, 'public/js')))
app.use('/', router)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})