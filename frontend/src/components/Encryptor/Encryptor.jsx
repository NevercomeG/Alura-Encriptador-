import "./style.css"



function Encryptor() {

    

function Encriptar(){

    var texto = document.querySelector("#input-texto").value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector(".text-input-salida").value = textoCifrado;
    document.querySelector("#input-texto").value;
    var encriptar
    var boton1 = document.querySelector("#btn-encriptar"); boton1.onclick = encriptar;
}

function desencriptar (){ 
        var texto = document.querySelector("#input-texto").value; 
        var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
        document.querySelector(".text-input-salida").value = textoCifrado; 
        document.querySelector("#input-texto").value;
        var boton2 = document.querySelector("#btn-desencriptar"); boton2.onclick = desencriptar;
}

    return (
        <section id ="main">
            <div className="Encryptor">

                <form action="">
                <p><label for="w3review">Encriptar</label></p>
                <textarea id="w3review" name="w3review" rows="20" cols="70">Encriptar</textarea>
                <input type="submit" value="Submit"/>
                </form>
                </div>
            <div className="Encryptor2">

                
            <form action="">
                <p><label for="w3review">Desencriptar</label></p>
                <textarea id="w3review" name="w3review" rows="20" cols="70">Desencriptar</textarea>
                <input type="submit" value="Submit"/>
                </form>

            </div>

        </section>
    )
}


export default Encryptor; 

