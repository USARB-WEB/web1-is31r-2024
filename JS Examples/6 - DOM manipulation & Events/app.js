document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
})

const clickmeButton = document.getElementById('clickmeButton');

clickmeButton.addEventListener('click', function(){
    alert('You clicked the page');
})

function buttonClicked() {
    alert('You clicked the button');
}

const createInputButton = document.getElementById('createInputButton');
createInputButton.addEventListener('click', function(){
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Enter your name';
    document.body.appendChild(input);
});


const usernameInput = document.getElementById('usernameInput');
const reversedName = document.getElementById('reversedName');

usernameInput.addEventListener('keyup', function(event){
    const username = event.target.value;
    // split "1234" => ["1", "2", "3", "4"]
    // reverse ["4", "3", "2", "1"]
    // join ["4", "3", "2", "1"] => "4321"
    reversedName.innerText = username.split('').reverse().join('');
})

const deleteMeButton = document.getElementById('deleteMeButton');
deleteMeButton.addEventListener('click', function(){
    deleteMeButton.remove();
})


