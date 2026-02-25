let count = 0;
const mainDiv = document.getElementById("mainDiv");
const counter = document.getElementById("count");

function updateCounter(){
    count += 1;
    mainDiv.style.backgroundColor = `rgb(${211-(10*count)}, ${211-(5*count)}, 211)`;
    // counter.innerText = count;
}

let emojis = ["⭐", "🌙", "☀️", "🪐", "☄️", "✨", "🚀"];

function createTableFromJson() {
  // Get the container element
  const container = document.getElementById('mainDiv');

  // Create the main table element
  const table = document.createElement('table');
  
  // Get the keys from the first object to use as table headers
  const columns = ["ID", "Challenge_Name","Category","Difficulty","Points","Attempts","Attempts_Successful","Attempts_Fail", "Success_Rate"]

  let id = 1;
  // Create table body rows
  /* columns.forEach(item => {
    const dataRow = document.createElement('tr');
    columns.forEach(col => {
      const td = document.createElement('td');
      td.innerHTML = "X";

      td.onclick = function () {
        if(td.style.color === "transparent"){
          td.style.color = "initial";
        }
        else {
          td.style.color = "transparent";
        }
      };

      dataRow.appendChild(td);
    });
    table.appendChild(dataRow);
  }); */


  /* for(let i = 0; i < 14; i++) {
    const dataRow = document.createElement('tr');
    for(let j = 0; j < 36; j++){
      const td = document.createElement('td');
      td.innerHTML = "~";

      td.onmouseover = function () {
        td.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
        td.style.fontSize = "2rem";
      };
      td.onclick = function () {
        td.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
      };

      dataRow.appendChild(td);
    }
    table.appendChild(dataRow);
  } */

  let gridSpacing = 55;
  let W = window.innerWidth;
  let H = window.innerHeight;

  for (let y = 0; y < H - (gridSpacing * 2); y += gridSpacing) {
    const dataRow = document.createElement('tr');
    for (let x = gridSpacing; x < W - gridSpacing; x += gridSpacing) {
        const td = document.createElement('td');
        td.innerHTML = "〰";

        td.style.left = `${x}px`;
        td.style.top = `${y}px`;

        td.onmouseover = function () {
          td.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
          td.style.fontSize = "1.7rem";
        };
        td.onclick = function () {
          td.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
        };

        dataRow.appendChild(td);
    }
    table.appendChild(dataRow);
  }

  // Append the created table to the container
  container.appendChild(table);
}

createTableFromJson();