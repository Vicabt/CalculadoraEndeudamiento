//Se llama el formulario
document.getElementById('form_capacidad').addEventListener('submit' , function(event){
    event.preventDefault();

    //Se definen las variables para obtener los valores de entrada
    const mesada = parseFloat(document.getElementById('mesada').value);
    const aporte = parseFloat(document.getElementById('aporte').value);
    const descuento = parseFloat(document.getElementById('descuento').value);
    const colchon = parseFloat(document.getElementById('colchon').value);
    
    let total1, total2, capacidadEndeudamiento;

    //Validar los valores
    if(isNaN(mesada) || isNaN(aporte) || isNaN(descuento) || isNaN(colchon)){
        alert('Por favor, ingrese los valores requeridos en todos los campos');
        return;
    }

    //Calcular la capacidad de endeudamiento

    total1 = (mesada - aporte ) / 2;
    total2 = (total1 - descuento);
    capacidadEndeudamiento = total2 - colchon;

   
    //Se da el resultado basado en la informacion ingresada por el usuario
    document.getElementById('resultado').innerHTML = `
        <div class="alert alert-secondary role="alert"">
            <strong>Resultado</strong><br>
            
            Su Capacidad de Endeudamiento es: <span class="badge text-bg-info">$ ${capacidadEndeudamiento.toFixed(0)} </span><br>
            
        </div>
    `;

});

