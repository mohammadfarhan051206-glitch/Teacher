const petalLayer = document.getElementById('petal-layer');
  const petalColors = ['#F0A93E', '#E2634A', '#DCE7E2'];
  const petalCount = 16;
  for(let i=0;i<petalCount;i++){
    const p = document.createElement('div');
    p.className='petal';
    const size = 6 + Math.random()*7;
    p.style.width = size+'px';
    p.style.height = (size*0.75)+'px';
    p.style.left = (Math.random()*100)+'%';
    p.style.background = petalColors[i % petalColors.length];
    p.style.borderRadius = '60% 40% 60% 40%';
    const duration = 5 + Math.random()*4;
    const delay = Math.random()*1.2;
    p.style.animationDuration = duration+'s';
    p.style.animationDelay = delay+'s';
    petalLayer.appendChild(p);
  }

  const burstLayer = document.getElementById('burst-layer');
  const burstColors = ['#F0A93E', '#E2634A', '#1F4A44', '#9DBBA0'];
  document.getElementById('celebrateBtn').addEventListener('click', () => {
    for(let i=0;i<40;i++){
      const c = document.createElement('div');
      const size = 5 + Math.random()*8;
      c.style.position='absolute';
      c.style.left = (Math.random()*100)+'%';
      c.style.top = '-20px';
      c.style.width = size+'px';
      c.style.height = size+'px';
      c.style.background = burstColors[i % burstColors.length];
      c.style.borderRadius = Math.random()>0.5 ? '50%' : '2px';
      c.style.opacity = '0.95';
      const fall = 2.5 + Math.random()*2;
      const drift = (Math.random()*2-1)*120;
      c.animate([
        { transform:'translate(0,0) rotate(0deg)', opacity:1 },
        { transform:`translate(${drift}px, 105vh) rotate(${Math.random()*360}deg)`, opacity:0 }
      ], { duration: fall*1000, easing:'ease-in', fill:'forwards' });
      burstLayer.appendChild(c);
      setTimeout(()=>c.remove(), fall*1000+100);
    }
  });

  // scroll reveal for note cards and gallery polaroids
  const notes = document.querySelectorAll('.note, .gallery-row .polaroid');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('in-view'); io.unobserve(e.target); }
    });
  }, { threshold:0.2 });
  notes.forEach(n=>io.observe(n));
