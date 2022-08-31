function sumTable() {
        let prices=document.querySelectorAll('table tr td:nth-child(2)')
        let sum=0;
        for (const num of prices) {
            sum+=Number(num.textContent)
        }
        console.log(sum);
        document.getElementById('sum').textContent=sum;
}