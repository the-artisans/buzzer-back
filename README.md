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