import wepy from 'wepy';


let m_fortune = {
  calenderArr: ['2018', '10'],   // 当前年月
  moneyStat: {
    income: '1000.00',   // 收入
    pay: '100.00'       // 支出
  },
  detailList: [
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
          mount: -12,
          time: 1480338091371,
          type: 'cash',
        },
        {
          id: 5,
          image: '/images/reading.png',
          title: '还款',
          remark: '',
          mount: -12,
          time: 1480338091375,
          type: 'cash',
        },
        {
          id: 2,
          image: '/images/reading.png',
          title: '收款',
          remark: '',
          mount: 20,
          time: 1480338091372,
          type: 'fund',
        },
        {
          id: 6,
          image: '/images/reading.png',
          title: '收款',
          remark: '',
          mount: 20,
          time: 1480338091376,
          type: 'fund',
        },
        {
          id: 3,
          image: '/images/reading.png',
          title: '还款',
          remark: '',
          mount: -12,
          time: 1480338091373,
          type: 'stock',
        },
        {
          id: 7,
          image: '/images/reading.png',
          title: '还款',
          remark: '',
          mount: -12,
          time: 1480338091377,
          type: 'stock',
        },
        {
          id: 4,
          image: '/images/reading.png',
          title: '收款',
          remark: '',
          mount: 20,
          time: 1480338091374,
          type: 'insurance',
        },
        {
          id: 8,
          image: '/images/reading.png',
          title: '收款',
          remark: '',
          mount: 20,
          time: 148033809138,
          type: 'insurance',
        },
      ]
    }
  ],
  // 滚动区域信息
  scrollHeight: 0
}

export default m_fortune
