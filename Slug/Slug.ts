const Slug = (text: string): string => {
  const trMap = {
    çÇ: "c",
    ğĞ: "g",
    şŞ: "s",
    üÜ: "u",
    ıİ: "i",
    öÖ: "o",
  }

  for (let key in trMap) {
    text = text.replace(
      new RegExp("[" + key + "]", "g"),
      trMap[key as keyof typeof trMap]
    )
  }

  return text
    .replace(/[^-a-zA-Z0-9\s]+/gi, "") // remove non-alphanumeric chars
    .replace(/\s/gi, "-") // convert spaces to dashes
    .replace(/[-]+/gi, "-") // trim repeated dashes
    .toLowerCase()
}

export default Slug
