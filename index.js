const express = require("express");
const cors = require('cors')
const bodyParser = require("body-parser");
const app = express();

const API_PATH = "./api/";
const dashboardEndpoint = require(`${API_PATH}dashboard`);
const followingEndpoint = require(`${API_PATH}following`);
const portfolioEndPoint = require(`${API_PATH}Controller/Portfolio`);
const rankingEndpoint = require(`${API_PATH}Controller/Ranking`);

// const userFollowingEndpoint = require("./api/user-following");

// const detailReportEndpoint = require("./api/detailReport");
// const overallReportEndpoint = require("./api/overallReport");
// const productEndpoint = require("./api/product");



app.set("port", (process.env.PORT || 5000));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/users", userEndpoint.get);
// app.post("/users", userEndpoint.post);
// app.delete("/users", userEndpoint.del);

// app.post("/users/:userId/follow/:targetUserId", userFollowingEndpoint.post);
// app.post("/report/overall/add", dashboardEndpoint.addOverallReportToUser);
// app.post("/product/add", dashboardEndpoint.addProductToUser);

// Dashboard
app.post("/dashboard", dashboardEndpoint.getDashboardInfoByUser);

// Portfolio Management Page
app.post("/portfolio", portfolioEndPoint.getAllProductsByUser);
app.post("/product/sell", portfolioEndPoint.sellProducts);
// app.post("/followings", followingEndpoint.getAllFollowingUsersWithInfo);

// Report/Public Profile Page


// My Following Page
app.post("/followings", followingEndpoint.getAllFollowingUsersWithInfo);

// Ranking Page
app.get("/ranking", rankingEndpoint.getTopTenUsers);


app.listen(app.get("port"), function () {
  console.log(`App listening on port ${app.get("port")}!`)
});

