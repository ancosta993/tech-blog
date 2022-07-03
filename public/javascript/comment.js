async function commentFormHandler(event){
   event.preventDefault();
   
   // const user_id = req.session.user_id;
   const post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
   // get the inputs
   const comment_text = document.querySelector("textarea[name='comment-text']").value.trim();
   if(comment_text){
      const response = await fetch('/api/comments', {
         method:'POST',
         body:JSON.stringify({
            comment_text,
            post_id
         }),
         headers:{'Content-Type':'application/json'}
      })
      if (response.ok){
         document.location.reload();
      } else {
         alert(response.statusText);
      }
   }
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);