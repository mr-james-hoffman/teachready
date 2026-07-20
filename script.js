const generateBtn = document.getElementById("generateBtn");
const sampleBtn = document.getElementById("sampleBtn");
const copyBtn = document.getElementById("copyBtn");
const output = document.getElementById("output");

function getValue(id) {
  return document.getElementById(id).value.trim();
}

function generateLesson() {
  const year = getValue("year") || "the selected year level";
  const subject = getValue("subject") || "the selected subject";
  const goal = getValue("goal") || "the learning goal";
  const length = getValue("length") || "the available lesson time";
  const prior = getValue("prior") || "the knowledge students already have";
  const context = getValue("context") || "the likely learning challenge";
  const resources = getValue("resources") || "available classroom resources";

  output.innerHTML = `
    <h3>Lesson snapshot</h3>
    <p><strong>${year} ${subject}</strong>. A ${length} lesson that helps students work towards: ${goal}</p>

    <h3>Learning goal</h3>
    <p>${goal}</p>

    <h3>Success criteria</h3>
    <ul>
      <li>I can explain the main idea in my own words.</li>
      <li>I can show my thinking using words, examples or materials.</li>
      <li>I can check my answer and explain how I know.</li>
    </ul>

    <h3>Explicit teaching sequence</h3>
    <ol>
      <li>Start by naming the learning goal and connecting it to what students already know: ${prior}</li>
      <li>Model one clear example. Think aloud so students hear the decision-making process.</li>
      <li>Show a second example and ask students to identify what stayed the same and what changed.</li>
      <li>Pause for a quick check before students practise.</li>
    </ol>

    <h3>Teacher talk prompts</h3>
    <ul>
      <li>"What do we already know that can help us here?"</li>
      <li>"What is the important idea in this example?"</li>
      <li>"How could we prove that?"</li>
      <li>"What mistake might someone make here?"</li>
    </ul>

    <h3>Guided practice</h3>
    <p>Use ${resources}. Work through two examples with students. Ask them to respond on mini whiteboards or in notebooks before sharing answers.</p>

    <h3>Independent practice</h3>
    <p>Students complete three short tasks: one familiar example, one slightly different example and one challenge example that requires explanation.</p>

    <h3>Checks for understanding</h3>
    <ul>
      <li>Ask every student to show an answer at the same time.</li>
      <li>Ask students to explain the reason for their answer, not just give the answer.</li>
      <li>Look for students who are correct but cannot explain why.</li>
    </ul>

    <h3>Likely misconceptions</h3>
    <p>Students may struggle with: ${context}</p>

    <h3>Responsive teaching moves</h3>
    <ul>
      <li>If many students are unsure, return to the modelled example and reduce the difficulty.</li>
      <li>If students can answer but cannot explain, ask them to use a diagram, object or sentence stem.</li>
      <li>If students make the common misconception, show a non-example and ask what makes it incorrect.</li>
    </ul>

    <h3>Support</h3>
    <p>Use fewer examples, concrete materials and sentence stems. Pair students for the first independent task.</p>

    <h3>Extension</h3>
    <p>Ask students to create their own example and explain why it works. Then ask them to create a deliberate mistake for a partner to correct.</p>

    <h3>Exit ticket</h3>
    <p>Give students one final question and ask them to explain their thinking in one or two sentences.</p>
  `;
}

async function copyLesson() {
  const text = output.innerText;
  await navigator.clipboard.writeText(text);
  copyBtn.textContent = "Copied";
  setTimeout(() => {
    copyBtn.textContent = "Copy lesson";
  }, 1500);
}

function loadSampleLesson() {
  document.getElementById("year").value = "Year 4";
  document.getElementById("subject").value = "Mathematics";
  document.getElementById("goal").value =
    "Students recognise and generate equivalent fractions.";
  document.getElementById("length").value = "35 minutes";
  document.getElementById("prior").value =
    "Students know halves, quarters and eighths.";
  document.getElementById("context").value =
    "Some students think a larger denominator means a larger fraction.";
  document.getElementById("resources").value =
    "Mini whiteboards, fraction strips and student notebooks.";

  generateLesson();
}
generateBtn.addEventListener("click", generateLesson);
copyBtn.addEventListener("click", copyLesson);
sampleBtn.addEventListener("click", loadSampleLesson);
