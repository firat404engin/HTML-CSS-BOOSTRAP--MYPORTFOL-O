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

// github 
  const username = 'firat404engin'; // GitHub kullanıcı adınızı buraya ekleyin
  const apiUrl = `https://api.github.com/users/${username}/repos`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(repos => {
      const repoList = document.getElementById('repo-list');
      repos.forEach(repo => {
        const repoItem = document.createElement('a');
        repoItem.className = 'list-group-item list-group-item-action';
        repoItem.href = repo.html_url;
        repoItem.target = '_blank';
        repoItem.innerText = repo.name;
        repoList.appendChild(repoItem);
      });
    })

  // stars 
