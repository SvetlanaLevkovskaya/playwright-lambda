import { test as myTest } from "@playwright/test"

/* type sveta = {
  age: number,
  email: string
} */

const myFixtureTest = myTest.extend<{
  age: number,
  email: string
}>({
  age: 43,
  email: "lev@gmail.com"
})

export const it = myFixtureTest;