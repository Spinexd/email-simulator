// Selectors 
const envelope = document.querySelector(".envelope");
const mails = document.querySelector(".column");
const content = document.querySelector(".column2");




// Eventlisteners
envelope.addEventListener("click", (e) => {
    location.reload();
})






const trM = document.createElement('tr');
const thM = document.createElement('th');
thM.textContent = ' ';

mails.append(trM)

const tr = document.createElement('tr');
const td = document.createElement('td');
td.textContent = 'hello im a nigerian prince';
tr.append(td);
content.append(tr);
