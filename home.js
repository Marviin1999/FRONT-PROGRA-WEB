document.addEventListener('DOMContentLoaded', () => {
  // Ejemplo para conectar con backend más adelante
 

  function renderProductos(lista) {
    const contenedor = document.getElementById('contenedor-productos');
    contenedor.innerHTML = '';
    lista.forEach(prod => {
      const card = document.createElement('div');
      card.classList.add('col-md-3');
      card.innerHTML = `
        <div class="card h-100 shadow-sm">
          <img src="${prod.imagen}" class="card-img-top" alt="${prod.nombre}">
          <div class="card-body text-center">
            <h5>${prod.nombre}</h5>
            <p>Q${prod.precio}</p>
          </div>
        </div>`;
      contenedor.appendChild(card);
    });
  }
});
