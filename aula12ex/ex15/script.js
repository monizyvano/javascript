function verificar(){
    var data =new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('div')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //Criança
                img.innerHTML = '<img src="foto-bebe-m.png" alt="Foto de um bebê">'
            }else if (idade < 21){
                //Jovem
                img.innerHTML = '<img src="foto-jovem-m.png" alt="Foto de um jovem">'
            }else if (idade < 50){
                //Adulto
                img.innerHTML = '<img src="foto-adulto-m.png" alt="Foto de um adulto">'
            }else{
                //Idoso
                img.innerHTML = '<img src="foto-idoso-m.png" alt="Foto de um idoso">'
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //Criança
                img.innerHTML = '<img src="foto-bebe-f.png" alt="Foto de uma bebê">'
            }else if (idade < 21){
                //Jovem
                img.innerHTML = '<img src="foto-jovem-f.png" alt="Foto de uma jovem">'
            }else if (idade < 50){
                //Adulto
                img.innerHTML = '<img src="foto-adulto-f.png" alt="Foto de uma adulta">'
            }else{
                //Idoso
                img.innerHTML = '<img src="foto-idoso-f.png" alt="Foto de uma idosa">'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}