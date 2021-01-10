const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res,next) => {
    res.send(path.join(__dirname, 'public/index.html'))
})

app.listen(PORT, 
    () => console.log(`Server listening on http://localhost:${PORT}`)
)