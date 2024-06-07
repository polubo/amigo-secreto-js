// Função para embaralhar uma array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // Função para sortear e exibir os resultados
  function sortear() {
    const amigos = document.getElementById('lista-amigos').innerText.split('\n').filter(Boolean);
    const sorteio = shuffle([...amigos]);
    const resultado = sorteio.map((amigo, index) => `${amigo} → ${sorteio[(index + 1) % sorteio.length]}`).join('\n');
    document.getElementById('lista-sorteio').innerText = resultado;
  }
  
  // Função para adicionar amigo à lista
  function adicionar() {
    const nomeAmigo = document.getElementById('nome-amigo').value.trim();
    if (nomeAmigo) {
      const listaAmigos = document.getElementById('lista-amigos');
      listaAmigos.innerText += `${nomeAmigo}\n`;
      document.getElementById('nome-amigo').value = '';
    }
  }
  
  // Função para reiniciar
  function reiniciar() {
    document.getElementById('lista-amigos').innerText = '';
    document.getElementById('lista-sorteio').innerText = '';
  }
  