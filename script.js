// Initialize the score variable to keep track of the user's score
let scoreCount = 0;

// Function to check if the selected answer is correct or incorrect
function checkAnswer(id, answer) {
    // Object containing the correct answers for each question
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

    // Get the paragraph element that will display feedback for the question
    const feedback = document.getElementById(id);
    // Get the paragraph element that displays the current score
    const displayCount = document.getElementById("count");

    // Check if the selected answer matches the correct answer
    if (answer === correctAnswers[id]) {
        feedback.textContent = "Correct!"; // Provide positive feedback
        feedback.style.color = 'green';     // Set text color to green
        scoreCount++;                       // Increment the score
    } else {
        feedback.textContent = "Try again."; // Provide feedback to try again
        feedback.style.color = 'red';        // Set text color to red
    }

    // Update the score display text
    displayCount.textContent = "Score: " + scoreCount;
}

// Function to reset the quiz to its initial state
function resetQuiz() {
    // Select all the paragraph elements that show feedback and clear them
    const feedbacks = document.querySelectorAll('#quiz-container p[id]');
    feedbacks.forEach(feedback => feedback.textContent = "");

    scoreCount = 0; // Reset score count to zero
    const displayCount = document.getElementById("count");
    displayCount.textContent = "Score: " + scoreCount; // Update the display count on reset
}

// Function to handle likes on a simulated social media post
function likePost(element) {
    const like = document.getElementById("like");
    let likesElement = element.nextElementSibling; // Select the element that displays the likes count
    let likesCount = parseInt(likesElement.textContent.split(' ')[0]); // Parse the current likes count
    likesCount++; // Increment the likes count
    likesElement.textContent = likesCount + ' Likes'; // Update the likes count display

    // Conditional to handle the psychological effect of 'like' counts
    if (likesCount > 10) {
        like.textContent = 'Notice how easy it is to get caught up in the numbers?';
        like.style.color = 'red';
    }

    element.classList.add('bounce'); // Add a bounce animation class to the like icon
    setTimeout(() => {
        element.classList.remove('bounce'); // Remove the bounce class after 300ms
    }, 300);
}
