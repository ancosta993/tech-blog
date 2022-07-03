async function deletePost(){
   const post_id = window.location.toString().split('?')[0].split('/')[
      window.location.toString().split('?')[0].split('/').length - 1
   ];

   const response = await fetch(`/api/posts/${post_id}`, {
      method:'DELETE',
      headers:{'Content-Type':'application/json'}
   })
   if(response.ok){
      window.location.replace('/dashboard');
   } else {
      alert(response.statusText);
   }
}

document.querySelector('.delete-btn').addEventListener('click', deletePost);