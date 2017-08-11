// extract file name

// You have to extract a portion of the file name as follows:

// Asume it will start with date represented as long number
// Followed by an underscore
// Youll have then a filename with an extension
// it will always have an extra extension at the end

// The recommended way to solve it is using RegEx and specifically groups.

class FileNameExtractor {
  static extractFileName (dirtyFileName) {
    let arr = dirtyFileName.split('');
    let back;
    for (let i = 0; i < arr.length; i++) {
      if (/_/.test(arr[i])) {
        arr.splice(0, i+1);
        break;
      }
    }

    for (let j = arr.length-1; j >= 0; j--) {
      if (/[.]/.test(arr[j])) {
        arr.splice(j);
        break;
      }
    }

    return arr.join('');
  }
}

console.log(FileNameExtractor.extractFileName('1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION')); // 'FILE_NAME.EXTENSION'
console.log(FileNameExtractor.extractFileName('1_This_is_an_otherExample.mpg.OTHEREXTENSIONadasdassdassds34')); // 'This_is_an_otherExample.mpg'
console.log(FileNameExtractor.extractFileName('1231231223123131_myFile.tar.gz2')); // 'myFile.tar'
