import wepy from 'wepy';


let m_bill = {
  calenderArr: ['2018', '10'],   // 当前年月
  moneyStat: {
    income: '2730.00',   // 收入
    pay: '1200.00'       // 支出
  },
  detailList: [
    {
      info: {
        date: '2018-10-01',
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
          mount: -120
        },
        {
          id: 2,
          image: '/images/reading.png',
          title: '收款',
          remark: '',
          mount: 210
        },
        {
          id: 1,
          image: '/images/reading.png',
          title: '还款',
          remark: '',
          mount: -120
        },
        {
          id: 2,
          image: '/images/reading.png',
          title: '收款',
          remark: '',
          mount: 210
        }
      ]
    },
    {
      info: {
        date: '2018-10-03',
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
          mount: -120
        },
        {
          id: 2,
          image: '/images/reading.png',
          title: '收款',
          remark: '',
          mount: 210
        }
      ]
    },
    {
      info: {
        date: '2018-10-07',
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
          mount: -120
        },
        {
          id: 2,
          image: '/images/reading.png',
          title: '收款',
          remark: '',
          mount: 210
        }
      ]
    },
    {
      info: {
        date: '2018-10-13',
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
          mount: -120
        },
        {
          id: 2,
          image: '/images/reading.png',
          title: '收款',
          remark: '',
          mount: 210
        }
      ]
    },
    {
      info: {
        date: '2018-10-17',
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
          mount: -120
        },
        {
          id: 2,
          image: '/images/reading.png',
          title: '收款',
          remark: '',
          mount: 210
        },
        {
          id: 1,
          image: '/images/reading.png',
          title: '还款',
          remark: '',
          mount: -120
        },
        {
          id: 2,
          image: '/images/reading.png',
          title: '收款',
          remark: '',
          mount: 210
        }
      ]
    },
    {
      info: {
        date: '2018-10-19',
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
          mount: -120
        },
        {
          id: 2,
          image: '/images/reading.png',
          title: '收款',
          remark: '',
          mount: 210
        }
      ]
    },
    {
      info: {
        date: '2018-10-23',
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
          mount: -120
        },
        {
          id: 2,
          image: '/images/reading.png',
          title: '收款',
          remark: '',
          mount: 210
        }
      ]
    },
    {
      info: {
        date: '2018-10-27',
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
          mount: -120
        },
        {
          id: 2,
          image: '/images/reading.png',
          title: '收款',
          remark: '',
          mount: 210
        }
      ]
    },
    {
      info: {
        date: '2018-10-29',
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
          mount: -120
        },
        {
          id: 2,
          image: '/images/reading.png',
          title: '收款',
          remark: '',
          mount: 210
        }
      ]
    }
  ],
  // 滚动区域信息
  scrollHeight: 0
}

export default m_bill
