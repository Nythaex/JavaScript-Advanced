function vol() {
    return Math.abs(this.x * this.y * this.z);
};
function area() {
    return Math.abs(this.x * this.y);
};
function solve(area, vol, input) {
    
    return JSON.parse(input).map(f=>{
        return {
         area: area.call(f),
         volume: vol.call(f)
        }
    })


}
 
