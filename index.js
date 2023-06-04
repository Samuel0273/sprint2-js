let card = document.getElementById("cards-box");

function datos(event) {
  return `<div class="card bg-primary" style="width: 18rem">
          <img src="${event.image}" class="card-img-top" alt="${event.name}" />
          <div class="card-body">
            <h5 class="card-title">${event.name}</h5>
            <p class="card-text">${event.description}
            </p>
            <p>Price: ${event.price}</p>
            <a href="./assets/html/Details.html" class="btn btn-primary">More Info</a>
          </div>
        </div>`;
}
function cargarDatos(events) {
  let template = "";
  for (let event of events) {
    template += datos(event);
  }
  console.log(template);
  card.innerHTML += template;
}
cargarDatos(data.events);
