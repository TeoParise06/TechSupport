function buscar() {
    let input = document.getElementById("searchInput").value.toLowerCase();

    document.querySelectorAll(".card").forEach(element => {
        element.style.display = "none"
    })

    if (input == "polvo") {
        document.getElementById("muchopolvo").style.display = "grid"
    } else if (input == "temperatura") {
        document.getElementById("altastempraturas").style.display = "grid"
    } else if (input == "armar" || input == "componentes") {
        document.getElementById("armadisimo").style.dispay = "grid"
    } else if (input == "lento") {
        document.getElementById("lentaso").style.dispay = "grid"
    } else if (input == "fallo") {
        document.getElementById("fallaenelcompo").style.display = "grid"
    } else if (input == "software") {
        document.getElementById("softyware").style.display = "grid"
    } else if (input == "hardware") {
        document.getElementById("duroware").style.display = "grid"
    }
}

