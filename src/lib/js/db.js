import { cookie } from "./cookie"
import fetch from "./fetch"
import { checkValid as check } from "./valid"


const db_url = "http://127.0.0.1:4444/api"

function fetchParams(path, method, body) {
  return [db_url + (path[0] == '/' ? path : '/' + path), { type: "json", method, body }]
}

const send = {
  data  : (value) => ({ data:  value, error: null }),
  error : (value) => ({ error: value, data:  null }),
}
 
export const db = {
  auth: {
    async signin(email, password){
      if (!email || !password) {
        return send.error("Fill the fields")
      }

      if (!check("email", email) || !check("passw", password)) {
        return send.error("Fields is not valid")
      }

      let { value, ok } = await fetch.json(
        ...fetchParams("auth/signin", "POST", { email, password })
      )

      if (!ok) {
        return send.error("Server error: " + value.message)
      }

      cookie.set("token", value.token, 30)

      return send.data(value)
    },


    async signup(login, email, password){
      let data = await makeReq("auth/signup", "post", { login, email, password })
      data = (await data.json()) || {}

      console.log(data.token);
    }
  },
}