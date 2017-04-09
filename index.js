const express = require("express");
const cors = require('cors')
const bodyParser = require("body-parser");
const app = express();

const ENDPOINT_PATH = "./api/Controller/";
const dashboardEndpoint = require(`${ENDPOINT_PATH}Dashboard`);
const followingEndpoint = require(`${ENDPOINT_PATH}Following`);
const portfolioEndpoint = require(`${ENDPOINT_PATH}Portfolio`);
const rankingEndpoint = require(`${ENDPOINT_PATH}Ranking`);
const profileEndpoint = require(`${ENDPOINT_PATH}Profile`);


app.set("port", (process.env.PORT || 5000));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Dashboard
app.post("/dashboard", dashboardEndpoint.getDashboardInfoByUser);

// Portfolio Management Page
app.post("/portfolio", portfolioEndpoint.getAllProductsByUser);
app.post("/product/sell", portfolioEndpoint.sellProducts);

// Report/Public Profile Page
app.post("/profile", profileEndpoint.getProfileInfoByUser);

// My Following Page
app.post("/followings", followingEndpoint.getAllFollowingUsersWithInfo);

// Ranking Page
app.get("/ranking", rankingEndpoint.getTopTenUsers);


app.listen(app.get("port"), function () {
  console.log(`App listening on port ${app.get("port")}!`)
});

