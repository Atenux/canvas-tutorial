function draw() {
    const canvas = document.getElementById('tutorial');
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');
      for(var i=0;i<10;i++){
        ctx.fillStyle = 'rgba('+30*i+',0,0,0.5)';
        ctx.fillRect(i*15,i*15,50,50);

        ctx.fillStyle = 'rgba(0,'+30*i+',0,0.5)';
        ctx.fillRect(100-i*15,i*15,50,50);
      }
    }
  }