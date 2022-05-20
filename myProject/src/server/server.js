import express from "express";
import ReactDOM from "react-dom/server";
import {App} from "../shared/App";
import {indexTemplate} from "./indexTemplate";
import axios from "axios";
import compression from "compression";
import helmet from "helmet";

const PORT = process.env.PORT || 3000

const app = express();
const IS_DEV = process.env.NODE_ENV === "development"
const URI = IS_DEV ? 'http://localhost:3000/auth' : 'https://skillbox-react-app1.herokuapp.com/auth'

console.log('хе')

if (!IS_DEV) {
    console.log('!!!')
    app.use(compression())
    app.use(
        helmet({
            contentSecurityPolicy: false,
            crossOriginEmbedderPolicy: false,
        })
    );
}

app.use("/static", express.static("./dist/client"));
app.get("/auth", (req, res) => {

    axios.post('https://www.reddit.com/api/v1/access_token',
        `grant_type=authorization_code&code=${req.query.code}&redirect_uri=${URI}`,
        {
            auth: {username: process.env.CLIENT_ID, password: process.env.SECRET},
            headers: {'Content-type': 'application/x-www-form-urlencoded'}
        }).then(({data}) => {
        res.send(indexTemplate(ReactDOM.renderToString(App()), data['access_token']));
    }).catch(console.log)
});

app.get("*", (req, res) => {
    res.send(indexTemplate(ReactDOM.renderToString(App())));
});


app.listen(PORT, () => {
    console.log(`server started on http://localhost:${PORT}`);
});
