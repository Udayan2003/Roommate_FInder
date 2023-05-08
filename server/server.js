const express = require('express')
const app = express()
const cors = require("cors")
const cookieParser = require('cookie-parser')

app.use(cookieParser('ThisisSecret'))
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use("/api/user", require("./Routers/user"))
app.use("/api/auth", require("./Routers/auth"))
app.listen(5000, () => { console.log("Server Started on port 5000")});

