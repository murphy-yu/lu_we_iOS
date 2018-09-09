import wepy from 'wepy';


let m_bill = {
  calenderArr: ['2018', '09'],   // 当前年月
  moneyStat: {
    income: '2310.00',   // 收入
    pay: '960.00'       // 支出
  },
  detailList: [
    {
      info: {
        date: '2018-09-01',
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
        date: '2018-09-03',
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
        date: '2018-09-07',
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
        date: '2018-09-13',
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
        date: '2018-09-17',
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
        date: '2018-09-19',
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
        date: '2018-09-23',
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
        date: '2018-09-27',
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
        date: '2018-09-29',
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
