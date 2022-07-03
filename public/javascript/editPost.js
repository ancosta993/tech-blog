async function editPostFormHandler(event){
   event.preventDefault();

   const title = document.querySelector("input[name='title']").value.trim();
   const content = document.querySelector("textarea[name='blog-content']").value.trim();
   const post_id = window.location.toString().split('?')[0].split('/')[
      window.location.toString().split('?')[0].split('/').length - 1
   ];

   if (title && content){
      const response = await fetch(`/api/posts/${post_id}`, {
         method:'PUT',
         body:JSON.stringify({
            title,
            content
         }),
         headers:{'Content-Type': 'application/json'}
      })
      if(response.ok){
         window.location.replace('/dashboard');
      } else {
         alert(response.statusText);
      }
   }
   
};

document.querySelector('.edit-post-form').addEventListener('submit', editPostFormHandler)