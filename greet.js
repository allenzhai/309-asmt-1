function greet(name) {
    var i;
    var j;
    var stmt;
    var norm = "";
    var shout = "";
    var normList = [];
    var shoutList = [];
    var normed = 0;
    var shouted = 0;
    var split;
    
    if(name == null){
        norm = "Hello, my friend.";
    }
    else if (Array.isArray(name)){
        for(i = 0; i < name.length; i++){

            if (name[i].charAt(0) == '\"' && name[i].charAt(name[i].length - 1) == '\"'){
                
                split = [name[i].slice(1, name[i].length - 1)];
                
            }
            else{
                split = name[i].split(", ");
            }

            console.log(split);
            
            for (j = 0; j < split.length; j++){
                if (split[j].toUpperCase() == split[j]){
                    shoutList.push(split[j]);
                }
                else{
                    normList.push(split[j]);
                }
            }
        }

        // Norm 
        norm = "Hello";
        i = 0;

        while (normList.length > 0){
            if (normList.length == 2){
                norm += length2greetNorm(normList, normed);
                normed += 1;
                normList.shift();
                normList.shift();
            }
            else{
                norm += ", " + normList[i];
                normed += 1;
                normList.shift()
            }
            i++;
        }

        norm += ".";


        // Shout
        if (normed > 0){
            shout = " AND HELLO";
        }
        else{
            shout = "HELLO"
        }
        i = 0;

        while (shoutList.length > 0){
            if (shoutList.length == 2){
                shout += length2greetShout(shoutList, shouted);
                shouted += 1;
                shoutList.shift();
                shoutList.shift();
            }
            else{
                if (shouted == 0){
                    shout += " " + shoutList[i];
                }
                else{
                    shout += ", " + shoutList[i];
                }
                shouted += 1;
                shoutList.shift()
            }
            i++;
        }

        shout += "!";
    }
    else if (name == name.toUpperCase()){
        shout = "HELLO " + name + "!";
        shouted = 1;
    }
    else {
        norm = "Hello, " + name + ".";
    }


    if (shouted > 0){
        stmt = norm + shout;
    }
    else{
        stmt = norm;
    }
    
    return stmt;
}

function length2greetNorm(name, normed) {
    if (normed > 0){
        return ", " + name[0] + ", and " + name[1];
    }
    else{
        return ", " + name[0] + " and " + name[1];
    }
}

function length2greetShout(name, shouted) {
    if (shouted > 0){
        return " ," + name[0] + ", AND " + name[1];
    }
    else {
        return " " + name[0] + " AND " + name[1];
    }
}



module.exports = greet;