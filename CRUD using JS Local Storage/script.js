const inputKey = document.getElementById("inputKey");
const inputValue = document.getElementById("inputValue");
const btnInsert = document.getElementById("btnInsert");
const lsOutput = document.getElementById("lsOutput");
const btnAllDelete = document.getElementById("btnAllDelete");
const inputDelKey = document.getElementById("inputDelKey");
const btnDelete = document.getElementById("btnDelete");
const inputReadDataKey = document.getElementById("inputReadDataKey");
const btnReadData = document.getElementById("btnReadData");

btnInsert.onclick = function () {
  const key = inputKey.value;
  const value = inputValue.value;

  if (key && value) {
    localStorage.setItem(key, value);
    location.reload();
  } else {
    alert("Must Enter Value");
  }
};

for (i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);

  lsOutput.innerHTML += `
    <hr />
    Key is: ${key} <br /><br />
    Value is: ${value}<br />
    `;
}
if (localStorage.length != 0) {
  document.getElementById("avialRecords").innerHTML += `
    Records available in LocalStorage
    `;
}

btnReadData.onclick = function () {
  const inputReadDataKeyNew = inputReadDataKey.value;
  const readeddData = localStorage.getItem(inputReadDataKeyNew);

  if (inputReadDataKeyNew) {
    readedDataHere.innerHTML += `
        Data Value of requested KEY is: ${readeddData}
        `;
  }
};

btnDelete.onclick = function () {
  const inputDelKeyD = inputDelKey.value;

  if (inputDelKey) {
    localStorage.removeItem(inputDelKeyD);
    location.reload();
  }
};

btnAllDelete.onclick = function () {
  localStorage.clear();
  location.reload();
};
