import { createTd } from "./table.js";

let leaderboard = document.getElementById("leaderboard");

let data =  {   
                "rank" : 1,
                "username": "Asaadziad",
                "pfp" : "none",
                "streak" : 1,
                "github-url": "https://github.com/Asaadziad",
            };



leaderboard.appendChild(createTd(data));
/* 
    <tr>
    <td>Element</td>
    </tr>
*/