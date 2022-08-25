import { it } from "./myFixture"

it("fixture",async ({ age, email }) => {
  console.log(age+1, email.toUpperCase());
  
})