var r = document.querySelector('#b');

var sqs = document.querySelectorAll('td');

function clearBoard() {
    for (var i = 0; i < sqs.length; i++) {
        sqs[i].textContent = '';
    }
}

r.addEventListener('click', clearBoard)

function marker() {
    if (this.textContent === '') {
        this.textContent = 'X';
    } else if (this.textContent === 'X') {
        this.textContent = 'O';
    } else {
        this.textContent = '';
    }
};

for (var i = 0; i < sqs.length; i++) {
    sqs[i].addEventListener('click', marker);
}