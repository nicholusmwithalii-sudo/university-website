let applications = JSON.parse(localStorage.getItem("applications")) || [];

const tableBody = document.querySelector("#applicationsTable tbody");

function loadApplications() {
  if (!tableBody) return;

  tableBody.innerHTML = "";

  applications.forEach((app, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${app.appNo}</td>
      <td>${app.name}</td>
      <td>${app.county}</td>
      <td>${app.status}</td>
      <td>
        <button style="padding:6px 12px; cursor:pointer;" 
                onclick="approveApp(${index})">
          Approve
        </button>
      </td>
    `;

    tableBody.appendChild(row);
  });
}

function approveApp(index) {
  applications[index].status = "APPROVED – Admission Granted";
  localStorage.setItem("applications", JSON.stringify(applications));
  loadApplications();
}

window.onload = loadApplications;