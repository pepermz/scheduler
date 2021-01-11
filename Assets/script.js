var currentDay = document.querySelector('#currentDay')
var scheduleItem = document.querySelectorAll('#schedule-item')
var scheduleItemTime = document.querySelectorAll('#schedule-item-time')
var scheduleItemBg = document.querySelectorAll('#task-background')

window.onload = function (){
    currentDay.innerHTML = moment().format('dddd, MMM Do'); 

    var currentHr = moment().format('h');
    var currentTime = moment().format('h a');
    for(let i = 0; i < scheduleItem.length; i++){
        if(currentTime.includes('pm') && scheduleItemTime[i].innerHTML.includes('AM')){
            scheduleItemBg[i].classList.add('bg-light');
        } else if(scheduleItemTime[i].innerHTML.includes(currentHr)){
            scheduleItemBg[i].classList.add('bg-danger');
        } else if(scheduleItemTime[i].innerHTML.substr(0,2) < currentHr){
            scheduleItemBg[i].classList.add('bg-light');
        } else {
            scheduleItemBg[i].classList.add('bg-success');
        }
    }

    for(let i = 0; i < scheduleItem.length; i++){
        if(localStorage.getItem(`task${i}`) != null){
            savedTaskText[i].innerHTML = localStorage.getItem(`task${i}`);
            inputtedTask[i].style.display = 'none';
        }
    }
}

var inputtedTask = document.querySelectorAll('#inputTask')
var saveBtns = document.querySelectorAll('#save-btn')
var savedTaskText = document.querySelectorAll('.saved-task')
var actualInput;
function getInput(item){
    actualInput = item.value;
}

for(let i = 0; i < scheduleItem.length; i++){
    saveBtns[i].addEventListener('click', function(){
        localStorage.setItem(`task${i}`, actualInput);
        savedTaskText[i].innerHTML = localStorage.getItem(`task${i}`);
        inputtedTask[i].style.display = 'none';
    })
    scheduleItemBg[i].addEventListener('click', function(){
        inputtedTask[i].style.display = 'block';
    })
}