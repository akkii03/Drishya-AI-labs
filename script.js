
// access to the particular tag in dom
let tableData = document.querySelectorAll('td');
const addBtn = document.getElementById('add');
const removeBtn = document.getElementById("remove");
const display = document.getElementById('sum');
let sum = 0;


// calculate sum
function calculateSum () {
    for(let i=0;i<tableData.length;i++) {
        console.log(tableData.length);
        sum += parseInt(tableData[i].innerText);
    }
    return sum;
}

// display sum
calculateSum();
display.append(sum);


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
    display.innerText = "";
    calculateSum();
    display.append(sum);
});

//delete column logic
removeBtn.addEventListener('click',()=>{
    const tr = document.querySelectorAll('tr');
    const last = tr[tr.length-1];
    last.remove();
    display.innerText = "";
    let sum = 0;
    const data = document.querySelectorAll("td");
    for(let i=0;i<data.length;i++) {
        sum += parseInt(data[i].innerText);
    }
    display.append(sum);
})


