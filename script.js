const generateBtn = document.getElementById("generateBtn");
const sampleBtn = document.getElementById("sampleBtn");
const copyBtn = document.getElementById("copyBtn");
const output = document.getElementById("output");

function getValue(id) {
  return document.getElementById(id).value.trim();
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getLessonDetails() {
  return {
    year: escapeHtml(getValue("year") || "Selected year level"),
    subject: escapeHtml(getValue("subject") || "Selected subject"),
    goal: escapeHtml(getValue("goal") || "Selected learning goal"),
    length: escapeHtml(getValue("length") || "Available lesson time"),
    prior: escapeHtml(
      getValue("prior") || "Students' existing knowledge"
    ),
    context: escapeHtml(
      getValue("context") || "The identified learning challenge"
    ),
    resources: escapeHtml(
      getValue("resources") || "Available classroom resources"
    )
  };
}

function isEquivalentFractionsLesson(details) {
  const searchText = `${details.subject} ${details.goal}`.toLowerCase();

  return (
    searchText.includes("mathematics") &&
    searchText.includes("equivalent fraction")
  );
}

function buildEquivalentFractionsLesson(details) {
  return `
    <h3>Lesson snapshot</h3>
    <p>
      A ${details.length} ${details.year} mathematics lesson in which students
      use fraction strips, diagrams and mathematical reasoning to recognise
      and generate equivalent fractions.
    </p>

    <h3>Learning goal</h3>
    <p>${details.goal}</p>

    <h3>Success criteria</h3>
    <ul>
      <li>I can use a model to show that two fractions represent the same amount.</li>
      <li>I can generate an equivalent fraction by partitioning each part equally.</li>
      <li>I can explain why a larger denominator does not always mean a larger fraction.</li>
    </ul>

    <h3>Explicit teaching sequence</h3>
    <ol>
      <li>
        <strong>Activate prior knowledge, 4 minutes:</strong>
        Show one-half and one-quarter using fraction strips. Ask students which
        is greater and how they know. Confirm that the fractions must refer to
        the same-sized whole.
      </li>
      <li>
        <strong>Model equivalent fractions, 8 minutes:</strong>
        Place a one-half strip above a two-quarters strip. Align the strips so
        students can see that both cover the same length. Record:
        1/2 = 2/4.
      </li>
      <li>
        <strong>Explain the mathematics:</strong>
        Partition each half into two equal parts. The number of equal parts
        doubles, and the number of selected parts also doubles. The amount has
        not changed.
      </li>
      <li>
        <strong>Model a second example:</strong>
        Use strips or a diagram to show that 2/4 = 4/8. Connect this to
        multiplying the numerator and denominator by the same number.
      </li>
      <li>
        <strong>Guided practice, 8 minutes:</strong>
        Build and record the chains 1/2 = 2/4 = 4/8 and 3/4 = 6/8.
      </li>
      <li>
        <strong>Independent practice, 10 minutes:</strong>
        Students represent, complete and explain equivalent fraction pairs.
      </li>
      <li>
        <strong>Exit ticket, 5 minutes:</strong>
        Students solve one equivalence question and correct one misconception.
      </li>
    </ol>

    <h3>Teacher talk prompts</h3>
    <ul>
      <li>“What must stay the same when we compare these fractions?”</li>
      <li>“How can the pieces become smaller without changing the total amount?”</li>
      <li>“What happened to the numerator? What happened to the denominator?”</li>
      <li>“How does the fraction strip prove that these fractions are equal?”</li>
      <li>“Are we changing the amount, or only the way the amount is partitioned?”</li>
    </ul>

    <h3>Guided practice</h3>
    <p>
      Use ${details.resources}. Ask students to place one-half above two-quarters
      and then above four-eighths. Students record the matching symbolic
      statement after proving each equivalence with the materials.
    </p>

    <p>Work through these examples together:</p>

    <ul>
      <li>1/2 = ?/4</li>
      <li>2/4 = ?/8</li>
      <li>3/4 = ?/8</li>
      <li>2/3 = 4/?</li>
    </ul>

    <h3>Independent practice</h3>
    <ol>
      <li>Draw or use materials to show that 1/2 = 2/4.</li>
      <li>Complete: 3/4 = ?/8.</li>
      <li>Decide whether 2/3 = 4/6. Prove your answer.</li>
      <li>Create two fractions equivalent to 1/2.</li>
      <li>Explain why 4/8 is not greater than 1/2.</li>
    </ol>

    <h3>Checks for understanding</h3>
    <ul>
      <li>
        <strong>Quick comparison:</strong>
        Show 1/2 and 1/4. Ask every student to point to the larger fraction and
        explain their choice.
      </li>
      <li>
        <strong>Mini whiteboard check:</strong>
        Ask students to complete 1/2 = ?/8 and show all responses at once.
      </li>
      <li>
        <strong>Hinge question:</strong>
        Which fraction is equivalent to 2/3: 4/6, 3/5, 2/6 or 4/3?
      </li>
      <li>
        <strong>Error analysis:</strong>
        “Mia says 1/8 is greater than 1/4 because 8 is greater than 4.
        Is Mia correct? Use a model to explain.”
      </li>
    </ul>

    <h3>Likely misconceptions</h3>
    <p>
      The identified challenge is: ${details.context}
    </p>

    <p>Look specifically for students who:</p>

    <ul>
      <li>compare denominators as whole numbers</li>
      <li>change only the numerator or only the denominator</li>
      <li>compare fractions that refer to different-sized wholes</li>
      <li>apply a multiplication rule without understanding why the value stays the same</li>
    </ul>

    <h3>Responsive teaching moves</h3>
    <ul>
      <li>
        If students think a larger denominator means a larger fraction, place
        one-quarter and one-eighth strips beneath the same whole. Ask which
        piece is actually larger.
      </li>
      <li>
        If students change only one number, return to the fraction strip.
        Partition every existing part equally and count both the selected parts
        and the total parts again.
      </li>
      <li>
        If students rely only on a rule, ask them to prove the equivalence with
        a diagram before using multiplication.
      </li>
      <li>
        If many students select the wrong hinge-question answer, pause
        independent practice and model 2/3 = 4/6 using equal-sized bars.
      </li>
    </ul>

    <h3>Support</h3>
    <ul>
      <li>Provide pre-cut fraction strips using the same-sized whole.</li>
      <li>Begin with halves, quarters and eighths before moving to thirds and sixths.</li>
      <li>Use the sentence stem: “These fractions are equivalent because…”</li>
      <li>Let students prove each answer with materials before recording symbols.</li>
    </ul>

    <h3>Extension</h3>
    <ul>
      <li>Find three fractions equivalent to 3/4 and explain the pattern.</li>
      <li>Create a false equivalent fraction statement for a partner to correct.</li>
      <li>Decide whether 6/8, 9/12 and 12/16 are all equivalent. Prove the answer.</li>
    </ul>

    <h3>Exit ticket</h3>
    <ol>
      <li>Complete and explain: 3/4 = ?/8.</li>
      <li>
        A student says 1/6 is greater than 1/3 because 6 is greater than 3.
        Explain the mistake using words or a diagram.
      </li>
    </ol>
  `;
}

function buildGeneralLesson(details) {
  return `
    <h3>Lesson snapshot</h3>
    <p>
      A ${details.length} ${details.year} ${details.subject} lesson focused on:
      ${details.goal}
    </p>

    <h3>Learning goal</h3>
    <p>${details.goal}</p>

    <h3>Success criteria</h3>
    <ul>
      <li>I can explain the main idea in my own words.</li>
      <li>I can apply the learning in an example.</li>
      <li>I can explain how I know my response is correct.</li>
    </ul>

    <h3>Explicit teaching sequence</h3>
    <ol>
      <li>Connect the learning goal to what students already know: ${details.prior}</li>
      <li>Model one clear example and explain each decision aloud.</li>
      <li>Compare an example and a non-example.</li>
      <li>Check every student's understanding before guided practice.</li>
      <li>Move from guided practice to independent application.</li>
    </ol>

    <h3>Teacher talk prompts</h3>
    <ul>
      <li>“What do we already know that will help us?”</li>
      <li>“What is the most important idea in this example?”</li>
      <li>“How can we prove or check that?”</li>
      <li>“What mistake might someone make?”</li>
    </ul>

    <h3>Guided practice</h3>
    <p>
      Use ${details.resources}. Work through two examples with students before
      asking them to explain the process to a partner.
    </p>

    <h3>Independent practice</h3>
    <p>
      Give students one familiar example, one varied example and one task that
      requires an explanation.
    </p>

    <h3>Checks for understanding</h3>
    <ul>
      <li>Ask all students to respond at the same time.</li>
      <li>Ask students to explain why, not only give an answer.</li>
      <li>Use one carefully chosen question to decide whether to move on or reteach.</li>
    </ul>

    <h3>Likely misconceptions</h3>
    <p>${details.context}</p>

    <h3>Responsive teaching moves</h3>
    <ul>
      <li>Return to the modelled example and reduce the difficulty.</li>
      <li>Use a visual representation or concrete material.</li>
      <li>Compare a correct example with a deliberate mistake.</li>
      <li>Ask students to explain the difference.</li>
    </ul>

    <h3>Support</h3>
    <p>
      Reduce the number of steps, provide a worked example and use a sentence
      stem to support explanation.
    </p>

    <h3>Extension</h3>
    <p>
      Ask students to create their own example, justify it and identify a
      possible misconception.
    </p>

    <h3>Exit ticket</h3>
    <p>
      Give students one final application question and ask them to explain
      their reasoning in one or two sentences.
    </p>
  `;
}

function generateLesson() {
  const details = getLessonDetails();

  if (isEquivalentFractionsLesson(details)) {
    output.innerHTML = buildEquivalentFractionsLesson(details);
  } else {
    output.innerHTML = buildGeneralLesson(details);
  }

  output.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
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

function copyUsingSelection() {
  const range = document.createRange();
  range.selectNodeContents(output);

  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);

  const copied = document.execCommand("copy");
  selection.removeAllRanges();

  return copied;
}

async function copyLesson() {
  const html = `<div>${output.innerHTML}</div>`;
  const plainText = output.innerText;

  try {
    if (navigator.clipboard?.write && window.ClipboardItem) {
      const clipboardItem = new ClipboardItem({
        "text/html": new Blob([html], {
          type: "text/html"
        }),
        "text/plain": new Blob([plainText], {
          type: "text/plain"
        })
      });

      await navigator.clipboard.write([clipboardItem]);
    } else {
      const copied = copyUsingSelection();

      if (!copied) {
        throw new Error("Copy was not supported.");
      }
    }

    copyBtn.textContent = "Copied with formatting";

    setTimeout(() => {
      copyBtn.textContent = "Copy lesson";
    }, 1800);
  } catch (error) {
    const copied = copyUsingSelection();

    if (copied) {
      copyBtn.textContent = "Copied";

      setTimeout(() => {
        copyBtn.textContent = "Copy lesson";
      }, 1800);
    } else {
      alert("Copy was not available. Select the lesson and copy it manually.");
    }
  }
}

generateBtn.addEventListener("click", generateLesson);
copyBtn.addEventListener("click", copyLesson);

if (sampleBtn) {
  sampleBtn.addEventListener("click", loadSampleLesson);
}
