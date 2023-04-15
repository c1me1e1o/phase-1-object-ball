function gameObject(){
    return{
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['black', 'white'],
            players: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                'Brook Lopez': {
                    number: 11, 
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 11,
                    slamDunks: 1
                },
                'Jason Terry': {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }    
            
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['turquoise', 'purple'],
            players: {
                'Jeff Adrien': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                'Bismak Biyombo': {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                'DeSagna Diop': {
                    number: 4,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                'Ben Gordon': {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                'Brendan Haywood': {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }

        }
    }
    return gameData
}


// src/02-advanced-debug.js
function goodPractices() {
  let game = gameObject();
  for (let gameKey in game) {
    // are you ABSOLUTELY SURE what 'gameKey' is?
    // use the debugger to find out!
    debugger;
    let teamObj = game[gameKey];
    for (let teamKey in teamObj) {
      // are you ABSOLUTELY SURE what 'teamKey' is?
      // use debugger to find out!
      debugger;

      // what is 'data' at each loop through out this block?
      // when will the following line of code work and when will it break?
      let data = teamObj.player;
      for (let key in data) {
      debugger;
      }
    }
  }
}


// 1. Build a function, numPointsScored
// 2. that takes in an argument of a player's name
// 3. and returns the number of points scored for that player

function numPointsScored(playerName){
    return allPlayers()[playerName].points
    
    //for(let player in homePlayers){
        // if the player string is the same as playerName
      //  if (player === playerName){
        //    return allPlayers[playerName].points
        //}
        
}
    

// HELPER FUNCTIONS

function allPlayers(){
    // Returns an object that returns all players for both teams
    const homePlayers = gameObject().home.players
    const awayPlayers = gameObject().away.players
    const allPlayers = {...homePlayers, ...awayPlayers}
    return allPlayers
}

    // 1. Build a function, shoeSize 
    // 2. that takes in an argument of a player's name 
    // 3. and returns the shoe size for that player.

function shoeSize(playerName){
    return allPlayers()[playerName].shoe
}


    // 1. Build a function, teamColors 
    // 2. that takes in an argument of the team name 
    // 3. and returns an array of that teams colors.

function teamColors(teamName){
    if(teamName === "Brooklyn Nets"){
        return gameObject().home.colors
    } else if(teamName === 'Charlotte Hornets') {
        return gameObject().away.colors
    } else {
        return "The team doesn't exist"
    }
  
    //return teamName === "Brooklyn Nets" ? 
    //    gameObject().home.colors : 
   //    gameObject().away.colors   
   
}

teamColors("Charlotte Hornets")
// => ['turquoise', 'purple']



    // 1. Build a function, playerNumbers, 
    // 2. that takes in an argument of a team name 
    // 3. and returns an array of the jersey numbers for that team.

playerNumbers("Brooklyn Nets")
// => [4, 0, 2, 8, ....]

function playerNumbers(teamName){
    const game = gameObject()
    const homePlayers = game.home.players
    const awayPlayers = game.away.players
    const nums = []
    
    if(teamName === game.home.teamName){
        for(let player in homePlayers){
            nums.push(homePlayers[player].number)
        }
    } else if(teamName === game.away.teamName){
        for(let player in awayPlayers){
            nums.push(awayPlayers[player].number)
      
         }  
    }
    return nums
}
  