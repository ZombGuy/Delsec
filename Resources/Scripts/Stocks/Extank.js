﻿$(window).load(function () {

    $('#extankStockDisplayCost').html('$' + extankCurrentStockPrice.toFixed(2));
    $('#extankStockSellPrice').html('$' + (extankCurrentStockPrice - extankCurrentStockPrice / sellDivider).toFixed(2));
    $('#extankOwnedStocksDisplay').html(ownedExtankStocks);
    $('#extankSellEstimate').html('$' + (ownedExtankStocks * (extankCurrentStockPrice - (extankCurrentStockPrice / sellDivider))).toFixed(2));

    $('#btnBuyExtankStocks').click(function () {

        if (money >= extankCurrentStockPrice) {
            money -= extankCurrentStockPrice;
            ownedExtankStocks++;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#extankOwnedStocksDisplay').html(ownedExtankStocks);
            if (ownedExtankStocks > 0)
                $('#extankSellEstimate').html('$' + (ownedExtankStocks * (extankCurrentStockPrice - extankCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#extankSellEstimate').html('$0');
        }

        return false;
    });
    $('#btnBuyExtankStocks10').click(function () {

        if (money >= extankCurrentStockPrice * 10) {
            money -= extankCurrentStockPrice * 10;
            ownedExtankStocks += 10;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#extankOwnedStocksDisplay').html(ownedExtankStocks);
            if (ownedExtankStocks > 0)
                $('#extankSellEstimate').html('$' + (ownedExtankStocks * (extankCurrentStockPrice - extankCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#extankSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnBuyExtankStocks100').click(function () {

        if (money >= extankCurrentStockPrice * 100) {
            money -= extankCurrentStockPrice * 100;
            ownedExtankStocks += 100;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#extankOwnedStocksDisplay').html(ownedExtankStocks);
            if (ownedExtankStocks > 0)
                $('#extankSellEstimate').html('$' + (ownedExtankStocks * (extankCurrentStockPrice - extankCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#extankSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnBuyExtankStocksAll').click(function () {
        var extankBuyAmt = Math.floor(money / extankCurrentStockPrice);
        if (extankBuyAmt >= 1) {
            money -= extankCurrentStockPrice * extankBuyAmt;
            ownedExtankStocks += extankBuyAmt;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#extankOwnedStocksDisplay').html(ownedExtankStocks);
            if (ownedExtankStocks > 0)
                $('#extankSellEstimate').html('$' + (ownedExtankStocks * (extankCurrentStockPrice - extankCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#extankSellEstimate').html('$0');
        }
        return false;
    });

    // Always sell amt at 10% lower
    $('#btnSellExtankStocks').click(function () {
        if (ownedExtankStocks > 0) {
            money += extankCurrentStockPrice - extankCurrentStockPrice / 10;
            ownedExtankStocks--;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#extankOwnedStocksDisplay').html(ownedExtankStocks);
            if (ownedExtankStocks > 0)
                $('#extankSellEstimate').html('$' + (ownedExtankStocks * (extankCurrentStockPrice - extankCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#extankSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellExtankStocks10').click(function () {
        if (ownedExtankStocks > 9) {
            money += (extankCurrentStockPrice - extankCurrentStockPrice / 10) * 10;
            ownedExtankStocks -= 10;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#extankOwnedStocksDisplay').html(ownedExtankStocks);
            if (ownedExtankStocks > 0)
                $('#extankSellEstimate').html('$' + (ownedExtankStocks * (extankCurrentStockPrice - extankCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#extankSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellExtankStocks100').click(function () {
        if (ownedExtankStocks > 99) {
            money += (extankCurrentStockPrice - extankCurrentStockPrice / 10) * 100;
            ownedExtankStocks -= 100;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#extankOwnedStocksDisplay').html(ownedExtankStocks);
            if (ownedExtankStocks > 0)
                $('#extankSellEstimate').html('$' + (ownedExtankStocks * (extankCurrentStockPrice - extankCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#extankSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnSellExtankStocksAll').click(function () {
        if (ownedExtankStocks > 0) {
            money += (extankCurrentStockPrice - extankCurrentStockPrice / 10) * ownedExtankStocks;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedExtankStocks = 0;
            $('#extankOwnedStocksDisplay').html(ownedExtankStocks);
            if (ownedExtankStocks > 0)
                $('#extankSellEstimate').html('$' + (ownedExtankStocks * (extankCurrentStockPrice - extankCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#extankSellEstimate').html('$0');
        }
        return false;
    });
})(jQuery);