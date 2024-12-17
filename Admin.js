let subjects = [];


function addSubject() {
  const subjectName = document.getElementById("subject-name").value;
  if (subjectName) {
    subjects.push(subjectName);
    updateSubjectDropdown();
    alert(`Subject "${subjectName}" added successfully.`);
    document.getElementById("subject-name").value = "";
  } else {
    alert("Please enter a subject name.");
  }
}


function updateSubjectDropdown() {
  const subjectSelect = document.getElementById("subject-select");
  subjectSelect.innerHTML = '<option value="">Choose Subject</option>';
  subjects.forEach((subject) => {
    const option = document.createElement("option");
    option.value = subject;
    option.textContent = subject;
    subjectSelect.appendChild(option);
  });
}

// Add Question
function addQuestion() {
  const subject = document.getElementById("subject-select").value;
  const question = document.getElementById("question").value;
  const option1 = document.getElementById("option1").value;
  const option2 = document.getElementById("option2").value;
  const option3 = document.getElementById("option3").value;
  const option4 = document.getElementById("option4").value;

  if (subject && question && option1 && option2 && option3 && option4) {
    console.log("Question Data", { subject, question, options: [option1, option2, option3, option4] });
    alert("Question added successfully.");
    document.getElementById("question").value = "";
    document.getElementById("option1").value = "";
    document.getElementById("option2").value = "";
    document.getElementById("option3").value = "";
    document.getElementById("option4").value = "";
  } else {
    alert("Please fill all fields.");
  }
}
