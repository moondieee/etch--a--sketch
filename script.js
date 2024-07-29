const container = document.querySelector(".container");
const body = document.querySelector("body");

const question = prompt("Number of squares per side");

container.style = `box-sizing: border-box; width: ${
  Number(question) * 10
}px; display: flex; flex-wrap: wrap; margin: auto; center;  margin-right: auto; margin-left: auto;`;

function createGrid() {
  for (let i = 0; i < Number(question) * Number(question); i++) {
    let div = document.createElement("div");
    div.style =
      "box-sizing: border-box; width: 10px; height: 10px; border: 1px solid black";

    div.addEventListener("mouseover", () => {
      div.style =
        "box-sizing: border-box;width: 10px; height: 10px; border: 1px solid black; background-color: #007AFF";
    });
    container.append(div);
  }
}
createGrid();
