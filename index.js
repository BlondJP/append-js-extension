import fs, {readFileSync} from'fs';
import path from 'path';

const rootDir = '/Users/jp_blond/Projects/append-js-extension/dist';

function *walkSync(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    for (const file of files) {
        if (file.isDirectory()) {
            yield* walkSync(path.join(dir, file.name));
        } else {
            yield path.join(dir, file.name);
        }
    }
}

/**
 * EXTRACTING JS FILE PATHS.
 */
const REGEX_TO_MATCH_EXTENSION = /(?:\.([^.]+))?$/;
const EXTENSION_INDEX = 1
const JS_FILE_EXTENSION = 'js'
const jsFilePaths = []
for (const filePath of walkSync(rootDir)) {
    const splits = REGEX_TO_MATCH_EXTENSION.exec(filePath)
    if (Array.isArray(splits)) {
        const extension = splits[EXTENSION_INDEX]
        if (extension === JS_FILE_EXTENSION) {
            jsFilePaths.push(filePath)
        }
    }
}
console.log(jsFilePaths)

/**
 * IDENTIFYING LINES TO REPLACE.
 */
const SPLIT_FILE_IN_LINES_REGEX = /\r?\n/
const filesToChange = {}
jsFilePaths.forEach(fp => filesToChange[fp] = [])
for (const jsFilePath of jsFilePaths) {
    readFileSync(jsFilePath,
        'utf-8').split(SPLIT_FILE_IN_LINES_REGEX).forEach(function(line){
        if (line.startsWith("import ")) {
            const newLine = line.substring(0, line.length - 2) + '.js";'
            filesToChange[jsFilePath].push({oldLine: line, newLine})
        }
    })
}
// console.log(filesToChange)


/**
 * REPLACING IMPORTS WITH .js suffix
 */
for (const jsFP of jsFilePaths) {
    changeLinesInFile(jsFP, filesToChange[jsFP])
}
function changeLinesInFile(filePath, changes) {
    const data = fs.readFileSync(filePath, {encoding: 'utf8'})
    if (changes.length > 0) {
        let result = data
        // console.log({changes})
        for (const change of changes) {

            result = result.replace(new RegExp(change.oldLine,"g"), change.newLine);
            // data = result
        }
        // console.log({filePath, result})
        fs.writeFileSync(filePath, result, {encoding: 'utf8'});
    }
}

console.log(filesToChange["/Users/jp_blond/Projects/family-presents/back/dist/index.js"])


/**
 * HANDLE CASES WE IMPORT EXTERNAL MODULES
 */