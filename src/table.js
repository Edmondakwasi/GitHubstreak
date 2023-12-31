export function createTd(data){
    let tr = document.createElement("tr");
    for (const key in data) {
        let td = document.createElement("td");
        td.innerHTML += (data[key]);
        tr.appendChild(td);  
    }

    return tr;
}