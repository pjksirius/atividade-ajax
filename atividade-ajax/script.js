document.getElementById('fetchData').addEventListener('click', () => {
    const output = document.getElementById('output');
  
    // Fazendo a requisição usando Fetch
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status}`);
        }
        return response.json(); // Converte a resposta em JSON
      })
      .then(data => {
        output.innerHTML = data
          .slice(0, 5) // Exibe os primeiros 5 posts
          .map(post => `<p><strong>${post.title}</strong>: ${post.body}</p>`)
          .join('');
      })
      .catch(error => {
        output.innerHTML = `<p style="color: red;">${error.message}</p>`;
      });
  });
  