const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const usersEndpoint = require("./api/users");
const userFollowingEndpoint = require("./api/user-following");
const portfolioEndPoint = require("./api/portfolio");
const detailReportEndpoint = require("./api/detailReport");
const overallReportEndpoint = require("./api/overallReport");
const productEndpoint = require("./api/product");

app.set("port", (process.env.PORT || 5000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/users", usersEndpoint.get);
app.post("/users", usersEndpoint.post);
app.delete("/users", usersEndpoint.del);

app.get("/users/:userId/following", userFollowingEndpoint.get);
app.post("/users/:userId/follow/:targetUserId", userFollowingEndpoint.post);

// app.get("/product/")
// app.post("/investment", )
// app.post("/portfolios", portfolioEndPoint.getAll);
// app.post("/report/detail", detailReportEndPoint.post);
// app.post("/report/overall", overallReportEndpoint.post);

app.listen(app.get("port"), function () {
  console.log(`App listening on port ${app.get("port")}!`)
});