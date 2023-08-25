const express = require('express');
const app = express();
const errorMiddleware = require("./middleware/error");

var cors = require('cors');

// const corsOptions = {
//     origin: true,
//     // methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     // credentials: true,
// };

app.use(
    cors({
        origin: true,
    })
);

//app.use(cors(corsOptions));
app.use(express.json());

// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
// });

const product = require("./routes/productRoute");

app.use("/products", product);

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/users', (req, res) => {
    res.status(200).json({
        success: true,
        product: { data: 'testing' }
    })
})

app.use(errorMiddleware);

module.exports = app;