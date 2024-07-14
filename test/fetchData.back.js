import { fetchData } from "./index"

test("fetchData ", (done) => {
  fetchData((data) => {
    expect(data).toEqual({
      success: true
    })
    done()
  })
})
