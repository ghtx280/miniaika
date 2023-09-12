import { goto } from "$app/navigation";


export function href(node, param) {
  node.addEventListener("click", (e) => {
    e.preventDefault();
    if (typeof param == "number") return history.go(param)
     
    goto(param)
  })
}