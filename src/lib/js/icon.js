import feather from "feather-icons"

export function icon(name, size = 30, color) {
  return feather
  .toSvg(name, { width: "1em", height: "1em", "stroke-width":"0.06em" })
  .replace("<svg ", `<svg style="font-size:${size}px"`)
}