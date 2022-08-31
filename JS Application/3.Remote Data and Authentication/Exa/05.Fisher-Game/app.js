import {navigate} from './router.js';
import {authenticate} from './authentication.js'

function run(){

    navigate('home')
    const navElemnt=document.querySelector('nav')

    
         navElemnt.addEventListener('click',(e)=>{
            if(e.target.tagName==='A'){

                navigate(e.target.id)


            }


         })


}
run();