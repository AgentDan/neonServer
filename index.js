const express = require("express")
const path = require("path");
const app = express()
const dotenv = require('dotenv').config()
const cors = require("cors")

// app.use(express.static("./client/dist"))

const PORT = process.env.PORT || 5000
app.use(cors())

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, './client/dist')));

    app.get('*', (req, res) =>
        res.sendFile(
            path.resolve(__dirname, '../', 'client', 'build', 'index.html')
        )
    );
} else {
    app.get('/', (req, res) => res.send('Please set to production'));
}

console.log(process.env.NODE_ENV)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))