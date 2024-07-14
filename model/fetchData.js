import axios from "axios"
// 异步
export const fetchData = (fn) => {
  axios.get('http://a.jspang.com/testTest.json')
    .then(response => {
      fn(response.data)
    })

}