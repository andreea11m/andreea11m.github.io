function fetchAndDrawImage() {
    // Preluare imaginea din API-ul Dog
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        const imageUrl = data.message;
  
        // Desenați imaginea pe canvas original
        const originalCanvas = document.getElementById('original');
        const originalContext = originalCanvas.getContext('2d');
        const image = new Image();
        image.onload = () => {
          originalContext.drawImage(image, 0, 0);
        };
        image.src = imageUrl;
      });
  }
  
  function mirrorImageHorizontally() {
    const canvas = document.getElementById('mirrored');
    const context = canvas.getContext('2d');
  
    // Clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
  
    // Desenați imaginea originală pe canvas-ul în oglindă
    context.drawImage(document.getElementById('original'), 0, 0);
  
    //Întoarce imaginea pe orizontală
    context.translate(canvas.width, 0);
    context.scale(-1, 1);
  }
  
  function mirrorImageVertically() {
    const canvas = document.getElementById('mirrored');
    const context = canvas.getContext('2d');
  
    // Clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
  
    // Desenați imaginea originală pe canvas-ul în oglindă
    context.drawImage(document.getElementById('original'), 0, 0);
  
    // Întoarce imaginea pe verticală
    context.translate(0, canvas.height);
    context.scale(1, -1);
  }
  