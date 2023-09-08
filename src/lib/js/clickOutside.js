export function clickOutside(node, func) {
  node.addEventListener("click", e => {
    if (e.target === node) func()
  })
}