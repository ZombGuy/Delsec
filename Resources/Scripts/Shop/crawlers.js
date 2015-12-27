$(window).load(function () {

    setInterval(function () {      
        $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");

        if (threeBitBank > 0) {
            // I am using Math.round as opposed to .toFixed for the increment as I need the actual value to be rounded to 2 decimals instead of just 
            // displaying the float as 2 decimals. .toFixed doesn't change the actual value of increment, so there were display and code inconsistencies.
            // i.e the money would increment by .03 but display .04.
            // The 100 * is because Math.round returns to the nearest whole number. then divide that by 100 to get the 2 decimal place actual number.                   
            autoIncrement = Math.round(100 * Math.random() / 25) / 100; // 0.08 max every 4s tick
            $('#threeBitIncrementAmtDisplay').html('+ $' + (autoIncrement * threeBitBank).toFixed(2));
            $('#threeBitIncrementAmtDisplay').show(1);
            $('#threeBitIncrementAmtDisplay').delay(1000);
            $('#threeBitIncrementAmtDisplay').hide(500);
        }

        if (fourBitBank > 0) {          
            autoIncrement2s = Math.round(100 * Math.random() / 12.5) / 100; // 0.08 max every 2s tick                                        
            $('#fourBitIncrementAmtDisplay').html('+ $' + (autoIncrement2s * fourBitBank).toFixed(2));
            $('#fourBitIncrementAmtDisplay').show(1);
            $('#fourBitIncrementAmtDisplay').delay(1000);
            $('#fourBitIncrementAmtDisplay').hide(500);
        }

        if (sixBitBank > 0) {
            autoIncrement6Bit = Math.round(100 * Math.random() / 3.125) / 100; // 0.32 max every 2s tick
            $('#sixBitIncrementAmtDisplay').html('+ $' + (autoIncrement6Bit * sixBitBank).toFixed(2));
            $('#sixBitIncrementAmtDisplay').show(1);        
            $('#sixBitIncrementAmtDisplay').delay(1000);
            $('#sixBitIncrementAmtDisplay').hide(500);
        }

        if (russianSixBitBank > 0) {
            autoIncrementRussian6Bit = Math.round(100 * (Math.random() ) / 3.125) / 100 + 0.01; // 0.01 - 0.33 max every 2s tick
            $('#russianSixBitIncrementAmtDisplay').html('+ $' + (autoIncrementRussian6Bit * russianSixBitBank).toFixed(2));
            $('#russianSixBitIncrementAmtDisplay').show(1);
            $('#russianSixBitIncrementAmtDisplay').delay(1000);
            $('#russianSixBitIncrementAmtDisplay').hide(500);
        }

        if (eightBitBank > 0) {
            autoIncrement8Bit = Math.round(100 * Math.random() * 1.28) / 100; // 1.28 max every 2s tick
            $('#eightBitIncrementAmtDisplay').html('+ $' + (autoIncrement8Bit * eightBitBank).toFixed(2));
            $('#eightBitIncrementAmtDisplay').show(1);
            $('#eightBitIncrementAmtDisplay').delay(1000);
            $('#eightBitIncrementAmtDisplay').hide(500);
        }

        if (twelveBitBank > 0) {
            autoIncrement12Bit = Math.round(100 * Math.random() * 20.48) / 100; // 20.48 max every 2s tick
            $('#twelveBitIncrementAmtDisplay').html('+ $' + (autoIncrement12Bit * twelveBitBank).toFixed(2));
            $('#twelveBitIncrementAmtDisplay').show(1);
            $('#twelveBitIncrementAmtDisplay').delay(1000);
            $('#twelveBitIncrementAmtDisplay').hide(500);
        }

        if (sixteenBitBank > 0) {
            autoIncrement16Bit = Math.round(100 * Math.random() * 327.68) / 100; // 327.68 max every 2s tick
            $('#sixteenBitIncrementAmtDisplay').html('+ $' + (autoIncrement16Bit * sixteenBitBank).toFixed(2));
            $('#sixteenBitIncrementAmtDisplay').show(1);
            $('#sixteenBitIncrementAmtDisplay').delay(1000);
            $('#sixteenBitIncrementAmtDisplay').hide(500);
        }
        if (userClass == "Wizard") {
            wizardPassive = 0.1 * (autoIncrement * threeBitBank + autoIncrement2s * fourBitBank + autoIncrement6Bit * sixBitBank + autoIncrementRussian6Bit * russianSixBitBank + autoIncrement8Bit
            * eightBitBank + autoIncrement12Bit * twelveBitBank + autoIncrement16Bit * sixteenBitBank);
        }
        $('#autoWizardGenerateAmt').html("Autogenerated Additional: $" + wizardPassive.toFixed(2));

        money += autoIncrement * threeBitBank + autoIncrement2s * fourBitBank + autoIncrement6Bit * sixBitBank + autoIncrementRussian6Bit * russianSixBitBank + autoIncrement8Bit
            * eightBitBank + autoIncrement12Bit * twelveBitBank + autoIncrement16Bit * sixteenBitBank + wizardPassive;
        $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    }, 4000);

})(jQuery);