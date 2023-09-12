export function checkValid(type, value) {
  const regex = {
    login: /^[a-z0-9_]{3,}$/,
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    passw: /^[\w!@#$%^&*]{6,}$/,
  }

  return (typeof type == "string" ? regex[type] : type).test(value)
}

export function inputValid(node, type) {
  node.addEventListener("input", () => {
    if (!checkValid(type, node.value)) {
      node.style.outline = "1px solid red"
    }
    else {
      node.style.outline = ""
    }
  })
}