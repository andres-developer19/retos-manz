let json; // Declaración de la variable fuera del bloque

fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(data => {
    json = data; // Asignación del valor dentro del bloque
    const appDom = document.getElementById("app");
    
    // Crear un contenedor para cada producto
    json.forEach(product => {
      const productContainer = document.createElement("div");
      productContainer.innerHTML = `
        <h2 class="title">${product.title}</h2>
        <img class="imagen" src="${product.image}" alt="${product.title}" width="150">
        <p class="description">${product.description}</p>
        <footer class="foooter">
          <span class="precio">${product.price}</span>
        </footer>
      `;
      appDom.appendChild(productContainer);
    });
  })
  .catch(err => console.log(err));

