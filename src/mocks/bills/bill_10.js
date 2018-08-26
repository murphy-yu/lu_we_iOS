import wepy from 'wepy';


let m_bill = {
  calenderArr: ['2018', '10'],   // 当前年月
  moneyStat: {
    income: '1000.00',   // 收入
    pay: '100.00'       // 支出
  },
  detailList: [
    {
      info: {
        date: '10月25日',
        day: '星期日',
        totalIncome: 0,
        totalPay: 0
      },
      list: [
        {
          id: 1,
          image: '/images/reading.png',
          title: '餐饮',
          remark: '',
          mount: -12
        },
        {
          id: 2,
          image: '/images/reading.png',
          title: '兼职',
          remark: '',
          mount: 20
        },
        {
          id: 1,
          image: '/images/reading.png',
          title: '餐饮',
          remark: '',
          mount: -12
        },
        {
          id: 2,
          image: '/images/reading.png',
          title: '兼职',
          remark: '',
          mount: 20
        }
      ]
    },
    {
      info: {
        date: '10月25日',
        day: '星期日',
        totalIncome: 0,
        totalPay: 0
      },
      list: [
        {
          id: 1,
          image: '/images/reading.png',
          title: '餐饮',
          remark: '',
          mount: -12
        },
        {
          id: 2,
          image: '/images/reading.png',
          title: '兼职',
          remark: '',
          mount: 20
        }
      ]
    },
    {
      info: {
        date: '10月25日',
        day: '星期日',
        totalIncome: 0,
        totalPay: 0
      },
      list: [
        {
          id: 1,
          image: '/images/reading.png',
          title: '餐饮',
          remark: '',
          mount: -12
        },
        {
          id: 2,
          image: '/images/reading.png',
          title: '兼职',
          remark: '',
          mount: 20
        }
      ]
    },
    {
      info: {
        date: '10月25日',
        day: '星期日',
        totalIncome: 0,
        totalPay: 0
      },
      list: [
        {
          id: 1,
          image: '/images/reading.png',
          title: '餐饮',
          remark: '',
          mount: -12
        },
        {
          id: 2,
          image: '/images/reading.png',
          title: '兼职',
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
