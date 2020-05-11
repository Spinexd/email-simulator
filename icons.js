/*
function createNewMail() { 
    const div = document.createElement('div');
    div.classList.add(icon.className.split(' '));
    }
    

  
  const icons = [
    {
      className: 'fas fa-inbox',
      title: 'This is where the preview goes',
      onClick: createNewMail
    }
  ];

  
  
  icons.forEach(icon => {
    const i = document.createElement('i');
    i.classList.add(icon.className.split(' '));
  
    const span = document.createElement('span');
    span.textContent = icon.title;
  
    const button = document.createElement('button');
    button.append(i, span);
    button.addEventListener('click', icon.onClick);
  
    mails.append(button);

  
  })

 