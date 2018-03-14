// Copyright (c) Gavin Isgar 2018
var request = require("request");
var url = require("url");
var http = require("http");

module.exports = {
    printKills(api, mode, platform, user) {
        if(platform == "pc") {
            if(mode == "all") {
                var fortniteopts = {
                    method: "GET",
                    url: `https://fortnite.y3n.co/v2/player/${user}`,
                    headers: {
                      'User-Agent': 'nodejs request',
                      'X-Key': `${api}`
                    }
                  }
                  request(fortniteopts, (error, response, body) => {
                    try {
                        if (!error && response.statusCode == 200) {
                            var stats = JSON.parse(body);
                            console.log(`${user} Total Kills (All): ${stats.br.stats.pc.all.kills}`);
                        }
                    }
                    catch(err) {
                        console.log("Fortnite-Stats-Wrapper | There was an error performing that task.");
                    }
                  })
                  
            }
            if(mode == "solo") {
                var fortniteopts = {
                    method: "GET",
                    url: `https://fortnite.y3n.co/v2/player/${user}`,
                    headers: {
                      'User-Agent': 'nodejs request',
                      'X-Key': `${api}`
                    }
                  }
                  request(fortniteopts, (error, response, body) => {
                    try {
                        if (!error && response.statusCode == 200) {
                            var stats = JSON.parse(body);
                            console.log(`${user} Total Kills (Solo): ${stats.br.stats.pc.solo.kills}`);
                        }
                    }
                    catch(err) {
                        console.log("Fortnite-Stats-Wrapper | There was an error performing that task.");
                    }
                    
                    
                  })
            } 
            if(mode == "duo") {
                var fortniteopts = {
                    method: "GET",
                    url: `https://fortnite.y3n.co/v2/player/${user}`,
                    headers: {
                      'User-Agent': 'nodejs request',
                      'X-Key': `${api}`
                    }
                  }
                  request(fortniteopts, (error, response, body) => {
                    try {
                        if (!error && response.statusCode == 200) {
                            var stats = JSON.parse(body);
                            console.log(`${user} Total Kills (Duo): ${stats.br.stats.pc.duo.kills}`);
                        }
                    }
                    catch(err) {
                        console.log("Fortnite-Stats-Wrapper | There was an error performing that task.");
                    }
                    
                    
                  })
            }
            if(mode == "squad") {
                var fortniteopts = {
                    method: "GET",
                    url: `https://fortnite.y3n.co/v2/player/${user}`,
                    headers: {
                      'User-Agent': 'nodejs request',
                      'X-Key': `${api}`
                    }
                  }
                  request(fortniteopts, (error, response, body) => {
                    try {
                        if (!error && response.statusCode == 200) {
                            var stats = JSON.parse(body);
                            console.log(`${user} Total Kills (Squad): ${stats.br.stats.pc.squad.kills}`);
                        }
                    }
                    catch(err) {
                        console.log("Fortnite-Stats-Wrapper | There was an error performing that task.");
                    }
                    
                    
                  })
            } 
        }
    },
    //---------------
    printMatches(api, mode, platform, user) {
        if(platform == "pc") {
            if(mode == "all") {
                var fortniteopts = {
                    method: "GET",
                    url: `https://fortnite.y3n.co/v2/player/${user}`,
                    headers: {
                      'User-Agent': 'nodejs request',
                      'X-Key': `${api}`
                    }
                  }
                  request(fortniteopts, (error, response, body) => {
                    try {
                        if (!error && response.statusCode == 200) {
                            var stats = JSON.parse(body);
                            console.log(`${user} Total Matches (All): ${stats.br.stats.pc.all.matchesPlayed}`);
                        }
                    }
                    catch(err) {
                        console.log("Fortnite-Stats-Wrapper | There was an error performing that task.");
                    }
                  })
            }
            if(mode == "solo") {
                var fortniteopts = {
                    method: "GET",
                    url: `https://fortnite.y3n.co/v2/player/${user}`,
                    headers: {
                      'User-Agent': 'nodejs request',
                      'X-Key': `${api}`
                    }
                  }
                  request(fortniteopts, (error, response, body) => {
                    try {
                        if (!error && response.statusCode == 200) {
                            var stats = JSON.parse(body);
                            console.log(`${user} Total Matches (Solo): ${stats.br.stats.pc.solo.matchesPlayed}`);
                        }
                    }
                    catch(err) {
                        console.log("Fortnite-Stats-Wrapper | There was an error performing that task.");
                    }
                  })
            }
            if(mode == "duo") {
                var fortniteopts = {
                    method: "GET",
                    url: `https://fortnite.y3n.co/v2/player/${user}`,
                    headers: {
                      'User-Agent': 'nodejs request',
                      'X-Key': `${api}`
                    }
                  }
                  request(fortniteopts, (error, response, body) => {
                    try {
                        if (!error && response.statusCode == 200) {
                            var stats = JSON.parse(body);
                            console.log(`${user} Total Kills (Duo): ${stats.br.stats.pc.duo.matchesPlayed}`);
                        }
                    }
                    catch(err) {
                        console.log("Fortnite-Stats-Wrapper | There was an error performing that task.");
                    }
                  })
            }
            if(mode == "squad") {
                var fortniteopts = {
                    method: "GET",
                    url: `https://fortnite.y3n.co/v2/player/${user}`,
                    headers: {
                      'User-Agent': 'nodejs request',
                      'X-Key': `${api}`
                    }
                  }
                  request(fortniteopts, (error, response, body) => {
                    try {
                        if (!error && response.statusCode == 200) {
                            var stats = JSON.parse(body);
                            console.log(`${user} Total Matches (Squad): ${stats.br.stats.pc.squad.matchesPlayed}`);
                        }
                    }
                    catch(err) {
                        console.log("Fortnite-Stats-Wrapper | There was an error performing that task.");
                    }
                  })
            } 
        }
    },
    //---------------
    printLastMatch(api, mode, platform, user) {
        if(platform == "pc") {
            if(mode == "all") {
                var fortniteopts = {
                    method: "GET",
                    url: `https://fortnite.y3n.co/v2/player/${user}`,
                    headers: {
                      'User-Agent': 'nodejs request',
                      'X-Key': `${api}`
                    }
                  }
                  request(fortniteopts, (error, response, body) => {
                    try {
                        if (!error && response.statusCode == 200) {
                            var stats = JSON.parse(body);
                            console.log(`${user} Last Match (All): ${stats.br.stats.pc.all.lastMatch}`);
                        }
                    }
                    catch(err) {
                        console.log("Fortnite-Stats-Wrapper | There was an error performing that task.");
                    }
                  })
            }
            if(mode == "solo") {
                var fortniteopts = {
                    method: "GET",
                    url: `https://fortnite.y3n.co/v2/player/${user}`,
                    headers: {
                      'User-Agent': 'nodejs request',
                      'X-Key': `${api}`
                    }
                  }
                  request(fortniteopts, (error, response, body) => {
                    try {
                        if (!error && response.statusCode == 200) {
                            var stats = JSON.parse(body);
                            console.log(`${user} Last Match (Solo): ${stats.br.stats.pc.solo.lastMatch}`);
                        }
                    }
                    catch(err) {
                        console.log("Fortnite-Stats-Wrapper | There was an error performing that task.");
                    }
                  })
            }
            if(mode == "duo") {
                var fortniteopts = {
                    method: "GET",
                    url: `https://fortnite.y3n.co/v2/player/${user}`,
                    headers: {
                      'User-Agent': 'nodejs request',
                      'X-Key': `${api}`
                    }
                  }
                  request(fortniteopts, (error, response, body) => {
                    try {
                        if (!error && response.statusCode == 200) {
                            var stats = JSON.parse(body);
                            console.log(`${user} Last Match (Duo): ${stats.br.stats.pc.duo.lastMatch}`);
                        }
                    }
                    catch(err) {
                        console.log("Fortnite-Stats-Wrapper | There was an error performing that task.");
                    }
                  })
            }
            if(mode == "squad") {
                var fortniteopts = {
                    method: "GET",
                    url: `https://fortnite.y3n.co/v2/player/${user}`,
                    headers: {
                      'User-Agent': 'nodejs request',
                      'X-Key': `${api}`
                    }
                  }
                  request(fortniteopts, (error, response, body) => {
                    try {
                        if (!error && response.statusCode == 200) {
                            var stats = JSON.parse(body);
                            console.log(`${user} Last Match (Squad): ${stats.br.stats.pc.squad.lastMatch}`);
                        }
                    }
                    catch(err) {
                        console.log("Fortnite-Stats-Wrapper | There was an error performing that task.");
                    }
                  })
            }
        }
    },
    //---------------
    printTotalPlaytime(api, mode, platform, user) {
        if(platform == "pc") {
            if(mode == "all") {
                var fortniteopts = {
                    method: "GET",
                    url: `https://fortnite.y3n.co/v2/player/${user}`,
                    headers: {
                      'User-Agent': 'nodejs request',
                      'X-Key': `${api}`
                    }
                  }
                  request(fortniteopts, (error, response, body) => {
                    try {
                        if (!error && response.statusCode == 200) {
                            var stats = JSON.parse(body);
                            console.log(`${user} Total Playtime (All): ${stats.br.stats.pc.all.minutesPlayed}`);
                        }
                    }
                    catch(err) {
                        console.log("Fortnite-Stats-Wrapper | There was an error performing that task.");
                    }
                  })
            }
            if(mode == "solo") {
                var fortniteopts = {
                    method: "GET",
                    url: `https://fortnite.y3n.co/v2/player/${user}`,
                    headers: {
                      'User-Agent': 'nodejs request',
                      'X-Key': `${api}`
                    }
                  }
                  request(fortniteopts, (error, response, body) => {
                    try {
                        if (!error && response.statusCode == 200) {
                            var stats = JSON.parse(body);
                            console.log(`${user} Total Playtime (solo): ${stats.br.stats.pc.solo.minutesPlayed}`);
                        }
                    }
                    catch(err) {
                        console.log("Fortnite-Stats-Wrapper | There was an error performing that task.");
                    }
                  })
            }
            if(mode == "duo") {
                var fortniteopts = {
                    method: "GET",
                    url: `https://fortnite.y3n.co/v2/player/${user}`,
                    headers: {
                      'User-Agent': 'nodejs request',
                      'X-Key': `${api}`
                    }
                  }
                  request(fortniteopts, (error, response, body) => {
                    try {
                        if (!error && response.statusCode == 200) {
                            var stats = JSON.parse(body);
                            console.log(`${user} Total Playtime (Duo): ${stats.br.stats.pc.duo.minutesPlayed}`);
                        }
                    }
                    catch(err) {
                        console.log("Fortnite-Stats-Wrapper | There was an error performing that task.");
                    }
                  })
            }
            if(mode == "squad") {
                var fortniteopts = {
                    method: "GET",
                    url: `https://fortnite.y3n.co/v2/player/${user}`,
                    headers: {
                      'User-Agent': 'nodejs request',
                      'X-Key': `${api}`
                    }
                  }
                  request(fortniteopts, (error, response, body) => {
                    try {
                        if (!error && response.statusCode == 200) {
                            var stats = JSON.parse(body);
                            console.log(`${user} Total Playtime (Squad): ${stats.br.stats.pc.squad.minutesPlayed}`);
                        }
                    }
                    catch(err) {
                        console.log("Fortnite-Stats-Wrapper | There was an error performing that task.");
                    }
                  })
            }
        }
    },
    //---------------
    printWins(api, mode, platform, user) {
        if(platform == "pc") {
            if(mode == "all") {
                var fortniteopts = {
                    method: "GET",
                    url: `https://fortnite.y3n.co/v2/player/${user}`,
                    headers: {
                      'User-Agent': 'nodejs request',
                      'X-Key': `${api}`
                    }
                  }
                  request(fortniteopts, (error, response, body) => {
                    try {
                        if (!error && response.statusCode == 200) {
                            var stats = JSON.parse(body);
                            console.log(`${user} Total Wins (All): ${stats.br.stats.pc.all.wins}`);
                        }
                    }
                    catch(err) {
                        console.log("Fortnite-Stats-Wrapper | There was an error performing that task.");
                    }
                  })
            }
            if(mode == "solo") {
                var fortniteopts = {
                    method: "GET",
                    url: `https://fortnite.y3n.co/v2/player/${user}`,
                    headers: {
                      'User-Agent': 'nodejs request',
                      'X-Key': `${api}`
                    }
                  }
                  request(fortniteopts, (error, response, body) => {
                    try {
                        if (!error && response.statusCode == 200) {
                            var stats = JSON.parse(body);
                            console.log(`${user} Total Wins (Solo): ${stats.br.stats.pc.solo.wins}`);
                        }
                    }
                    catch(err) {
                        console.log("Fortnite-Stats-Wrapper | There was an error performing that task.");
                    }
                  })
            }
            if(mode == "duo") {
                var fortniteopts = {
                    method: "GET",
                    url: `https://fortnite.y3n.co/v2/player/${user}`,
                    headers: {
                      'User-Agent': 'nodejs request',
                      'X-Key': `${api}`
                    }
                  }
                  request(fortniteopts, (error, response, body) => {
                    try {
                        if (!error && response.statusCode == 200) {
                            var stats = JSON.parse(body);
                            console.log(`${user} Total Wins (Duo): ${stats.br.stats.pc.duo.wins}`);
                        }
                    }
                    catch(err) {
                        console.log("Fortnite-Stats-Wrapper | There was an error performing that task.");
                    }
                  })
            }
            if(mode == "squad") {
                var fortniteopts = {
                    method: "GET",
                    url: `https://fortnite.y3n.co/v2/player/${user}`,
                    headers: {
                      'User-Agent': 'nodejs request',
                      'X-Key': `${api}`
                    }
                  }
                  request(fortniteopts, (error, response, body) => {
                    try {
                        if (!error && response.statusCode == 200) {
                            var stats = JSON.parse(body);
                            console.log(`${user} Total Wins (Squad): ${stats.br.stats.pc.squad.wins}`);
                        }
                    }
                    catch(err) {
                        console.log("Fortnite-Stats-Wrapper | There was an error performing that task.");
                    }
                  })
            }
        }
    },
    //---------------
    printTop10(api, mode, platform, user) {
        if(platform == "pc") {
            if(mode == "all") {
                var fortniteopts = {
                    method: "GET",
                    url: `https://fortnite.y3n.co/v2/player/${user}`,
                    headers: {
                      'User-Agent': 'nodejs request',
                      'X-Key': `${api}`
                    }
                  }
                  request(fortniteopts, (error, response, body) => {
                    try {
                        if (!error && response.statusCode == 200) {
                            var stats = JSON.parse(body);
                            console.log(`${user} Placed Top 10 (All): ${stats.br.stats.pc.all.top10}`);
                        }
                    }
                    catch(err) {
                        console.log("Fortnite-Stats-Wrapper | There was an error performing that task.");
                    }
                  })
            }
            if(mode == "solo") {
                var fortniteopts = {
                    method: "GET",
                    url: `https://fortnite.y3n.co/v2/player/${user}`,
                    headers: {
                      'User-Agent': 'nodejs request',
                      'X-Key': `${api}`
                    }
                  }
                  request(fortniteopts, (error, response, body) => {
                    try {
                        if (!error && response.statusCode == 200) {
                            var stats = JSON.parse(body);
                            console.log(`${user} Placed Top 10 (Solo): ${stats.br.stats.pc.solo.top10}`);
                        }
                    }
                    catch(err) {
                        console.log("Fortnite-Stats-Wrapper | There was an error performing that task.");
                    }
                  })
            }
            if(mode == "duo") {
                var fortniteopts = {
                    method: "GET",
                    url: `https://fortnite.y3n.co/v2/player/${user}`,
                    headers: {
                      'User-Agent': 'nodejs request',
                      'X-Key': `${api}`
                    }
                  }
                  request(fortniteopts, (error, response, body) => {
                    try {
                        if (!error && response.statusCode == 200) {
                            var stats = JSON.parse(body);
                            console.log(`${user} Placed Top 10 (Duo): ${stats.br.stats.pc.duo.top10}`);
                        }
                    }
                    catch(err) {
                        console.log("Fortnite-Stats-Wrapper | There was an error performing that task.");
                    }
                  })
            }
            if(mode == "squad") {
                var fortniteopts = {
                    method: "GET",
                    url: `https://fortnite.y3n.co/v2/player/${user}`,
                    headers: {
                      'User-Agent': 'nodejs request',
                      'X-Key': `${api}`
                    }
                  }
                  request(fortniteopts, (error, response, body) => {
                    try {
                        if (!error && response.statusCode == 200) {
                            var stats = JSON.parse(body);
                            console.log(`${user} Placed Top 10 (Squad): ${stats.br.stats.pc.squad.top10}`);
                        }
                    }
                    catch(err) {
                        console.log("Fortnite-Stats-Wrapper | There was an error performing that task.");
                    }
                  })
            }
        }
    },
    //---------------
    printTop25(api, mode, platform, user) {
        if(platform == "pc") {
            if(mode == "all") {
                var fortniteopts = {
                    method: "GET",
                    url: `https://fortnite.y3n.co/v2/player/${user}`,
                    headers: {
                      'User-Agent': 'nodejs request',
                      'X-Key': `${api}`
                    }
                  }
                  request(fortniteopts, (error, response, body) => {
                    try {
                        if (!error && response.statusCode == 200) {
                            var stats = JSON.parse(body);
                            console.log(`${user} Placed Top 25 (All): ${stats.br.stats.pc.all.top25}`);
                        }
                    }
                    catch(err) {
                        console.log("Fortnite-Stats-Wrapper | There was an error performing that task.");
                    }
                  })
            }
            if(mode == "solo") {
                var fortniteopts = {
                    method: "GET",
                    url: `https://fortnite.y3n.co/v2/player/${user}`,
                    headers: {
                      'User-Agent': 'nodejs request',
                      'X-Key': `${api}`
                    }
                  }
                  request(fortniteopts, (error, response, body) => {
                    try {
                        if (!error && response.statusCode == 200) {
                            var stats = JSON.parse(body);
                            console.log(`${user} Placed Top 25 (Solo): ${stats.br.stats.pc.solo.top25}`);
                        }
                    }
                    catch(err) {
                        console.log("Fortnite-Stats-Wrapper | There was an error performing that task.");
                    }
                  })
            }
            if(mode == "duo") {
                var fortniteopts = {
                    method: "GET",
                    url: `https://fortnite.y3n.co/v2/player/${user}`,
                    headers: {
                      'User-Agent': 'nodejs request',
                      'X-Key': `${api}`
                    }
                  }
                  request(fortniteopts, (error, response, body) => {
                    try {
                        if (!error && response.statusCode == 200) {
                            var stats = JSON.parse(body);
                            console.log(`${user} Placed Top 25 (Duo): ${stats.br.stats.pc.duo.top25}`);
                        }
                    }
                    catch(err) {
                        console.log("Fortnite-Stats-Wrapper | There was an error performing that task.");
                    }
                  })
            }
            if(mode == "squad") {
                var fortniteopts = {
                    method: "GET",
                    url: `https://fortnite.y3n.co/v2/player/${user}`,
                    headers: {
                      'User-Agent': 'nodejs request',
                      'X-Key': `${api}`
                    }
                  }
                  request(fortniteopts, (error, response, body) => {
                    try {
                        if (!error && response.statusCode == 200) {
                            var stats = JSON.parse(body);
                            console.log(`${user} Placed Top 25 (Squad): ${stats.br.stats.pc.squad.top25}`);
                        }
                    }
                    catch(err) {
                        console.log("Fortnite-Stats-Wrapper | There was an error performing that task.");
                    }
                  })
            }
        }
    },
    //---------------
    printDeaths(api, mode, platform, user) {
        if(platform == "pc") {
            if(mode == "all") {
                var fortniteopts = {
                    method: "GET",
                    url: `https://fortnite.y3n.co/v2/player/${user}`,
                    headers: {
                      'User-Agent': 'nodejs request',
                      'X-Key': `${api}`
                    }
                  }
                  request(fortniteopts, (error, response, body) => {
                    try {
                        if (!error && response.statusCode == 200) {
                            var stats = JSON.parse(body);
                            console.log(`${user} Total Deaths (All): ${stats.br.stats.pc.all.deaths}`);
                        }
                    }
                    catch(err) {
                        console.log("Fortnite-Stats-Wrapper | There was an error performing that task.");
                    }
                  })
            }
            if(mode == "solo") {
                var fortniteopts = {
                    method: "GET",
                    url: `https://fortnite.y3n.co/v2/player/${user}`,
                    headers: {
                      'User-Agent': 'nodejs request',
                      'X-Key': `${api}`
                    }
                  }
                  request(fortniteopts, (error, response, body) => {
                    try {
                        if (!error && response.statusCode == 200) {
                            var stats = JSON.parse(body);
                            console.log(`${user} Total Deaths (Solo): ${stats.br.stats.pc.solo.deaths}`);
                        }
                    }
                    catch(err) {
                        console.log("Fortnite-Stats-Wrapper | There was an error performing that task.");
                    }
                  })
            }
            if(mode == "duo") {
                var fortniteopts = {
                    method: "GET",
                    url: `https://fortnite.y3n.co/v2/player/${user}`,
                    headers: {
                      'User-Agent': 'nodejs request',
                      'X-Key': `${api}`
                    }
                  }
                  request(fortniteopts, (error, response, body) => {
                    try {
                        if (!error && response.statusCode == 200) {
                            var stats = JSON.parse(body);
                            console.log(`${user} Total Deaths (Duo): ${stats.br.stats.pc.duo.deaths}`);
                        }
                    }
                    catch(err) {
                        console.log("Fortnite-Stats-Wrapper | There was an error performing that task.");
                    }
                  })
            }
            if(mode == "squad") {
                var fortniteopts = {
                    method: "GET",
                    url: `https://fortnite.y3n.co/v2/player/${user}`,
                    headers: {
                      'User-Agent': 'nodejs request',
                      'X-Key': `${api}`
                    }
                  }
                  request(fortniteopts, (error, response, body) => {
                    try {
                        if (!error && response.statusCode == 200) {
                            var stats = JSON.parse(body);
                            console.log(`${user} Total Deaths (Squad): ${stats.br.stats.pc.squad.deaths}`);
                        }
                    }
                    catch(err) {
                        console.log("Fortnite-Stats-Wrapper | There was an error performing that task.");
                    }
                  })
            }
        }
    },
    //---------------
    printScore(api, mode, platform, user) {
        if(platform == "pc") {
            if(mode == "all") {
                var fortniteopts = {
                    method: "GET",
                    url: `https://fortnite.y3n.co/v2/player/${user}`,
                    headers: {
                      'User-Agent': 'nodejs request',
                      'X-Key': `${api}`
                    }
                  }
                  request(fortniteopts, (error, response, body) => {
                    try {
                        if (!error && response.statusCode == 200) {
                            var stats = JSON.parse(body);
                            console.log(`${user} Total Score (All): ${stats.br.stats.pc.all.score}`);
                        }
                    }
                    catch(err) {
                        console.log("Fortnite-Stats-Wrapper | There was an error performing that task.");
                    }
                  })
            }
            if(mode == "solo") {
                var fortniteopts = {
                    method: "GET",
                    url: `https://fortnite.y3n.co/v2/player/${user}`,
                    headers: {
                      'User-Agent': 'nodejs request',
                      'X-Key': `${api}`
                    }
                  }
                  request(fortniteopts, (error, response, body) => {
                    try {
                        if (!error && response.statusCode == 200) {
                            var stats = JSON.parse(body);
                            console.log(`${user} Total Score (Solo): ${stats.br.stats.pc.solo.score}`);
                        }
                    }
                    catch(err) {
                        console.log("Fortnite-Stats-Wrapper | There was an error performing that task.");
                    }
                  })
            }
            if(mode == "duo") {
                var fortniteopts = {
                    method: "GET",
                    url: `https://fortnite.y3n.co/v2/player/${user}`,
                    headers: {
                      'User-Agent': 'nodejs request',
                      'X-Key': `${api}`
                    }
                  }
                  request(fortniteopts, (error, response, body) => {
                    try {
                        if (!error && response.statusCode == 200) {
                            var stats = JSON.parse(body);
                            console.log(`${user} Total Score (Duo): ${stats.br.stats.pc.duo.score}`);
                        }
                    }
                    catch(err) {
                        console.log("Fortnite-Stats-Wrapper | There was an error performing that task.");
                    }
                  })
            }
            if(mode == "squad") {
                var fortniteopts = {
                    method: "GET",
                    url: `https://fortnite.y3n.co/v2/player/${user}`,
                    headers: {
                      'User-Agent': 'nodejs request',
                      'X-Key': `${api}`
                    }
                  }
                  request(fortniteopts, (error, response, body) => {
                    try {
                        if (!error && response.statusCode == 200) {
                            var stats = JSON.parse(body);
                            console.log(`${user} Total Score (Squad): ${stats.br.stats.pc.squad.score}`);
                        }
                    }
                    catch(err) {
                        console.log("Fortnite-Stats-Wrapper | There was an error performing that task.");
                    }
                  })
            }
        }
    },
    //---------------
    printWinRate(api, mode, platform, user) {
        if(platform == "pc") {
            if(mode == "all") {
                var fortniteopts = {
                    method: "GET",
                    url: `https://fortnite.y3n.co/v2/player/${user}`,
                    headers: {
                      'User-Agent': 'nodejs request',
                      'X-Key': `${api}`
                    }
                  }
                  request(fortniteopts, (error, response, body) => {
                    try {
                        if (!error && response.statusCode == 200) {
                            var stats = JSON.parse(body);
                            console.log(`${user} Win Rate (All): ${stats.br.stats.pc.all.winRate}`);
                        }
                    }
                    catch(err) {
                        console.log("Fortnite-Stats-Wrapper | There was an error performing that task.");
                    }
                  })
            }
            if(mode == "solo") {
                var fortniteopts = {
                    method: "GET",
                    url: `https://fortnite.y3n.co/v2/player/${user}`,
                    headers: {
                      'User-Agent': 'nodejs request',
                      'X-Key': `${api}`
                    }
                  }
                  request(fortniteopts, (error, response, body) => {
                    try {
                        if (!error && response.statusCode == 200) {
                            var stats = JSON.parse(body);
                            console.log(`${user} Win Rate (Solo): ${stats.br.stats.pc.solo.winRate}`);
                        }
                    }
                    catch(err) {
                        console.log("Fortnite-Stats-Wrapper | There was an error performing that task.");
                    }
                  })
            }
            if(mode == "duo") {
                var fortniteopts = {
                    method: "GET",
                    url: `https://fortnite.y3n.co/v2/player/${user}`,
                    headers: {
                      'User-Agent': 'nodejs request',
                      'X-Key': `${api}`
                    }
                  }
                  request(fortniteopts, (error, response, body) => {
                    try {
                        if (!error && response.statusCode == 200) {
                            var stats = JSON.parse(body);
                            console.log(`${user} Win Rate (Duo): ${stats.br.stats.pc.duo.winRate}`);
                        }
                    }
                    catch(err) {
                        console.log("Fortnite-Stats-Wrapper | There was an error performing that task.");
                    }
                  })
            }
            if(mode == "squad") {
                var fortniteopts = {
                    method: "GET",
                    url: `https://fortnite.y3n.co/v2/player/${user}`,
                    headers: {
                      'User-Agent': 'nodejs request',
                      'X-Key': `${api}`
                    }
                  }
                  request(fortniteopts, (error, response, body) => {
                    try {
                        if (!error && response.statusCode == 200) {
                            var stats = JSON.parse(body);
                            console.log(`${user} Win Rate (Squad): ${stats.br.stats.pc.squad.winRate}`);
                        }
                    }
                    catch(err) {
                        console.log("Fortnite-Stats-Wrapper | There was an error performing that task.");
                    }
                  })
            }
        }
    },
    //---------------
}


              



            