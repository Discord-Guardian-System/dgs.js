import Guardian from "./index.js"
let guard = new Guardian("apiKeyGoHere")
test()
async function test(){
  console.log(await guard.getReports("UserID"))
}