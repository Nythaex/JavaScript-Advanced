const BOOKS_URL='http://localhost:3030/jsonstore/collections/books';


export async function getBooks(){
    return await (await fetch(BOOKS_URL)).json()
}

export async function postBook(title,author){
    await fetch(BOOKS_URL,{
       method:'post',
       headers:{'Content-type':'application/json'},
       body:JSON.stringify({
           title,
           author
       })
    })

}

export async function putBook(title,author,id){
    await fetch(BOOKS_URL+'/'+id,{
       method:'put',
       headers:{'Content-type':'application/json'},
       body:JSON.stringify({
           _id:id,
           title,
           author
       })
    })
}


export async function deleteBook(id){
    await fetch(BOOKS_URL+'/'+id,{
       method:'delete',
    })

}