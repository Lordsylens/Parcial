document.querySelectorAll('.bloque').forEach(bloque => {
    bloque.addEventListener('click', () => {
      const nuevoElemento = document.createElement('p');
      nuevoElemento.textContent = '¡Nuevo elemento agregado al hacer clic en este bloque!';
      nuevoElemento.classList.add('nuevo-elemento'); 
      document.body.appendChild(nuevoElemento);
    });
  });

  function abrirVentana() {
    
    window.open('autodisciplina.html', '_blank');
  }

  function abrirVentana() {
    
    window.open('resiliencia.html', '_blank');
  }

  function abrirVentana() {
    
    window.open('autoestima.html', '_blank');
  }

  
  
