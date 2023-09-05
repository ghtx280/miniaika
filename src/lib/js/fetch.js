export default {
  json: async (url) => {
    try {
      return await (await fetch(url)).json()
    } catch (error) {
      return { err: error + "" }
    }
  },
  text: async (url) => {
    try {
      return await (await fetch(url)).text()
    } catch (error) {
      return { err: error + "" }
    }
  },

}