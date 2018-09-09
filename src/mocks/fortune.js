import wepy from 'wepy';


let m_fortune = {
  calenderArr: ['2018', '10'],   // 当前年月
  moneyStat: {
    income: 0,   // 收入
    pay: 0,       // 支出
    fund: 0,
    stock: 0,
    insurance: 0,
    cash: 0,
  },
  detailList: [
    {
      info: {
        date: '我的财富',
        day: '明细列表',
        totalIncome: 0,
        totalPay: 0
      },
      list: [
      ]
    }
  ],
  // 滚动区域信息
  scrollHeight: 0
}

export default m_fortune
