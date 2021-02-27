






// const ul = document.querySelector('#launches');
// const launchesBtn = document.querySelector('#getLaunches');

// async function getSpaceData(){
//     const response = await axios.get('https://api.spacexdata.com/v3/capsules');
//     console.log(response);
//     renderLaunches(response.data);

// }

// function renderLaunches(launches){
//     for(let launch of launches){
//         console.log(launch.capsule_id, launch.status);
//         const newLi = document.createElement('li');
//         const status = document.createElement('b');
//         status.innerText = launch.status;
//         newLi.innerText = `${launch.capsule_id} - `;
//         newLi.append(status);
//         ul.append(newLi);

//     }
// }

// launchesBtn.addEventListener('click', function(e){
//     getSpaceData();
// });




// async function getData(){
//     const response = await axios.get('https://swapi.dev/api/planets');
//     const {next, results} = response.data;
    
//     console.log(next)
//     console.log(response);
//     console.log("This line is after axios");

//     for(let planet of results){
//         console.log(planet.name);
//     }

//     const response2 = await axios.get(next);
//     console.log(response2);
//     results2 = response2.data.results;
//     console.log(results2);
//     for(let planet of results2){
//         console.log(planet.name);
//     }
// }


