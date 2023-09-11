export function dropMenu(node, fields) {
  
  if (typeof fields !== "object") throw Error("Fields must be an object")

  node.addEventListener("click", () => {
    let bg = document.createElement('div');
    let content = document.createElement('div');

    bg.style = 
    `position: absolute;
    top: 0; right: 0;
    width: 100%; height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 99999999;
    `

    const rect = node.getBoundingClientRect()

    content.style = 
    `position: fixed;
    top: ${rect.top + node.clientHeight}px;
    right: ${innerWidth - rect.right}px;
    display: flex;
    flex-direction: column;
    gap: 20px;  
    padding:20px;
    border-radius:10px;
    background-color: var(--dark);`

    for (const item in fields) {
      const field = document.createElement("button")
      field.style = "text-align: left; font-size: 14px"
      field.innerText = item
      const param = fields[item]
      
      if (!(["object", "function"].includes(typeof param))) {
        throw Error("Params must be provided, 'object' or 'function'")
      }
      
      
      if (typeof param === "object") {
        field.addEventListener("click", param.handler)
        
        field.style.fontWeight = param.weight || ""
        field.style.color      = param.color || ""
        field.classList        = param.class || ""
      }
      else {
        field.addEventListener("click", param)
      }
      
      content.append(field)
    }


    bg.addEventListener("click", e => {
      // if (e.target === bg)
        bg.remove()
    })


    bg.append(content)
    node.after(bg)
    // document.querySelector("main").append(bg)
  })


}