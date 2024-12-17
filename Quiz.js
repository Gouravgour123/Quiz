document.getElementById('startQuiz').addEventListener('click', () => {
    const subject = document.getElementById('subject').value;

    if (subject === 'default') {
        alert('Please select a subject to start the quiz.');
    } else {
        alert(`Starting the quiz for: ${subject}`);
        
    }
});
