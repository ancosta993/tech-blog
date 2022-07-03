async function commentFormHandler(event){
   event.preventDefault();
   
   // const user_id = req.session.user_id;
   const post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
   // get the inputs
   const comment_text = document.querySelector("textarea[name='comment-text']").value.trim();
   alert(post_id);
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);