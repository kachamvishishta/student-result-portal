function checkResult() {
  const name = document.getElementById('studentName').value;
  const marks = document.getElementById('marks').value;
  const resultBox = document.getElementById('result');

  if (name === "" || marks === "") {
    resultBox.textContent = "Please enter all fields.";
    return;
  }

  let grade = '';
  if (marks >= 90) grade = 'A+';
  else if (marks >= 75) grade = 'A';
  else if (marks >= 60) grade = 'B';
  else if (marks >= 50) grade = 'C';
  else grade = 'Fail';

  resultBox.textContent = `${name} scored ${marks} marks. Grade: ${grade}`;
}
