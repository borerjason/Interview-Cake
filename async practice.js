var siteData = {
  users: [
    {
      id: 68237946,
      birthMonth: 5,
      vip: "true"
    },
    {
      id: 23949894,
      birthMonth: 2,
      vip: "false"
    },
    {
      id: 65524624,
      birthMonth: 11,
      vip: "false"
    },
    {
      id: 16728547,
      birthMonth: 9,
      vip: "true"
    },
    {
      id: 65524624,
      birthMonth: 11,
      vip: "true"
    }
  ]
}

function sortById(users) {
  return users.sort((a, b) => {
    a.id - b.id;
  })
}

//Returns an array of all eligible user ids
//Eligibility rules:
// 1) User was born in the current month
// 2) User has vip account status
function findEligibleUsers(data, currentMonth) {
  const filteredUsers =  data.users.filter(user => {
    return user.birthMonth === currentMonth && user.vip === "true"
  });
  const ids = [];

  for (let user of filteredUsers) {
    ids.push(user.id);
  }
  return ids;
}

console.log(findEligibleUsers(siteData, 11));

for (var i = 0; i <= 4; i++) {
  setTimeout(function (val) { 
    return function (){
      console.log(val)}}(i), 100);
}

for (let i = 0; i <= 4; i++) {
  setTimeout(function () { 
      console.log(i)}, 100);
}