
// access to the particular tag in dom
let tableData = document.querySelectorAll('td');
const addBtn = document.getElementById('add');
const removeBtn = document.getElementById("remove");
const display = document.getElementById('sum');


//calculate sum 

function calculateSum (td) {
    display.innerText = "";
    let sum = 0;
    for(let i=0;i<td.length;i++) {
        sum += parseInt(td[i].innerText);
    }
    display.append(sum);
}


// add column logic 
addBtn.addEventListener('click',()=>{
    const tr = document.createElement('tr');
    for( let i=0;i<3;i++) {
        const td = document.createElement("td");
        td.innerText = 3;
        tr.appendChild(td);
    } 
    const mainTable = document.getElementById("tableBody");
    mainTable.append(tr);
    const td = document.querySelectorAll("td");
    calculateSum(td);    
});

//delete column logic
removeBtn.addEventListener('click',()=>{
    const tr = document.querySelectorAll('tr');
    const last = tr[tr.length-1];
    last.remove();
    const data = document.querySelectorAll("td");
    calculateSum(data);  
})


