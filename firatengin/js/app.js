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

// GitHub kullanıcı adı
const username = 'firat404engin'; // GitHub kullanıcı adınızı buraya ekleyin
const apiUrl = `https://api.github.com/users/${username}/repos`;

// GitHub API'den veri çekme
fetch(apiUrl)
  .then(response => response.json())
  .then(repos => {
    // Son 5 projeyi almak için sıralama ve dilimleme
    const latestRepos = repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).slice(0, 5);

    // Repo listesine ekleme
    const repoList = document.getElementById('repo-list');
    latestRepos.forEach(repo => {
      const repoItem = document.createElement('a');
      repoItem.className = 'list-group-item list-group-item-action';
      repoItem.href = repo.html_url;
      repoItem.target = '_blank';
      repoItem.innerText = repo.name;
      repoList.appendChild(repoItem);
    });
  })
  .catch(error => console.error('Error fetching repos:', error));


  // stars 
