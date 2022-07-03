async function addPostFormHandler(event){
   event.preventDefault();

   const post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
   const title = document.querySelector("input[name='blog-title']").value.trim();
   const content = document.querySelector("textarea[name='blog-content']").value.trim();

   if (title && content){
      const response = await fetch('/api/posts', {
         method:"POST",
         body: JSON.stringify({
            title,
            content,
            post_id
         }),
         headers:{'Content-Type':'application/json'}
      })
      if(response.ok){
         window.location.replace('/dashboard');
      } else {
         alert(response.statusText)
      }
   }

}

document.querySelector('.blog-form').addEventListener('submit', addPostFormHandler);