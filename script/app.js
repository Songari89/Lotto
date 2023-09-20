const drawBtn = document.getElementById("draw");
const numberListBox = document.getElementById("listcontainer");
const numLists = document.getElementById("numlists");
let logNumber = [];

const initailLog = () => {
  const initailList = JSON.parse(localStorage.getItem("lists")) || [];
  initailList.forEach((log) => {
    const numList = document.createElement("li");
    numList.className = "numlist";
    numList.innerHTML = log;
    numLists.append(numList);
  });
};
initailLog();

const handleDraw = () => {
  numberListBox.innerHTML = "";
  const numberLists = document.createElement("ul");
  numberLists.className = "numberlist";
  const numbers = drawNumber();
  logNumber.push(numbers);
  if (logNumber.length > 5) {
    logNumber = logNumber.slice(-5);
  }
  localStorage.setItem("lists", JSON.stringify(logNumber));
  numbers.map((number) => {
    const list = document.createElement("li");
    list.className = "list";
    if (number >= 1 && number <= 10) {
      list.classList.add("range-1-10");
    } else if (number >= 11 && number <= 20) {
      list.classList.add("range-11-20");
    } else if (number >= 21 && number <= 30) {
      list.classList.add("range-21-30");
    } else if (number >= 31 && number <= 40) {
      list.classList.add("range-31-40");
    } else {
      list.classList.add("range-41-45");
    }

    list.innerHTML = `
      <div>
        <p>${number}</p>
      </div>
    `;
    numberLists.append(list);
  });
  numberListBox.append(numberLists);
  showLog();
};

const showLog = () => {
  numLists.innerHTML = "";
  const storageLists = JSON.parse(localStorage.getItem("lists")) || [];
  storageLists.forEach((log) => {
    const numList = document.createElement("li");
    numList.className = "numlist";
    numList.innerHTML = log;
    numLists.append(numList);
  });
};

const drawNumber = () => {
  const numberArray = [];
  while (numberArray.length <= 5) {
    const num = Math.ceil(Math.random() * 45);
    if (!numberArray.includes(num)) {
      numberArray.push(num);
    }
  }
  return numberArray.sort((a, b) => a - b);
};

drawBtn.addEventListener("click", handleDraw);
