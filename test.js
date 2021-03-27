const https = require("https");



var obj = {};
year = 2011


function data(year){
    
    for (var i = 1; i <= 13; i++) {
        https.get("https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=" + year + "&page=" + i, (res) => {
            res.on('data', (data) => {
                var json = JSON.parse(data);
                for (var j = 0; j < json.data.length; j++) {
                    if(json.data[j].team1 in obj){
                        obj[json.data[j].team1] += 1;
                    }
                    else{
                       obj[json.data[j].team1] = 1;
                    }
                    if(json.data[j].team2 in obj){
                        obj[json.data[j].team1] += 1;
                    }
                    else{
                       obj[json.data[j].team2] = 1;
                    }
                    if(i == 13 && j == ){
                        console.log(obj);
                    }
                }
            })
        })
        
    }


}