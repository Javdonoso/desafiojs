function calcular() {
    const valor = 80000;
    const cantidad = parseInt(document.querySelector("#cantidad").value);
    const total = valor * cantidad;

    document.querySelector("#totalFinal").textContent = total;
    document.querySelector("#cantidadFinal").textContent = cantidad;

    var color = document.querySelector("#color").value;
    var circle = document.querySelector("#circle");
    circle.style.backgroundColor = color;
}