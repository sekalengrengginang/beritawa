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
        <img src="https://api.duniagames.co.id/api/content/upload/file/12253577011693236861.jpg" class="card-img-top"/>
        <h5 class="card-title py-2">${datartikel.title}</h5>
        <p class="card-text text-truncate" style="max-width: 350px;" >${datartikel.article}</p>
      </div>
      </div>
       `;
    cardArticles.innerHTML = cardData;
    container.appendChild(cardArticles);
  });
}

