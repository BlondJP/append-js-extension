exports.isInternalImport = (str) => {
    
    let foundCotesAfterFrom = 0
    let index = str.length

    if (str.startsWith("import ")) {
        while (index > 0) {
            console.log(str[index]);
            if (str[index] === '"') {
                foundCotesAfterFrom++
                if (foundCotesAfterFrom === 2 && str[index + 1] === '.') {
                    return true
                } 
            }
            index--
        }
    }

    return false
}