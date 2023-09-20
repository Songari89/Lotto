const drawBtn = document.getElementById("draw");
const numberListBox = document.getElementById("listcontainer");
const numLists = document.getElementById("numlists");
let logNumber = [];

const initailLog = () => {
  const initailList = JSON.parse(localStorage.getItem('lists')) || [];
  initailList.forEach((log) => {
    const numList = document.createElement('li')
  numList.className="numlist"
  numList.innerHTML = log
  numLists.append(numList)})

}
initailLog();
const handleDraw = () => {
  numberListBox.innerHTML = "";
  const numberLists = document.createElement("ul");
  numberLists.className = "numberlist";
  const numbers = drawNumber();
  logNumber.push(numbers);
  if(logNumber.length > 5) {
    logNumber = logNumber.slice(-5)
  }
  localStorage.setItem("lists", JSON.stringify(logNumber));
  numbers.map((number) => {
    const list = document.createElement("li");
    list.innerHTML = `
      <div class="list">
        <h3>${number}</h3>
      </div>
    `;
    numberLists.append(list);
  });
  numberListBox.append(numberLists);
  showLog();
};

const showLog = () => {
  
  numLists.innerHTML = '';
  const storageLists = JSON.parse(localStorage.getItem("lists")) || [];
  storageLists.forEach((log) => {
    const numList = document.createElement('li')
  numList.className="numlist"
  numList.innerHTML = log
  numLists.append(numList)
  })
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
