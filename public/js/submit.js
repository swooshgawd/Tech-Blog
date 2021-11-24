const newFormHandler = async function(event) {
    event.preventDefault();
  
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;
  
    await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        content,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    document.location.replace('/');
  };
  
  document
    .querySelector('#submit')
    .addEventListener('click', newFormHandler);