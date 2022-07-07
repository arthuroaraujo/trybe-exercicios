function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercício 1
let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
  let getDaysList = document.querySelector('#days'); // Seleciona o elemento com ID days que é nossa lista

  for (let index = 0; index < decemberDaysList.length; index += 1) { // Percorre o array fornecido
    
    let day = decemberDaysList[index]; // Em cada iteração armazenamos o elemento atual (o dia) na variável day
    let dayItem = document.createElement('li'); // Cria o list item que irá representar o dia em nossa lista
    dayItem.innerHTML = day;
    
    if (day === 24 || day === 31) {
      // Caso o dia for 24 ou 31
      dayItem.className = 'day holiday'; // Atribua a classe 'day holiday' ao li criado
      getDaysList.appendChild(dayItem); // Anexe o li criado como elemento filho do ul
    } else if (day === 4 || day === 11 || day === 18) {
      // Caso o dia for 4, 11 ou 18
      dayItem.className = 'day friday'; // Atribua a classe 'day friday' ao li criado
      getDaysList.appendChild(dayItem);
    } else if (day === 25) {
      // Caso o dia for 25
      dayItem.className = 'day holiday friday'; // Atribua a classe 'day holiday friday' ao li criado
      getDaysList.appendChild(dayItem);
    } else {
      // Caso seja qualquer outro dia adicione a classe day ao li criado
      dayItem.className = 'day';
      getDaysList.appendChild(dayItem);
    }
  }
}

createDaysOfTheMonth();

// Exercício 2

function createHolidayButton(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container'); // Seleciona o elemento no qual iremos adicionar o botão no documento
  let newButton = document.createElement('button'); // Cria o botão
  let newButtonID = 'btn-holiday'; // Variável que guarda a string com o ID do botão

  newButton.innerHTML = buttonName; // Adiciona o nome do botão a propriedade innerHTML
  newButton.id = newButtonID; // Adiciona a ID ao botão
  
  buttonContainer.appendChild(newButton); // Adiciona o botão como filho da div que selecionamos no início da função
}

createHolidayButton('Feriados');

// Exercício 3

function displayHolidays() {
  let getHolidayButton = document.querySelector('#btn-holiday'); // selecione o botão "Feriados";
  let getHolidays = document.querySelectorAll('.holiday')// Seleciona todos os feriados como um array de elementos;
  let backgroundColor = 'rgb(238,238,238)'; // armazena a cor da configuração inicial;
  let setNewColor = 'white'; // armazena a nova cor que será utilizada ao pressionar o botão.

  getHolidayButton.addEventListener('click', function(){
    for(let index = 0; index < getHolidays.length; index += 1){
      if(getHolidays[index].style.backgroundColor === setNewColor){
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor === setNewColor;
      }
    }
  });
}

displayHolidays();

// Exercício 4

function createFridayButton(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonID = 'btn-friday';

  newButton.innerHTML = buttonName;
  newButton.id = newButtonID

  buttonContainer.appendChild(newButton);
}

createFridayButton('Sexta-feira');

// Exercício 5

function displayFridays(fridaysArray) {
  let getFridayButton = document.querySelector('#btn-friday');
  let getFridays = document.getElementsByClassName('friday');
  let newText = 'SEXTOU';

  getFridayButton.addEventListener('click', function(){
    for(let index = 0; index < getFridays.length; index += 1){

      if(getFridays[index].innerHTML !== newText) {
        getFridays[index].innerHTML = newText;
      } else {
        getFridays[index].innerHTML = fridaysArray[index];
      }
    }
  });
}

let decemberFridays = [ 4, 11, 18, 25 ];
displayFridays(decemberFridays);

// Exercício 6

function dayMouseOver (){
  let getDays = document.querySelector('#days');
  getDays.addEventListener('mouseover', function(event){
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
}

function dayMouseOut (){
  let getDays = document.querySelector('#days');
  getDays.addEventListener('mouseout', function(event){
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  })
}

dayMouseOver();
dayMouseOut();

// Exercício 7

function newTaskSpan(task) {
  let tasksContainer = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');

  taskName.innerHTML = task;
  tasksContainer.appendChild(taskName);
}

newTaskSpan('cozinhar');

// Exercício 8

function newTaskDiv(color) {
  let tasksContainer = document.querySelector('.my-tasks');
  let newTask = document.createElement('div');

  newTask.className = 'task';
  newTask.style.backgroundColor = color;

  tasksContainer.appendChild(newTask);
}

newTaskDiv('green');

// Exercício 9

function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');

  myTasks.addEventListener('click', function(event){
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
}

setTaskClass();

// Exercício 10

function setDayColor () {
  let selectedTask = document.getElementsByClassName('task selected'); // Retorna um array com todos os elementos com a classe "task selected"
  let days = document.querySelector('#days'); // Seleciona a primeira ul com id "days"
  let taskDiv = document.querySelector('.task'); // Seleciona o primeiro elemento com a classe "task"
  let taskColor = taskDiv.style.backgroundColor; // Salva o Background Color da classe task na variável "taskColor"

  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor; // Pega a cor de fundo do primeiro elemento salvo na variável "selectedTask" e salva na variável "color"
      event.target.style.color = color; // atribui a cor salva na variável "color" ao evento alvo
    } else if (eventTargetColor === taskColor) {
      event.target.style.color = 'rgb(119,119,119)';  // Altera a cor de fundo do evento alvo para "rgb(119, 119, 119)"
    }
  });
}

setDayColor();