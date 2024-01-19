async function getArticle() {
  const res = await fetch('http://localhost:3000/articles')
  const articles = await res.json();
  let datartikel = articles.data
  datartikel.forEach(datartikel => {
    const container = document.getElementById('artikel')
    const cardArticles = document.createElement('div')
    cardArticles.className = "col m-2"
    const cardData = `
      <div class="card">
        <div class="card-body">
        <h5 class="card-title">${datartikel.title}</h5>
        <p class="card-text" id="artikel">${datartikel.article}</p>
      </div>
      </div>
       `;
    cardArticles.innerHTML = cardData;
    container.appendChild(cardArticles);
  });
}

