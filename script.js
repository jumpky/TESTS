function Check() {
    let correctAnswers = 0;

    let q1 = document.getElementById('q1');
    let a1 = document.getElementById('a1');
    if (a1.value == '2') {
        q1.style.border = '2px solid green';
        correctAnswers++;
    } else {
        q1.style.border = '2px solid red';
    }

    let q2 = document.getElementById('q2');
    let a2 = document.getElementById('a2');
    if (a2.value == '1') {
        q2.style.border = '2px solid green';
        correctAnswers++;
    } else {
        q2.style.border = '2px solid red';
    }

    let q3 = document.getElementById('q3');
    let a3 = document.getElementById('a3');
    if (a3.value == '3') {
        q3.style.border = '2px solid green';
        correctAnswers++;
    } else {
        q3.style.border = '2px solid red';
    }

    let q4 = document.getElementById('q4');
    let a4 = document.getElementById('a4');
    if (a4.value == '2') {
        q4.style.border = '2px solid green';
        correctAnswers++;
    } else {
        q4.style.border = '2px solid red';
    }

    let q5 = document.getElementById('q5');
    let a5 = document.getElementById('a5');
    if (a5.value == '3') {
        q5.style.border = '2px solid green';
        correctAnswers++;
    } else {
        q5.style.border = '2px solid red';
    }

    alert("Правильных ответов: " + correctAnswers + " из 5");
}