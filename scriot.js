function greetings(fname){
    // spot time 
 var today = new Date();
    var hour = today.getHours();

    //Greetings
    if(hour < 12){
        var greeting = "Good Morning " + fname;
    }else if(hour < 18){
        var greeting = "Good Afternoon " + fname;
    }else{
        var greeting = "Good Evening " + fname;
    }
    return greeting + " " +fname + " " + "<br>" + "welcome to our website!";
}

function starTime(){
    var today = new Date();
    var weekday = today.getDay();
    var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var day = today.getDate();
    var month = today.getMonth();
    var monthlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var monthName = monthlist[month];
    var year = today.getFullYear();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    document.getElementById("time").innerHTML = day + "/" + monthName + "/" + year + " " + hour + ":" + minute + ":" + second;
    var t = setTimeout(starTime, 1000);
}