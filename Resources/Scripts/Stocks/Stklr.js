﻿$(window).load(function () {

    $('#stklrStockDisplayCost').html('$' + stklrCurrentStockPrice.toFixed(2));
    $('#stklrStockSellPrice').html('$' + (stklrCurrentStockPrice - stklrCurrentStockPrice / sellDivider).toFixed(2));
    $('#stklrOwnedStocksDisplay').html(ownedStklrStocks);
    $('#stklrSellEstimate').html('$' + (ownedStklrStocks * (stklrCurrentStockPrice - (stklrCurrentStockPrice / sellDivider))).toFixed(2));

    $('#btnBuyStklrStocks').click(function () {

        if (money >= stklrCurrentStockPrice) {
            money -= stklrCurrentStockPrice;
            ownedStklrStocks++;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#stklrOwnedStocksDisplay').html(ownedStklrStocks);
            if (ownedStklrStocks > 0)
                $('#stklrSellEstimate').html('$' + (ownedStklrStocks * (stklrCurrentStockPrice - stklrCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#stklrSellEstimate').html('$0');
        }

        return false;
    });
    $('#btnBuyStklrStocks10').click(function () {

        if (money >= stklrCurrentStockPrice * 10) {
            money -= stklrCurrentStockPrice * 10;
            ownedStklrStocks += 10;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#stklrOwnedStocksDisplay').html(ownedStklrStocks);
            if (ownedStklrStocks > 0)
                $('#stklrSellEstimate').html('$' + (ownedStklrStocks * (stklrCurrentStockPrice - stklrCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#stklrSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnBuyStklrStocks100').click(function () {

        if (money >= stklrCurrentStockPrice * 100) {
            money -= stklrCurrentStockPrice * 100;
            ownedStklrStocks += 100;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#stklrOwnedStocksDisplay').html(ownedStklrStocks);
            if (ownedStklrStocks > 0)
                $('#stklrSellEstimate').html('$' + (ownedStklrStocks * (stklrCurrentStockPrice - stklrCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#stklrSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnBuyStklrStocksAll').click(function () {
        var stklrBuyAmt = Math.floor(money / stklrCurrentStockPrice);
        if (stklrBuyAmt >= 1) {
            money -= stklrCurrentStockPrice * stklrBuyAmt;
            ownedStklrStocks += stklrBuyAmt;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#stklrOwnedStocksDisplay').html(ownedStklrStocks);
            if (ownedStklrStocks > 0)
                $('#stklrSellEstimate').html('$' + (ownedStklrStocks * (stklrCurrentStockPrice - stklrCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#stklrSellEstimate').html('$0');
        }
        return false;
    });

    // Always sell amt at 10% lower
    $('#btnSellStklrStocks').click(function () {
        if (ownedStklrStocks > 0) {
            money += stklrCurrentStockPrice - stklrCurrentStockPrice / 10;
            ownedStklrStocks--;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#stklrOwnedStocksDisplay').html(ownedStklrStocks);
            if (ownedStklrStocks > 0)
                $('#stklrSellEstimate').html('$' + (ownedStklrStocks * (stklrCurrentStockPrice - stklrCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#stklrSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellStklrStocks10').click(function () {
        if (ownedStklrStocks > 9) {
            money += (stklrCurrentStockPrice - stklrCurrentStockPrice / 10) * 10;
            ownedStklrStocks -= 10;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#stklrOwnedStocksDisplay').html(ownedStklrStocks);
            if (ownedStklrStocks > 0)
                $('#stklrSellEstimate').html('$' + (ownedStklrStocks * (stklrCurrentStockPrice - stklrCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#stklrSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellStklrStocks100').click(function () {
        if (ownedStklrStocks > 99) {
            money += (stklrCurrentStockPrice - stklrCurrentStockPrice / 10) * 100;
            ownedStklrStocks -= 100;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#stklrOwnedStocksDisplay').html(ownedStklrStocks);
            if (ownedStklrStocks > 0)
                $('#stklrSellEstimate').html('$' + (ownedStklrStocks * (stklrCurrentStockPrice - stklrCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#stklrSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnSellStklrStocksAll').click(function () {
        if (ownedStklrStocks > 0) {
            money += (stklrCurrentStockPrice - stklrCurrentStockPrice / 10) * ownedStklrStocks;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedStklrStocks = 0;
            $('#stklrOwnedStocksDisplay').html(ownedStklrStocks);
            if (ownedStklrStocks > 0)
                $('#stklrSellEstimate').html('$' + (ownedStklrStocks * (stklrCurrentStockPrice - stklrCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#stklrSellEstimate').html('$0');
        }
        return false;
    });
})(jQuery);