  document.getElementById('menuToggle').addEventListener('click', function(){
    var links = document.querySelector('.nav-links');
    var open = links.style.display === 'flex';
    links.style.display = open ? 'none' : 'flex';
    links.style.flexDirection = 'column';
    links.style.position = 'absolute';
    links.style.top = '64px';
    links.style.right = '24px';
    links.style.background = '#15191c';
    links.style.border = '1px solid rgba(255,255,255,0.09)';
    links.style.borderRadius = '4px';
    links.style.padding = '16px 22px';
    links.style.gap = '16px';
    links.style.zIndex = '60';
  });
