function rectamgle(width,height,color){
       return {
            width,
            height,
            color:color.charAt(0).toUpperCase()+color.slice(1),
            calcArea:function (){
                return this.width*this.height;
            }

       }


}