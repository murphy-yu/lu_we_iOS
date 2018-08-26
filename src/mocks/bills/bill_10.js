import wepy from 'wepy';


let m_bill = {
  calenderArr: ['2018', '07'],   // 当前年月
  moneyStat: {
    income: '777.00',   // 收入
    pay: '77.00'       // 支出
  },
  detailList: [
    {
      info: {
        date: '2018-07-01',
        day: '星期日',
        totalIncome: 0,
        totalPay: 0
      },
      list: [
        {
          id: 1,
          image: '/images/reading.png',
          title: '还款',
          remark: '',
          mount: -12
        },
        {
          id: 2,
          image: '/images/reading.png',
          title: '收款',
          remark: '',
          mount: 20
        },
        {
          id: 1,
          image: '/images/reading.png',
          title: '还款',
          remark: '',
          mount: -12
        },
        {
          id: 2,
          image: '/images/reading.png',
          title: '收款',
          remark: '',
          mount: 20
        }
      ]
    },
    {
      info: {
        date: '2018-07-03',
        day: '星期日',
        totalIncome: 0,
        totalPay: 0
      },
      list: [
        {
          id: 1,
          image: '/images/reading.png',
          title: '还款',
          remark: '',
          mount: -12
        },
        {
          id: 2,
          image: '/images/reading.png',
          title: '收款',
          remark: '',
          mount: 20
        }
      ]
    },
    {
      info: {
        date: '2018-07-07',
        day: '星期日',
        totalIncome: 0,
        totalPay: 0
      },
      list: [
        {
          id: 1,
          image: '/images/reading.png',
          title: '还款',
          remark: '',
          mount: -12
        },
        {
          id: 2,
          image: '/images/reading.png',
          title: '收款',
          remark: '',
          mount: 20
        }
      ]
    },
    {
      info: {
        date: '2018-07-13',
        day: '星期日',
        totalIncome: 0,
        totalPay: 0
      },
      list: [
        {
          id: 1,
          image: '/images/reading.png',
          title: '还款',
          remark: '',
          mount: -12
        },
        {
          id: 2,
          image: '/images/reading.png',
          title: '收款',
          remark: '',
          mount: 20
        }
      ]
    },
    {
      info: {
        date: '2018-07-17',
        day: '星期日',
        totalIncome: 0,
        totalPay: 0
      },
      list: [
        {
          id: 1,
          image: '/images/reading.png',
          title: '还款',
          remark: '',
          mount: -12
        },
        {
          id: 2,
          image: '/images/reading.png',
          title: '收款',
          remark: '',
          mount: 20
        },
        {
          id: 1,
          image: '/images/reading.png',
          title: '还款',
          remark: '',
          mount: -12
        },
        {
          id: 2,
          image: '/images/reading.png',
          title: '收款',
          remark: '',
          mount: 20
        }
      ]
    },
    {
      info: {
        date: '2018-07-19',
        day: '星期日',
        totalIncome: 0,
        totalPay: 0
      },
      list: [
        {
          id: 1,
          image: '/images/reading.png',
          title: '还款',
          remark: '',
          mount: -12
        },
        {
          id: 2,
          image: '/images/reading.png',
          title: '收款',
          remark: '',
          mount: 20
        }
      ]
    },
    {
      info: {
        date: '2018-07-23',
        day: '星期日',
        totalIncome: 0,
        totalPay: 0
      },
      list: [
        {
          id: 1,
          image: '/images/reading.png',
          title: '还款',
          remark: '',
          mount: -12
        },
        {
          id: 2,
          image: '/images/reading.png',
          title: '收款',
          remark: '',
          mount: 20
        }
      ]
    },
    {
      info: {
        date: '2018-07-27',
        day: '星期日',
        totalIncome: 0,
        totalPay: 0
      },
      list: [
        {
          id: 1,
          image: '/images/reading.png',
          title: '还款',
          remark: '',
          mount: -12
        },
        {
          id: 2,
          image: '/images/reading.png',
          title: '收款',
          remark: '',
          mount: 20
        }
      ]
    }
  ],
  // 滚动区域信息
  scrollHeight: 0
}

export default m_bill
