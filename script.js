let scoreCount = 0;
function checkAnswer(id, answer) {
    const correctAnswers = {
        q1: 'b',
        q2: 'b',
        q3: 'b',
        q4: 'a',
        q5: 'b',
        q6: 'a',
        q7: 'b',
        q8: 'c',
        q9: 'a',
        q10: 'b'
    };
    const feedback = document.getElementById(id);
    const displayCount = document.getElementById("count");
    if (answer === correctAnswers[id]) {
        feedback.textContent = "Correct!";
        feedback.style.color = 'green';
        scoreCount++;
        displayCount.innerHTML = scoreCount;
    } else {
        feedback.textContent = "Try again.";
        feedback.style.color = 'red';
    }
}

function resetQuiz() {
    const feedbacks = document.querySelectorAll('#quiz-container p[id]');
    feedbacks.forEach(feedback => feedback.textContent = "");
    const displayCount = document.getElementById("count");
    count = 0;
    displayCount.textContent = count;
}
console.log(checkAnswer);
console.log(scoreCount);

function likePost(element) {
    const like = document.getElementById("like");
    let likesElement = element.nextElementSibling;
    let likesCount = parseInt(likesElement.textContent.split(' ')[0]);
    likesCount++;
    likesElement.textContent = likesCount + ' Likes';
    if (likesCount > 10) {
        like.textContent = 'Notice how easy it is to get caught up in the numbers?';
        like.style.color = 'red';
    }
    // Add the bounce class
    element.classList.add('bounce');

    // Remove the bounce class after the animation completes
    setTimeout(() => {
        element.classList.remove('bounce');
    }, 300); // Match the duration of the CSS animation
}

