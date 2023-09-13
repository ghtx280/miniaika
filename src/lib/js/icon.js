import feather from "feather-icons"

export function icon(name, size = 30, color) {
  let icon = feather.icons[name]

  if (!icon) {
    const msg = `Icon '${name}' not found`
    console.error(msg)
    return msg
  }
  
  return icon
  .toSvg({ width: "1em", height: "1em", "stroke-width":"0.06em" })
  .replace("<svg ", `<svg style="font-size:${size}px"`)
}