// 2 versio

document.getElementById("add").addEventListener("click", lisaa)
document.getElementById("del").addEventListener("click", poista)
document.getElementById("sort").addEventListener("click", jarjesta)

let kaverit2 = []

function lisaa(event){
    event.preventDefault()
    let kaveri2 = document.getElementById("kaveri").value

    // Tarkistetaan ettei käyttäjän syöte ole tyhjä
    if (kaveri2.length < 1) {
        return
    }

    // Kaveri listaan, listan päivitetään ja tekstikenttä tyhjäksi
    kaverit2.push(kaveri2)
    paivitaKokoLista()
    document.getElementById("kaveri").value = ""
}


function poista() {
    // Haetaan tekstikentän arvo ja kaverin paikka listasta
    let kaveri2 = document.getElementById("kaveri").value;
    let index = kaverit2.indexOf(kaveri2);

    // Tarkistettaan että indexi löytyi ja poistettaan kaveri listasta.
    if (index !== -1) {
        kaverit2.splice(index, 1);
        paivitaKokoLista();
    }
    document.getElementById("kaveri").value = "";
}

function paivitaKokoLista() {
    let lista = document.getElementById("lista2");

    // Tyhjennetään lista
    lista.innerHTML = ""; 

    // Käydään listan kaverin läpi ja tehdään jokaisesta rivi listaan
    kaverit2.forEach(kaveri => {
        let listaElement = document.createElement("li");
        let listaText = document.createTextNode(kaveri);
        listaElement.appendChild(listaText);
        lista.appendChild(listaElement);
    });
}

function jarjesta(){
    kaverit2.sort()
    paivitaKokoLista()
}