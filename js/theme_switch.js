function switchTheme() {
    console.log('Switching theme...');
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
  }
  
  document.getElementById('themeSwitchButton').addEventListener('click', switchTheme);
  