let heroes = [
    {firstName: "Ahsoka", lastName: "Tano", job: "padawan", pic: "https://upload.wikimedia.org/wikipedia/en/d/d7/Ahsoka_Tano.png"},
    {firstName: "Boba", lastName: "Fett", job: "fejvadász", pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Boba_Fett_-_A_Fett_to_Remember_%28cropped%29.jpg/640px-Boba_Fett_-_A_Fett_to_Remember_%28cropped%29.jpg"},
    {firstName: "Han", lastName: "Solo", job: "csempész", pic: "https://upload.wikimedia.org/wikipedia/en/b/be/Han_Solo_depicted_in_promotional_image_for_Star_Wars_%281977%29.jpg"},
    {firstName: "Leia", lastName: "Organa", job: "szenátor", pic: "https://upload.wikimedia.org/wikipedia/pt/thumb/e/e9/Carrie_Fisher_como_Princesa_Leia.jpg/260px-Carrie_Fisher_como_Princesa_Leia.jpg"} ]



grid = document.getElementById("grid");

function writeGrid(obj)
{
    for (const [key, value] of Object.entries(obj)) {
        grid.innerHTML += `<div>${value.firstName} ${value.lastName}<br>${value.job}<br><img src="${value.pic}" width="100px" height="100px"></div>`;
      }    
}

heroes.push({firstName:"Nuh", lastName:"Uh", job: "erős", pic: "https://static.wikia.nocookie.net/joke-battles/images/d/df/Gigachad.png/revision/latest?cb=20230812064835"});
    heroes.push({firstName:"Yoda", lastName:"", job: "yoda", pic: "https://static.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png/revision/latest?cb=20150206140125"});
writeGrid(heroes);