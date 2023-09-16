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
        return send.error("Заповніть поля")
      }

      if (!check("email", email) || !check("passw", password)) {
        return send.error("Перевірте правильність даних")
      }

      let { value, ok } = await fetch.json(
        ...fetchParams("auth/signin", "POST", { email, password })
      )

      if (!ok) {
        return send.error("Error: " + value?.message)
      }

      cookie.set("auth-token", value.token, 30)

      return send.data(value)
    },

    async signup(login, email, password){
      if (!email || !password) {
        return send.error("Заповніть поля")
      }

      if (!check("login", login) || !check("email", email) || !check("passw", password)) {
        return send.error("Перевірте правильність даних")
      }

      let { value, ok } = await fetch.json(
        ...fetchParams("auth/signup", "POST", { login, email, password })
      )

      if (!ok) {
        return send.error("Error: " + value?.message)
      }

      cookie.set("auth-token", value.token, 30)

      return send.data(value)
    },
  },
}