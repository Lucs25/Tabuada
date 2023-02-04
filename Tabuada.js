function tabuada() {
    let mul = document.getElementById("txi")
    let res = document.getElementById("res")
    if (mul.value.length == 0)
        window.alert("Favor inserir um número")
    else {
        let mt = (+mul.value)
        let fat = 1
        res.innerHTML = ''
        do {
            let item = document.createElement('option')
            item.text = `${mt}x${fat} = ${mt * fat}`
            res.appendChild(item)
            fat ++
        } while (fat <= 10) {
            }
    }
}
