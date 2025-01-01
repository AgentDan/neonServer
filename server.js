const express = require("express")
const app = express()
const PORT = 5000

app.use(express.static("./client/dist"))

app.listen(PORT, () => console.log("Server started on port 5000"))