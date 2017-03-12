  function disableInfo(element)
  {
    if (element.checked)
    {
      // copy email, phone and address from A user //
      $('#emailB').val($('#emailA').val());
      $('#phoneB').val($('#phoneA').val());
      $('#addressB').val($('#addressA').val());
      $('#stateB').val($('#stateA').val());
      $('#cityB').val($('#cityA').val());
      $('#pincodeB').val($('#pincodeA').val());

      $('#emailB').prop('disabled', true);
      $('#phoneB').prop('disabled', true);
      $('#addressB').prop('disabled', true);
      $('#stateB').prop('disabled', true);
      $('#cityB').prop('disabled', true);
      $('#pincodeB').prop('disabled',true);
    }
    else
    {
      $('#emailB').val("");
      $('#phoneB').val("");
      $('#addressB').val("");
      $('#stateB').val("");
      $('#cityB').val("");
      $('#pincodeB').val("");

      $('#emailB').prop('disabled', false);
      $('#phoneB').prop('disabled', false);
      $('#addressB').prop('disabled', false);
      $('#stateB').prop('disabled', false);
      $('#cityB').prop('disabled', false);
      $('#pincodeB').prop('disabled',false);
    }
  }

  function activateButton(element) {
      if(element.checked) {
        $("#buynow").prop('disabled',false);
       }
       else  {
        $("#buynow").prop('disabled',true);
      }
  }


  function updateCity(element, name)
  {
    $(name+' > option').remove();
    var city_names = [["New Delhi"],["Gurugram","Manesar","Rohtak"]];
    var arrLen = city_names[element.value].length;
    var i = 0;
    for(;i < arrLen; i++)
    {
      var op = '<option value="'+i+'">'+city_names[element.value][i]+'</option>';
      $(name).append(op);
    }
  }