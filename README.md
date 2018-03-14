# Fortnite-Stats-Wrapper
This API wrapper was developed for developers to help simplify retrieving Fortnite user statistics. This wrapper is easy to install, as well as easy to use.  

## Installing The Wrapper
Installing the wrapper is easy; just install it as a zip file and then place the extracted folder into your code repository/folder. The 
```require``` line of code.  

## Before-Hand Requirements  
Before using this wrapper, it is required that all three of these node-modules are both called and installed; the ```url```, ```http```, as well as the ```request``` modules are required (the ```request``` module is the only one that requires an ```npm``` install.)

## Using The Wrapper To Find Statistics
Once again, this wrapper was developed to be simple to use, so getting it working should not be too much of a hassle. After making sure that all required node-modules are installed, we can call the wrapper and also use it's features.  
```javascript
/* This is the file that will use the wrapper. The 'statistics' folder of 
the wrapper should be in the same directory as this code file!
*/

var fortnite = require("./statistics/fortnite.js");

/* This line of code logs the number of kills of a player depending
on the gamemode, platform etc. PC is the only supported platform 
(as of 3/14/2018.) Since this wrapper uses the API from 
https://fortnite.y3n.co/, you must get an API-Key from their bot.
*/

fortnite.printKills("API-Key", "solo", "pc", "Gisgar3");

// Console Output --> 'Gisgar3 Total Kills (Solo): 122'
```  
## List Of Commands  
**printKills**: Print the number of kills.  
**printMatches**: Print the number of played matches.  
**printLastMatch**: Print the date of last match played.  
**printTotalPlaytime**: Print total playtime.  
**printWins**: Print the number of wins.  
**printTop10**: Print the number of 'Top 10' placements.  
**printTop25**: Print the number of 'Top 25' placements.  
**printDeaths**: Print the number of deaths.  
**printScore**: Print total player score.  
**printWinRate**: Print win rate.  

## Notice
This API-Wrapper uses the API from ```https://fortnite.y3n.co/```; you will need to retrieve an API key from them (you can Direct Message their Discord bot for an instant key.)

