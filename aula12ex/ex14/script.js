function carregar() {
    var msg =window.document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    var hora = 14
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.style.backgroundImage = 'linear-gradient(to right, #5e5959, #ffc371)';
        document.body.style.backgroundColor = '#f0e68c';
}else if(hora >= 12 && hora < 18){
    // BOA TARDE!
    img.style.backgroundImage = 'linear-gradient(to right, #ffd700, #ffa500)';
    document.body.style.backgroundColor = '#ff9137';
}else{
    // BOA NOITE!
    img.style.backgroundImage = 'linear-gradient(to right, #1e3c72, #000000, #181b1f)';
    document.body.style.backgroundColor = '#191970';
}

}