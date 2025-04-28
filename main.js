document.getElementById("btnAloita").addEventListener("click", kaveritListaan)

const kaverit = []

function kaveritListaan() {
    if (kaverit.length >= 10) {
        alert("Tähän listaan ei mahdu enempää kuin 10 kaveria")
        return
    }
    for (let i = 0; i < 10; i++) {
        let kaveri = prompt("Anna kaverin nimi");
        if (kaveri.length < 1) {
            alert("Kenttä ei voi olla tyhjä");
            return
        }
        kaverit.push(kaveri)
    }
    tulostaKaverit()
}

function tulostaKaverit() {
    for (let i = 0; i < 10; i++){
        let listaElement = document.createElement("li")
        let listaText = document.createTextNode(kaverit[i])
        listaElement.appendChild(listaText)
        document.getElementById("lista").appendChild(listaElement)
    }
}