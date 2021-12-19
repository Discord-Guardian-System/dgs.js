import Guardian from "./index.js"
let guard = new Guardian("apiKeyGoHere")
test()
async function test(){
  console.log(await guard.getReports("reportID"))
  console.log(await guard.getOffenses("userID"))
  console.log(await guard.getLink("link"))
  console.log(await guard.getServer("server"))
}