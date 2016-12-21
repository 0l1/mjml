const regexAttributes = new RegExp('([^\\s]*="|\')([^"|\']*)("|\')', 'g')

export default function parseAttributes (input) {
  const replaceAmp = match => `&amp;${match.length > 1 ? match.charAt(1) : ''}`
  const replaceAttrVal = match => match.replace(/&([^a]|$)/g, replaceAmp)

  return input.replace(regexAttributes, (match, beforeAttr, attrVal, afterAttr) => {
    let newAttrVal = attrVal.replace(/.*&([^a]|$).*/g, replaceAttrVal)
    newAttrVal = encodeURIComponent(attrVal)

    return `${beforeAttr}${newAttrVal}${afterAttr}`
  })
}
