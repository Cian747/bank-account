// business logic
function Bank(first,last,balances){
    this.firstName = first;
    this.lastName = last;
    this.balances = balances;
  };
  

// UI
$(document).ready(function(){
    $("form#account").submit(function(){
        event.preventDefault();
        var inputFirstName = $("input#f-name").val(),
            inputSecondName = $("input#l-name").val(),
            intialAmount = $('input#initial-amount').val(),
            newAccount = new Bank(inputFirstName,inputSecondName,intialAmount);


            var balances = intialAmount;
            $('.show-it').append("<span class = 'reg'>" + newAccount.balances + "</span>");
        
        $("#with").last().click(function(){
             balances = parseInt(balances - $('input#withdraw').val()); 

            $('.show-it').text(balances);
        });
        $("#depo").click(function(){
             balances = parseInt(balances) + parseInt($('input#deposit').val()); 

                console.log(balances);

            $('.show-it').text(balances);
        });
    });
});