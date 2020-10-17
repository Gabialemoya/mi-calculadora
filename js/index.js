$(document).ready(function(){

    var v1, v2, operacion;

   $('input[name=btn]').click(function(){
        $('#resultado').val($('#resultado').val() + $(this).val());
   });

   $('input[name=ce]').click(function(){
    $('#op').text('');
    $('#resultado').val('');
   });

   $('input[name=c').click(function(){
        var len = $('#resultado').val().length;
        var valor = $('#resultado').val();
        valor = valor.replace(valor.charAt(len - 1), '');
        $('#resultado').val(valor);
   });

   $('input[name=suma]').click(function(){
        if($('#resultado').val() != ''){
            v1 = parseFloat($('#resultado').val());
            $('#resultado').val('');
            operacion = 'suma';
            $('#op').text($(this).val());
        }
        else{
            alert('Ingrese un numero antes');
        }
   });

    $('input[name=resta]').click(function(){
        if($('#resultado').val() != ''){
            v1 = parseFloat($('#resultado').val());
            $('#resultado').val('');
            operacion = 'resta';
            $('#op').text($(this).val());
        }
        else{
            alert('Ingrese un numero antes');
        }
    });
    $('input[name=multiplicacion]').click(function(){
        if($('#resultado').val() != ''){
            v1 = parseFloat($('#resultado').val());
            $('#resultado').val('');
            operacion = 'multiplicacion';
            $('#op').text($(this).val());
        }
        else{
            alert('Ingrese un numero antes');
        }
    });

    $('input[name=division]').click(function(){
        if($('#resultado').val() != ''){
            v1 = parseFloat($('#resultado').val());
            $('#resultado').val('');
            operacion = 'division';
            $('#op').text($(this).val());
        }
        else{
            alert('Ingrese un numero antes');
        }
    });






   $('input[name=igual]').click(function(){
        if($('#resultado').val() != ''){
            v2 = parseFloat($('#resultado').val());
           if(operacion == 'suma'){
            $('#op').text($(this).val());
               $('#resultado').val(v1+v2);
           }
           else if(operacion == 'resta'){
            $('#op').text($(this).val());
            $('#resultado').val(v1-v2);
           }
           else if(operacion == 'multiplicacion'){
            $('#op').text($(this).val());
            $('#resultado').val(v1*v2);
           }
           else if(operacion == 'division'){
               if(v2 != 0){
                $('#op').text($(this).val());
                $('#resultado').val(v1/v2);
               }
               else{
                   alert('Ingrese un numero distinto de cero');
               }
           }
        }
        else{
            alert('Ingrese un numero antes');
        }
   });

});

