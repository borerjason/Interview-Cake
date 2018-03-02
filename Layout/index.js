// // Solves 5 of 7 tests cases

// function layout(lines) {

//   const arrLines = [];
//   lines.forEach((line) => {
//     arrLines.push(line.split(' '))
//   });

//   const solArray = [];
//   let currLine = [];

//   for (let line of arrLines) {
//     let width = line[0];
//     let x = line[1];
//     let y = line[2];
//     let wordsLen = line.len - 3;
//     let targetWordIndex = 3;
//     let widthTracker = width;
//     let newLine = true;

//     while (targetWordIndex < line.length) {
//       if (newLine) {
//         for (let i = 0; i < x; i += 1) {
//           currLine.push('');
//         }
//         newLine = false;
//       }
//       let word = line[targetWordIndex]
//       if (word.length <= widthTracker) {
//         currLine.push(word);
//         targetWordIndex += 1;
//         widthTracker -= word.length + 1;
//       } else {
//         solArray.push([currLine.join(' ')]);
//         currLine = [];
//         widthTracker = width;
//         newLine = true;
//       }
//     }
//     if (currLine.length > 0) {
//       solArray.push([currLine.join(' ')]);
//     }
//   }
//   return solArray;

// }

function layout(lines) {
  const arrLines = [];
  lines.forEach((line) => {
    arrLines.push(line.split(' '))
  });

  const solArray = [];
  let currLine = [];

  let firstLine = arrLines[0];
  let secondLine = arrLines[1];
  let firstTarget = 3;
  let secondTarget = 3;
  let target = 0;

  // while there are still words left in either array
  while (firstLine[firstTarget] || secondLine[secondTarget]) {
    let startWidth = 0;
    for (let i = 0; i < arrLines.length; i += 1) {
      let targetWordIndex = target === 0 ? firstTarget : secondTarget;
      let width = arrLines[i][0];
      let x = arrLines[i][1] - startWidth;
      let y = arrLines[i][2];
      let widthTracker = width;
      let newLine = true;

      while (targetWordIndex < arrLines[i].length) {
        if (newLine) {
          for (let i = 0; i < x; i += 1) {
            currLine.push('');
          }
          newLine = false;
        }
        let word = arrLines[i][targetWordIndex]
        if (word.length <= widthTracker) {
          currLine.push(word);
          targetWordIndex += 1;
          widthTracker -= word.length + 1;
          startWidth += word.length + 1
        } else {
          if (target > 0) {
            solArray.push([currLine.join(' ')]);
            currLine = [];
            widthTracker = width;
            newLine = true;
          }
          break;
        }
      }
      target = target === 0 ? 1 : 0;
      i === 0 ? firstTarget = targetWordIndex : secondTarget = targetWordIndex;
    }
    if (currLine.length > 0) {
      solArray.push([currLine.join(' ')]);
    }
  }
  return solArray;

}

console.log(layout(['10 0 0 I love monkeys.', '10 10 0 It was the best of times it was the worst of times.' ]))