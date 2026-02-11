const dropZone = document.getElementById("drop-zone");
const fileInput = document.getElementById("fileInput");
const browseBtn = document.getElementById("browseBtn");
const progressBar = document.getElementById("progressBar");
const previewTable = document.getElementById("previewTable");
const runBtn = document.getElementById("runModelBtn");
const spinner = document.querySelector(".spinner");
const resultsDiv = document.getElementById("results");

let uploadedFile = null;

/* ================= FILE VALIDATION ================= */
function validateFile(file) {
    if (!file.name.endsWith(".csv")) {
        alert("Only CSV files allowed.");
        return false;
    }
    return true;
}

/* ================= FILE PREVIEW ================= */
function previewCSV(file) {
    const reader = new FileReader();

    reader.onload = function (e) {
        const text = e.target.result;
        const rows = text.split("\n").slice(0, 10);
        const headers = rows[0].split(",");

        previewTable.querySelector("thead").innerHTML =
            "<tr>" + headers.map(h => `<th>${h}</th>`).join("") + "</tr>";

        const bodyRows = rows.slice(1).map(row => {
            const cols = row.split(",");
            return "<tr>" + cols.map(c => `<td>${c}</td>`).join("") + "</tr>";
        });

        previewTable.querySelector("tbody").innerHTML = bodyRows.join("");
    };

    reader.readAsText(file);
}

/* ================= DRAG EVENTS ================= */
dropZone.addEventListener("dragover", e => {
    e.preventDefault();
    dropZone.classList.add("dragover");
});

dropZone.addEventListener("dragleave", () => {
    dropZone.classList.remove("dragover");
});

dropZone.addEventListener("drop", e => {
    e.preventDefault();
    dropZone.classList.remove("dragover");
    const file = e.dataTransfer.files[0];

    if (validateFile(file)) {
        uploadedFile = file;
        previewCSV(file);
        runBtn.disabled = false;
        progressBar.style.width = "100%";
    }
});

/* ================= BROWSE BUTTON ================= */
browseBtn.onclick = () => fileInput.click();

fileInput.addEventListener("change", e => {
    const file = e.target.files[0];
    if (validateFile(file)) {
        uploadedFile = file;
        previewCSV(file);
        runBtn.disabled = false;
        progressBar.style.width = "100%";
    }
});

/* ================= ML INTEGRATION ================= */
/*
This function sends the CSV file to the Python backend.
Expected backend:
POST /run-model
Returns JSON:
{
    "accuracy": 0.98,
    "report": {...}
}
*/

runBtn.addEventListener("click", async () => {

    if (!uploadedFile) return;

    spinner.classList.remove("hidden");
    runBtn.disabled = true;

    const formData = new FormData();
    formData.append("file", uploadedFile);

    try {
        const response = await fetch("http://localhost:5000/run-model", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        displayResults(data);

    } catch (error) {
        alert("Error connecting to backend.");
    }

    spinner.classList.add("hidden");
    runBtn.disabled = false;
});

/* ================= DISPLAY RESULTS ================= */

function displayResults(data) {
    resultsDiv.innerHTML = "";

    const accuracyCard = `
        <div class="result-card">
            <h3>Accuracy</h3>
            <p>${(data.accuracy * 100).toFixed(2)}%</p>
        </div>
    `;

    resultsDiv.innerHTML += accuracyCard;
}
