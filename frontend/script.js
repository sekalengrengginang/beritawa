const apiUrl = 'http://localhost:3000/articles';

window.onload = () => {
  getAllArticle();
  getRandomarticle();
}

async function getApidata() {
  try {
    const res = await fetch(apiUrl)
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

async function getAllArticle() {
  const articles = await getApidata();
  articles.data.forEach(datartikel => {
    const container = document.getElementById('allArticle')
    const cardArticles = document.createElement('div')
    cardArticles.className = "col p-2 "
    const cardData = `
    <div class="card"style="max-width:600px;">
    <div class="card-body">
    <img class="card-img" src="https://static.animecorner.me/2023/07/F1t07E-aYAAD2F_.jpg" alt="Title" style="object-fit:cover;"  />
    <h5 class="card-title">${datartikel.title}</h5>
    <h6 class="card-subtitle ">${datartikel.writer}</h6>
  </div>
</div>
  `;
    cardArticles.innerHTML = cardData;
    container.appendChild(cardArticles);
  });
}

async function getRandomarticle() {
  const articles = await getApidata();
  const randomNumber = Math.floor(Math.random() * articles.data.length);
  const artikel = articles.data.find((artikel, index) => index == randomNumber);
  const container = document.getElementById('randomArticle')
  const cardArticles = document.createElement('div')
  cardArticles.className = "col"
  const cardData = `
    <div class="card bg-dark">
    <img class="card-img" src="https://static.animecorner.me/2023/07/F1t07E-aYAAD2F_.jpg" alt="Title" style="opacity: .25;max-height:400px;object-fit:cover;"  />
    <div class="card-img-overlay ">
      <h1 class="card-title text-white">${artikel.title}</h1>
      <h3 class="card-title text-white">Penulis: ${artikel.writer}</h3>
      <h2 class="card-text text-white text-truncate">${artikel.article}</h2>
    </div>
  </div>
  `;
  cardArticles.innerHTML = cardData;
  container.appendChild(cardArticles);
}