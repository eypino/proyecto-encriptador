function encriptar(){
    if (validar()==true){
        var texto=$("#text").val();
        var encriptado=texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
        $("#text").val("");
        $("#text").attr('placeholder','Ingrese el texto aquí');
        $("#imagenMuñeco").hide();
        $("#tituloEncriptado").hide();
        $("#textoEncriptado").text(encriptado);
        $("#botonCopiar").show();
        $("#textoEncriptado").css({'margin-top':'50%', 'margin-bottom':'20%'});
        
    }
}
    
function desencriptar(){
    var textoD=$("#textoEncriptado").text();
    var encriptado=textoD.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    $("#textoEncriptado").text(encriptado);
    //$("#botonCopiar").hide();
}

function copiar(){
    var textoEncript=$("#textoEncriptado").text();
    navigator.clipboard.writeText(textoEncript);
}
function validar(){
    if ($("#text").val()==""){
        alert("Ingrese un texto para encriptar");
        return false;
        }
    else return true;
}