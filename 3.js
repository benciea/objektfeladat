let fizetes = {
    Anna : 2100,
    Cecil : 1890,
    Emil : 2050,
    Gerald : 2920
    }

let osszfiz = 0;
function fizetesekOsszeadas(obj){
for(const [key, value] of Object.entries(obj)){
    console.log(`${key}: ${value}`)
    osszfiz += value;
    }
}

fizetesekOsszeadas(fizetes);
console.log(`Összfizetés: ${osszfiz}`);
