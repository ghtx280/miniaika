import { icon } from "./icon"

export function showPass(node) {
  setTimeout(() => {
    const rect = node.getBoundingClientRect()

    let top = rect.top
    let right = innerWidth - rect.right
    let size = node.clientHeight
    let status


    let eye = document.createElement("button")

    eye.style = `
    position: fixed;
    top:    ${top}px;
    right:  ${right}px;
    width:  ${size}px;
    height: ${size}px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    opacity: 0.7;
    `

    // eye.innerText = "🙈"
    let iconSize   = 20 
    let iconEye    = icon("eye",     iconSize)
    let iconEyeOff = icon("eye-off", iconSize)
    


    const changeStatus = () => {
      node.type     = !status ? "password" : "text"
      eye.innerHTML = status ? iconEyeOff : iconEye 
      // eye.innerText = status ? "🙈" : "🐵" 

      status = !status
    }
    changeStatus()

    eye.addEventListener("click", changeStatus)
    
    node.after(eye)
  }, 1)
}