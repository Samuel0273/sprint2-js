let card = document.getElementById("cards-box");

function datos(event) {
  return `<div class="card bg-primary" style="width: 18rem">
          <img src="${event.image}" class="card-img-top" alt="${event.name}" />
          <div class="card-body">
            <h5 class="card-title">${event.name}</h5>
            <p class="card-text">${event.description}
            </p>
            <p>Price: ${event.price}</p>
            <a href="./Details.html" class="btn btn-primary">More Info</a>
          </div>
        </div>`;
}
function cargarDatos(events) {
  let template = "";
  for (let event of events) {
    if (new Date(event.date) < new Date("2023-01-01")) {
      template += datos(event);
    }
  }
  console.log(template);
  card.innerHTML += template;
}
