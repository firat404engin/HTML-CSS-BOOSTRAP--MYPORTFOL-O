window.onscroll=function()
{
  if(document.body.scrollTop>0 || document.documentElement.scrollTop>0)
    {
      document.getElementById('navbar').classList.add('scrolled');
    }
    else
    {
      document.getElementById('navbar').classList.remove('scrolled');
    }
}
AOS.init();
document.addEventListener('scroll', function() {
  let scrollPosition = window.scrollY;
  let button = document.getElementById('darkModeToggle');

  // Sayfa kaydırıldığında butonu görünür hale getir
  if (scrollPosition > 100) { // Bu değeri ihtiyacınıza göre ayarlayın
    document.body.classList.add('scrolled');
  } else {
    document.body.classList.remove('scrolled');
  }
});

document.getElementById('darkModeToggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  let isDarkMode = document.body.classList.contains('dark-mode');

  // Buton metnini ve ikonları güncelle
  this.innerHTML = isDarkMode
    ? '<i class="ri-sun-line"></i>'
    : '<i class="ri-moon-line icon"></i>';
});

AOS.init();


// GitHub kullanıcı adı
const username = 'firat404engin'; // GitHub kullanıcı adınızı buraya ekleyin
const apiUrl = `https://api.github.com/users/${username}/starred`;

// GitHub API'den veri çekme
fetch(apiUrl)
  .then(response => response.json())
  .then(starredRepos => {
    // Yıldızladığınız projeleri listeleme
    const repoList = document.getElementById('repo-list');
    starredRepos.forEach(repo => {
      const repoItem = document.createElement('a');
      repoItem.className = 'list-group-item list-group-item-action';
      repoItem.href = repo.html_url;
      repoItem.target = '_blank';
      repoItem.innerText = repo.name;
      repoList.appendChild(repoItem);
    });
  })
  .catch(error => console.error('Error fetching starred repos:', error));


  // stars 
