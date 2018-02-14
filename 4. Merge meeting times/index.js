const mergeMeetings = (mtgs) => {
  let mergedMtgs = [];

  mtgs.sort((a, b) => {
    return a.startTime - b.startTime;
  });

  let activeMtg = mtgs[0];

  for (let i = 1; i < mtgs.length; i += 1) {
    if (mtgs[i].startTime > activeMtg.endTime) {
      mergedMtgs.push(activeMtg);
      
      activeMtg = mtgs[i];
    } else {
      activeMtg.endTime = Math.max(activeMtg.endTime, mtgs[i].endTime);
    }
    if (i === mtgs.length - 1) mergedMtgs.push(activeMtg);
  }

  return mergedMtgs;
}

mergeMeetings(
  [{ startTime: 1, endTime: 2 }, { startTime: 2, endTime: 3 }]
)
/*
Return an array with meeting times consolidated.
Meetings are not in order.

Strategy: Sort array by startTime
check if curr meetings start time is less than prev mtg end time
  if no add prev meeting to array;
  if yes end time = largest of two end times

*/


const input = [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 5 },
  { startTime: 4, endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9, endTime: 10 },
]

const output = [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 8 },
  { startTime: 9, endTime: 12 },
];