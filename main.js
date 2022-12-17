



'use strict';


function executar() {
    const inicio = performance.now();
    var valor = document.getElementById("function").value;
    const fim = performance.now();
    var size = JSON.stringify(valor).length;
    console.log(size)
    var line = valor.split("\n").length;
    console.log(line)
    
    console.log(`A operação levou ${fim - inicio} milissegundos`);


    try {
        eval(valor)
        return alert(`Sua função está correta, você demorou ${fim - inicio} milissegundos, contém ${valor.length} caracteres, ${line} linhas e ${size} bytes, Parabéns!!` );
    } catch (error) {
        return alert(`Incorreto ${error}, tente novamente!`);
    }
}
