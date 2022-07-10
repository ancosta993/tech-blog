async function signUpFormHandler(event) {
   event.preventDefault();

   // get all the inputs from the fields
   const username = document.querySelector("input[name='username']").value.trim();
   const email = document.querySelector("input[name='email']").value.trim();
   const password = document.querySelector("input[name='password']").value.trim();

   if(username && email && password){
      const response = await fetch('/api/users', {
         method:'POST',
         body:JSON.stringify({
            username,
            email,
            password
         }),
         headers:{
            'Content-Type':'application/json'
         }
      });
      if (response.ok){
         document.location.replace('/');
      } else {
         alert(response.statusText);
      }
   }
   
}

document.querySelector('.signup-form').addEventListener('submit', signUpFormHandler);