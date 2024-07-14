import { dateFormate } from "../index"

test("格式化时间 1720796", () => {
  expect(dateFormate(1720796)).toBe("1970-01-04 08:28:40");
})
