let products = [];

fetch('products.json')
  .then(response => response.json())
  .then(data => {
    products = data;
    displayProducts(products);
  });

document.getElementById('searchBox').addEventListener('input', function () {
  const query = this.value.toLowerCase();
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(query) ||
    p.color.toLowerCase().includes(query)
  );
  displayProducts(filtered);
});

function displayProducts(items) {
  const container = document.getElementById('productGrid');
  container.innerHTML = '';

  items.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <img src="${p.imageUrl}" alt="${p.name}" />
        <h3>${p.name}</h3>
        <p>${p.color}</p>
        <p>${p.description}</p>
      </div>
    `;
  });
}
