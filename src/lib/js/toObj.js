export function toObj(obj) {
  const res = {}
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      if (Array.isArray(obj[key])) {
        res[key] = obj[key].map(e => typeof e === "object" ? toObj(e) : e)
      }
      else {  res[key] = toObj(obj[key]) }
    }
    else { res[key] = obj[key] }
  }
  return res
}