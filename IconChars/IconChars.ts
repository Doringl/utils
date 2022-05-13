const IconChars = (text: string): string => { 
    let iconChars = text.charAt(0)
    let includes:string

    if (text.includes(' ')) { 
        text = text.substring(text.indexOf(' ') + 1, text.length)
        icon += iconChars(text).toUpperCase()
    } else if (text.includes('-')) { 
        text = text.substring(text.indexOf('-') + 1, text.length)
        icon += iconChars(text).toUpperCase()
    } else if (text.includes('_')) { 
        text = text.substring(text.indexOf('_') + 1, text.length)
        icon += iconChars(text).toUpperCase()
    } else { 
        icon += text.charAt(1)
    }
    return iconChars
}

export default IconChars
