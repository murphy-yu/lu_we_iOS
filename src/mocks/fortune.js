import wepy from 'wepy';


let m_fortune = {
  [
    {
      id: 1,
      image: '/images/reading.png',
      title: '还款',
      remark: '',
      mount: -12,
      'time': 1480338091371
    },
    {
      id: 2,
      image: '/images/reading.png',
      title: '收款',
      remark: '',
      mount: 20,
      'time': 1480338091372
    },
    {
      id: 3,
      image: '/images/reading.png',
      title: '还款',
      remark: '',
      mount: -12,
      'time': 1480338091373
    },
    {
      id: 4,
      image: '/images/reading.png',
      title: '收款',
      remark: '',
      mount: 20,
      'time': 1480338091374
    },
  ]



  // calenderArr: ['2018', '10'],   // 当前年月
  // moneyStat: {
  //   income: '1000.00',   // 收入
  //   pay: '100.00'       // 支出
  // },
  // detailList: [
  //   {
  //     info: {
  //       date: '2018-10-01',
  //       day: '星期日',
  //       totalIncome: 0,
  //       totalPay: 0
  //     },
  //     list: [
  //       {
  //         id: 1,
  //         image: '/images/reading.png',
  //         title: '还款',
  //         remark: '',
  //         mount: -12
  //       },
  //       {
  //         id: 2,
  //         image: '/images/reading.png',
  //         title: '收款',
  //         remark: '',
  //         mount: 20
  //       },
  //       {
  //         id: 1,
  //         image: '/images/reading.png',
  //         title: '还款',
  //         remark: '',
  //         mount: -12
  //       },
  //       {
  //         id: 2,
  //         image: '/images/reading.png',
  //         title: '收款',
  //         remark: '',
  //         mount: 20
  //       }
  //     ]
  //   },
  //   {
  //     info: {
  //       date: '2018-10-03',
  //       day: '星期日',
  //       totalIncome: 0,
  //       totalPay: 0
  //     },
  //     list: [
  //       {
  //         id: 1,
  //         image: '/images/reading.png',
  //         title: '还款',
  //         remark: '',
  //         mount: -12
  //       },
  //       {
  //         id: 2,
  //         image: '/images/reading.png',
  //         title: '收款',
  //         remark: '',
  //         mount: 20
  //       }
  //     ]
  //   },
  //   {
  //     info: {
  //       date: '2018-10-07',
  //       day: '星期日',
  //       totalIncome: 0,
  //       totalPay: 0
  //     },
  //     list: [
  //       {
  //         id: 1,
  //         image: '/images/reading.png',
  //         title: '还款',
  //         remark: '',
  //         mount: -12
  //       },
  //       {
  //         id: 2,
  //         image: '/images/reading.png',
  //         title: '收款',
  //         remark: '',
  //         mount: 20
  //       }
  //     ]
  //   },
  //   {
  //     info: {
  //       date: '2018-10-13',
  //       day: '星期日',
  //       totalIncome: 0,
  //       totalPay: 0
  //     },
  //     list: [
  //       {
  //         id: 1,
  //         image: '/images/reading.png',
  //         title: '还款',
  //         remark: '',
  //         mount: -12
  //       },
  //       {
  //         id: 2,
  //         image: '/images/reading.png',
  //         title: '收款',
  //         remark: '',
  //         mount: 20
  //       }
  //     ]
  //   },
  //   {
  //     info: {
  //       date: '2018-10-17',
  //       day: '星期日',
  //       totalIncome: 0,
  //       totalPay: 0
  //     },
  //     list: [
  //       {
  //         id: 1,
  //         image: '/images/reading.png',
  //         title: '还款',
  //         remark: '',
  //         mount: -12
  //       },
  //       {
  //         id: 2,
  //         image: '/images/reading.png',
  //         title: '收款',
  //         remark: '',
  //         mount: 20
  //       },
  //       {
  //         id: 1,
  //         image: '/images/reading.png',
  //         title: '还款',
  //         remark: '',
  //         mount: -12
  //       },
  //       {
  //         id: 2,
  //         image: '/images/reading.png',
  //         title: '收款',
  //         remark: '',
  //         mount: 20
  //       }
  //     ]
  //   },
  //   {
  //     info: {
  //       date: '2018-10-19',
  //       day: '星期日',
  //       totalIncome: 0,
  //       totalPay: 0
  //     },
  //     list: [
  //       {
  //         id: 1,
  //         image: '/images/reading.png',
  //         title: '还款',
  //         remark: '',
  //         mount: -12
  //       },
  //       {
  //         id: 2,
  //         image: '/images/reading.png',
  //         title: '收款',
  //         remark: '',
  //         mount: 20
  //       }
  //     ]
  //   },
  //   {
  //     info: {
  //       date: '2018-10-23',
  //       day: '星期日',
  //       totalIncome: 0,
  //       totalPay: 0
  //     },
  //     list: [
  //       {
  //         id: 1,
  //         image: '/images/reading.png',
  //         title: '还款',
  //         remark: '',
  //         mount: -12
  //       },
  //       {
  //         id: 2,
  //         image: '/images/reading.png',
  //         title: '收款',
  //         remark: '',
  //         mount: 20
  //       }
  //     ]
  //   },
  //   {
  //     info: {
  //       date: '2018-10-27',
  //       day: '星期日',
  //       totalIncome: 0,
  //       totalPay: 0
  //     },
  //     list: [
  //       {
  //         id: 1,
  //         image: '/images/reading.png',
  //         title: '还款',
  //         remark: '',
  //         mount: -12
  //       },
  //       {
  //         id: 2,
  //         image: '/images/reading.png',
  //         title: '收款',
  //         remark: '',
  //         mount: 20
  //       }
  //     ]
  //   },
  //   {
  //     info: {
  //       date: '2018-10-29',
  //       day: '星期日',
  //       totalIncome: 0,
  //       totalPay: 0
  //     },
  //     list: [
  //       {
  //         id: 1,
  //         image: '/images/reading.png',
  //         title: '还款',
  //         remark: '',
  //         mount: -12
  //       },
  //       {
  //         id: 2,
  //         image: '/images/reading.png',
  //         title: '收款',
  //         remark: '',
  //         mount: 20
  //       }
  //     ]
  //   }
  // ],
  // // 滚动区域信息
  // scrollHeight: 0
}

export default m_fortune
