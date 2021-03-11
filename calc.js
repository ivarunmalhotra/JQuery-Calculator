$(document).ready(function(){
    var displayValue = '0';   
    $('#result').text(displayValue);

    $('.key').each(function(index, key){       
        $(this).click(function(e){
            if(displayValue == '0') displayValue = '';
            if($(this).text() == 'C')
            {
                displayValue = '0';
                $('#result').text(displayValue);
            }
            else if($(this).text() == 'sin')
            {
                displayValue = Math.sin(displayValue * Math.PI / 180);
                $('#result').text(displayValue);
            }
            else if($(this).text() == 'cos')
            {
                displayValue = Math.cos(displayValue * Math.PI / 180);
                $('#result').text(displayValue);
            }
            else if($(this).text() == 'tan')
            {
                displayValue = Math.tan(displayValue * Math.PI / 180);
                $('#result').text(displayValue);
            }
            else if($(this).text() == 'log')
            {
                displayValue = Math.log(displayValue)/2.3;
                $('#result').text(displayValue);
            }
            else if($(this).text() == 'π')
            {
                if(displayValue == 0)
                {
                    displayValue=1;
                }
                displayValue = displayValue*3.14;
                $('#result').text(displayValue);
            }
            else if($(this).text() == '=')
            {
                try
                {
                    displayValue = eval(displayValue);
                    $('#result').text(displayValue);
                    displayValue = '0';
                }
                catch (e)
                {
                    displayValue = '0';
                    $('#result').text('ERROR');
                }               
            }
            else
            {
                displayValue += $(this).text();
                $('#result').text(displayValue);
            }
            e.preventDefault()
        })
    })
})