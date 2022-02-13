const svgIcons = import.meta.globEager('./*.svg')
const iconNames: string[] = []
Object.keys(svgIcons).forEach((item) => {
  iconNames.push(item.slice(2, -4))
})
export default iconNames
