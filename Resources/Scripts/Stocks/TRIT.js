﻿$(window).load(function () {

    $('#TRITStockDisplayCost').html('$' + TRITCurrentStockPrice.toFixed(2));
    $('#TRITStockSellPrice').html('$' + (TRITCurrentStockPrice - TRITCurrentStockPrice / sellDivider).toFixed(2));
    $('#TRITOwnedStocksDisplay').html(ownedTRITStocks);
    $('#TRITSellEstimate').html('$' + (ownedTRITStocks * (TRITCurrentStockPrice - (TRITCurrentStockPrice / sellDivider))).toFixed(2));

    $('#btnBuyTRITStocks').click(function () {

        if (money >= TRITCurrentStockPrice) {
            money -= TRITCurrentStockPrice;
            ownedTRITStocks++;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#TRITOwnedStocksDisplay').html(ownedTRITStocks);
            if (ownedTRITStocks > 0)
                $('#TRITSellEstimate').html('$' + (ownedTRITStocks * (TRITCurrentStockPrice - TRITCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#TRITSellEstimate').html('$0');
        }

        return false;
    });
    $('#btnBuyTRITStocks10').click(function () {

        if (money >= TRITCurrentStockPrice * 10) {
            money -= TRITCurrentStockPrice * 10;
            ownedTRITStocks += 10;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#TRITOwnedStocksDisplay').html(ownedTRITStocks);
            if (ownedTRITStocks > 0)
                $('#TRITSellEstimate').html('$' + (ownedTRITStocks * (TRITCurrentStockPrice - TRITCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#TRITSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnBuyTRITStocks100').click(function () {

        if (money >= TRITCurrentStockPrice * 100) {
            money -= TRITCurrentStockPrice * 100;
            ownedTRITStocks += 100;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#TRITOwnedStocksDisplay').html(ownedTRITStocks);
            if (ownedTRITStocks > 0)
                $('#TRITSellEstimate').html('$' + (ownedTRITStocks * (TRITCurrentStockPrice - TRITCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#TRITSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnBuyTRITStocksAll').click(function () {
        var TRITBuyAmt = Math.floor(money / TRITCurrentStockPrice);
        if (TRITBuyAmt >= 1) {
            money -= TRITCurrentStockPrice * TRITBuyAmt;
            ownedTRITStocks += TRITBuyAmt;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#TRITOwnedStocksDisplay').html(ownedTRITStocks);
            if (ownedTRITStocks > 0)
                $('#TRITSellEstimate').html('$' + (ownedTRITStocks * (TRITCurrentStockPrice - TRITCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#TRITSellEstimate').html('$0');
        }
        return false;
    });

    // Always sell amt at 10% lower
    $('#btnSellTRITStocks').click(function () {
        if (ownedTRITStocks > 0) {
            money += TRITCurrentStockPrice - TRITCurrentStockPrice / 10;
            ownedTRITStocks--;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#TRITOwnedStocksDisplay').html(ownedTRITStocks);
            if (ownedTRITStocks > 0)
                $('#TRITSellEstimate').html('$' + (ownedTRITStocks * (TRITCurrentStockPrice - TRITCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#TRITSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellTRITStocks10').click(function () {
        if (ownedTRITStocks > 9) {
            money += (TRITCurrentStockPrice - TRITCurrentStockPrice / 10) * 10;
            ownedTRITStocks -= 10;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#TRITOwnedStocksDisplay').html(ownedTRITStocks);
            if (ownedTRITStocks > 0)
                $('#TRITSellEstimate').html('$' + (ownedTRITStocks * (TRITCurrentStockPrice - TRITCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#TRITSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellTRITStocks100').click(function () {
        if (ownedTRITStocks > 99) {
            money += (TRITCurrentStockPrice - TRITCurrentStockPrice / 10) * 100;
            ownedTRITStocks -= 100;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#TRITOwnedStocksDisplay').html(ownedTRITStocks);
            if (ownedTRITStocks > 0)
                $('#TRITSellEstimate').html('$' + (ownedTRITStocks * (TRITCurrentStockPrice - TRITCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#TRITSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnSellTRITStocksAll').click(function () {
        if (ownedTRITStocks > 0) {
            money += (TRITCurrentStockPrice - TRITCurrentStockPrice / 10) * ownedTRITStocks;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedTRITStocks = 0;
            $('#TRITOwnedStocksDisplay').html(ownedTRITStocks);
            if (ownedTRITStocks > 0)
                $('#TRITSellEstimate').html('$' + (ownedTRITStocks * (TRITCurrentStockPrice - TRITCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#TRITSellEstimate').html('$0');
        }
        return false;
    });
})(jQuery);