function validate() {

    let regex = RegExp('^[a-z]+@[a-z]+[.[a-z]+$')

    let emailInputElement = document.getElementById('email');
    emailInputElement.addEventListener('change',function(e){
         if(regex.exec(e.currentTarget.value)){
            e.currentTarget.setAttribute('class','')
         }else{
             
            e.currentTarget.setAttribute('class','error')
         }

    })

}