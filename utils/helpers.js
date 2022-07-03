module.exports = {
   format_date: date => {
      return `${new Date(data).getMonth +1}/${new Date(data).getDate()}/${new Date(data).getFullYear()}`;
   },
   format_plural: (word, amount)=>{
      if(amount !== 1){
         return `${word}s`;
      } 

      return word;
   }
}