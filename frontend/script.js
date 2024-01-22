window.onload = ()=>{
  getAllArticle();
  getRandomarticle();
}

async function getAllArticle() {
  const res = await fetch('http://localhost:3000/articles')
  const articles = await res.json();
  const datartikel = articles.data
  console.log(datartikel);
  datartikel.forEach(datartikel => {
    const container = document.getElementById('allArticle')
    const cardArticles = document.createElement('div')
    cardArticles.className = "col p-2 "
    const cardData = `
    <div class="card text-bg-dark">
  <div class="card-body">
    <h5 class="card-title">${datartikel.title}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${datartikel.writer}</h6>
    <p class="card-text overflow-auto">${datartikel.article}</p>
  </div>
</div>
  
  `;
    cardArticles.innerHTML = cardData;
    container.appendChild(cardArticles);
  });
}

async function getRandomarticle() {
  const res = await fetch('http://localhost:3000/articles')
  const articles = await res.json();
  const randomNumber = Math.floor(Math.random() * articles.data.length);
  const artikel = articles.data.find((artikel,index )=> index == randomNumber) ;
  const container = document.getElementById('randomArticle')
    const cardArticles = document.createElement('div')
    cardArticles.className = "col"
    const cardData = `
    <div class="card bg-dark">
    <img class="card-img" src="https://static.animecorner.me/2023/07/F1t07E-aYAAD2F_.jpg" alt="Title" style="opacity: .25;max-height:1000px;"  />
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