document.addEventListener('DOMContentLoaded', () => {
  // Simulación de conexión al backend (pendiente de API real)

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
            <button class="btn btn-dark w-100">Ver Detalles</button>
          </div>
        </div>`;
      contenedor.appendChild(card);
    });
  }

  // Ejemplo de datos simulados (para pruebas visuales)
  const ejemplo = [
    { nombre: "Balón de Fútbol", precio: 250, imagen: "https://via.placeholder.com/300x200" },
    { nombre: "Tenis Nike", precio: 650, imagen: "https://via.placeholder.com/300x200" },
    { nombre: "Guantes de Box", precio: 300, imagen: "https://via.placeholder.com/300x200" },
    { nombre: "Camiseta Puma", precio: 180, imagen: "https://via.placeholder.com/300x200" }
  ];

  renderProductos(ejemplo);
});
