console.log("Hola mundo!");
// FRONT END CODE

function showError(err) {
  const body = document.querySelector("body");

  const errDiv = document.createElement("div");
  body.appendChild(errDiv);

  errDiv.innerHTML = "Error loading the data";
  console.log(err);
}

function showStudents(data) {
  const ul = document.querySelector("ul#ulStudents");

  ul.innerHTML = "";
  for (let s of data) {
    const li = document.createElement("li");
    li.innerHTML = s;
    ul.appendChild(li);
  }
}

async function reloadStudents() {
  let data;
  try {
    const res = await fetch("/students");
    data = await res.json();

    console.log("got students", data);
  } catch (err) {
    showError(err);
    return;
  }

  showStudents(data);
}

reloadStudents();
