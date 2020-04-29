let cost = [2490, 2790, 2790, 3890, 3890, 3640, 4790, 4790, 6490, 7250, 9238, 7950, 11990, 7390];
let names = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14"];

function filter() {
    let minimum = document.getElementById("min").value;
    let maximum = document.getElementById("max").value;
    
    for (let i = 0; i < cost.length; i++) {
        if (cost[i]>=minimum && cost[i]<=maximum) {
            document.getElementById(names[i]).style = "display: table-row;";
        } else {
            document.getElementById(names[i]).style = "display: none;";
        }
    }
}