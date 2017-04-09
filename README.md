# buzzer-back
> Investments simplified

## SYMBOLS
- https://docs.quandl.com/docs/in-depth-usage#section-get-time-series-data - https://www.quandl.com/api/v3/datasets/WIKI/SANM.json?start_date=2017-01-01&end_date=2017-01-03&order=asc&column_index=4&transformation=rdiff

## BITCOIN
- http://www.coindesk.com/api/ - http://api.coindesk.com/v1/bpi/historical/close.json

```js
fetch('http://api.coindesk.com/v1/bpi/historical/close.json')
  .then(r => r.json())
  .then(x => console.log(x))
```

## Install
[Download mongodb](https://www.mongodb.com/download-center#community)

### Mongo Atlas
artisans
GuRzZox9VN2oqzjX

## APIs
##### Dashboard Page
```
POST /dashboard
body: {"userId": "58e8d7e6a4f8e33ec891e709"}

{
  result: {
    _id: 58e8d7e6a4f8e33ec891e709,
    overallReport: {
      _id: 58e9ff48666952f0d4399f46,
      standardDeviation: 0.1,
      averageRateOfRoi: 0.994,
      __v: 0
    },
    products: [ {
      _id: 58e9f8fb3ffeffe83de2c3cb,
      name: 'AAPL',
      startTime: '1491494400000',
      startPrice: 144,
      unitNumber: 1,
      rateOfRoi: -0.005,
      __v: 0,
      sold: false
    }, {
      _id: 58e9fad0820d04e951577c10,
      name: 'AAON',
      startTime: '1491494400000',
      startPrice: 34.5,
      endPrice: 34.3,
      unitNumber: 34.3,
      rateOfRoi: -0.006,
      __v: 0,
      sold: true
    }]
  }
}
```

##### Portfolio Management Page
```
POST /portfolio
body: {"userId": "58e8d7e6a4f8e33ec891e709"}

{
  result: [{
    "_id": "58e9f8fb3ffeffe83de2c3cb",
    "name": "AAPL",
    "startTime": "1491494400000",
    "startPrice": 144,
    "unitNumber": 1,
    "rateOfRoi": 0.995,
    "__v": 0,
    "sold": false
  }, {
    "_id": "58e9fad0820d04e951577c10",
    "name": "AAON",
    "startTime": "1491494400000",
    "startPrice": 34.5,
    "endPrice": 34.3,
    "unitNumber": 34.3,
    "rateOfRoi": 0.994,
    "__v": 0,
    "sold": true
  }]
}
```
```
POST /product/sell
body: {"userId": "58e8d7e6a4f8e33ec891e709", "productIds": ["blabla", "asfdg"]}

status: 200 or 500
```

```
POST /followings
body: {"userId": "58e8d7e6a4f8e33ec891e709"}

{
  "result": [{
    // user model info   
  }]
}
```

##### Profile Page
```
POST /profile
body: {"userId": "58e8d7e6a4f8e33ec891e709"}

{
  result: {
    user: {
      _id: 58e8d7e6a4f8e33ec891e709,
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      occupation: 'Software Developer @ Cisco',
      __v: 6,
      overallReport: [Object],
      deleted: false,
      portfolios: [],
      products: [Object],
      availableAmount: 0,
      mimicking: [],
      mimickedCount: 0,
      following: [],
      followerCount: 0,
      emailHash: 'e13743a7f1db7f4246badd6fd6ff54ff',
      id: '58e8d7e6a4f8e33ec891e709',
      followingCount: 0,
      mimickingCount: 0,
      investmentAmount: 1327.35
    },
    benchmark: 0.001995216041993
  }
}
```

##### My Following Page
```
POST /followings
body: {"userId": "58e8d7e6a4f8e33ec891e709"}

{
  "result": [{
        // user model info   
    }]
}
```

##### Ranking Page
```
GET /ranking

{
  "result": {
    "followerCount": [{
      "_id": "58e8d199315e5d2e58b0823d",
      "name": "Guilherme Ventura",
      "email": "guilhermeventura2@gmail.com",
      "occupation": "2 lugares",
      "__v": 0,
      "deleted": false,
      "portfolios": [],
      "products": [],
      "availableAmount": 0,
      "mimicking": [],
      "mimickedCount": 0,
      "following": [],
      "followerCount": 0
    }, {
      "_id": "58e8d7e6a4f8e33ec891e709",
      "name": "John Doe",
      "email": "john.doe@gmail.com",
      "occupation": "Software Developer @ Cisco",
      "__v": 6,
      "overallReport": "58e9ff48666952f0d4399f46",
      "deleted": false,
      "portfolios": [],
      "products": [
        "58e9f77a80922ee7244af4ee",
        "58e9f8fb3ffeffe83de2c3cb",
        "58e9f9dded1f9ee8ac83482f",
        "58e9fad0820d04e951577c10"
      ],
      "availableAmount": 0,
      "mimicking": [],
      "mimickedCount": 0,
      "following": [],
      "followerCount": 0
    }],
    "mimickedCount": [{
      "_id": "58e8d199315e5d2e58b0823d",
      "name": "Guilherme Ventura",
      "email": "guilhermeventura2@gmail.com",
      "occupation": "2 lugares",
      "__v": 0,
      "deleted": false,
      "portfolios": [],
      "products": [],
      "availableAmount": 0,
      "mimicking": [],
      "mimickedCount": 0,
      "following": [],
      "followerCount": 0
    }, {
      "_id": "58e8d7e6a4f8e33ec891e709",
      "name": "John Doe",
      "email": "john.doe@gmail.com",
      "occupation": "Software Developer @ Cisco",
      "__v": 6,
      "overallReport": "58e9ff48666952f0d4399f46",
      "deleted": false,
      "portfolios": [],
      "products": [
        "58e9f77a80922ee7244af4ee",
        "58e9f8fb3ffeffe83de2c3cb",
        "58e9f9dded1f9ee8ac83482f",
        "58e9fad0820d04e951577c10"
      ],
      "availableAmount": 0,
      "mimicking": [],
      "mimickedCount": 0,
      "following": [],
      "followerCount": 0
    }],
    "averageRoi": []
  }
}
```
