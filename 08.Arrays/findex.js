let users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];
  
// let checkUser1 =  findUserByUserName(users, 'mlewis');
// let checkUser2 =  findUserByUserName(users, 'jlarsen');
let removeUser1 =  removeUser(users, 'mlewis');
// let removeUser2 =  removeUser(users, 'jlarsen');






function findUserByUserName(arr, user){
    return arr.find(function(checkedUser){
        return checkedUser.username === user;
    })
};


//actually removing the user from the original array - not what we want
function removeUser(arr, user){
    for (let i=0;i<arr.length;i++){
        if (arr[i].username === user){
            console.log(`lets try to return ${i}`);
            arr.splice(i,1);
        }
    }   
    return undefined;
}


function removeUsers(arr, user){
    let foundItemIdx = arr.findIndex(function(checkedUser, i, arr){
        return checkedUser.username === user;
        });
    return arr.splice(foundItemIdx,1);
}