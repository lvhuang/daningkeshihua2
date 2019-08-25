const express = require('express');
const bodyParser = require('body-parser');
const gameBindingResponse = require('./gamebinding');
const app = express();
app.use(bodyParser.json());
const port = 3000;

const responseMap = {
  '/task-report/admin/apiKanban/homeYear': {
    data: (array = [
      {
        name: 'Call车',
        allNum: 373867,
        count: [
          { name: 'RW', value: 173451, itemStyle: { color: '#339dff' } },
          { name: 'MG', value: 173451, itemStyle: { color: '#1ccccc' } }
        ],
        typeCount: [
          { name: '海外', value: 5360 },
          { name: '国内', value: 5360 },
          { name: '混合', value: 5360 }
        ]
      },
      {
        name: '零售',
        allNum: 373867,
        count: [
          { name: 'RW', value: 173451, itemStyle: { color: '#339dff' } },
          { name: 'MG', value: 173451, itemStyle: { color: '#1ccccc' } }
        ],
        typeCount: [
          { name: '海外', value: 5360 },
          { name: '国内', value: 5360 },
          { name: '混合', value: 5360 }
        ]
      },
      {
        name: '订单',
        allNum: 373867,
        count: [
          { name: 'RW', value: 173451, itemStyle: { color: '#339dff' } },
          { name: 'MG', value: 173451, itemStyle: { color: '#1ccccc' } }
        ],
        typeCount: [
          { name: '海外', value: 5360 },
          { name: '国内', value: 5360 },
          { name: '混合', value: 5360 }
        ]
      }
    ])
  },
  '/task-report/admin/apiKanban/board': {
    data: (object = {
      dealerType: [
        {
          name: '经销商Call车',
          plan: 27776,
          real: 18896,
          wholesalesCurrentCompare: 0.0033,
          wholesalesPreviousCompare: 0.0056
        },
        {
          name: '经销商零售',
          plan: 27776,
          real: 18896,
          wholesalesCurrentCompare: 0.0033,
          wholesalesPreviousCompare: 0.0056
        }
      ],
      monthlyRptList: {
        date_time: new Array(30)
          .fill(0)
          .map((_, i) => `07 / ${i > 9 ? i : `0${i}`}`),
        sales_cnt: new Array(30)
          .fill(0)
          .map(() => Math.round(Math.random() * 1000)),
        wholesales_cnt: new Array(30)
          .fill(0)
          .map(() => Math.round(Math.random() * 1000))
      }
    })
  }
};
app.get('/', (req, res) => {
  res.send('hello');
});
app.get('*', (req, res) => {
  const path = req.path;
  const data = responseMap[path];
  setTimeout(() => {
    res.json({
      errorCode: 0,
      result: data
    });
  }, 0);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
