import reverseWords from "."

test("Let's take LeetCode contest", () => {
  const str = "Let's take LeetCode contest"
  const reversedStr = reverseWords(str)
  expect(reversedStr).toBe("s'teL ekat edoCteeL tsetnoc")
})

test("God Ding", () => {
  const str = "God Ding"
  const reversedStr = reverseWords(str)
  expect(reversedStr).toBe("doG gniD")
})

test("message", () => {
  const str = "message"
  const reversedStr = reverseWords(str)
  expect(reversedStr).toBe("egassem")
})

test("message canh om", () => {
  const str = "message canh om"
  const reversedStr = reverseWords(str)
  expect(reversedStr).toBe("egassem hnac mo")
})

test("c a h", () => {
  const str = "c a h"
  const reversedStr = reverseWords(str)
  expect(reversedStr).toBe("c a h")
})

// test("message", () => {
//   const str = ""
//   const reversedStr = reverseWords(str)
//   expect(reversedStr).toBe("")
// })