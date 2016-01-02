﻿$(document).ready(function () {

    $('#chimerasecStockDisplayCost').html('$' + chimerasecCurrentStockPrice.toFixed(2));
    $('#chimerasecStockSellPrice').html('$' + (chimerasecCurrentStockPrice - chimerasecCurrentStockPrice / sellDivider).toFixed(2));
    $('#chimerasecOwnedStocksDisplay').html(ownedChimerasecStocks);
    $('#chimerasecSellEstimate').html('$' + (ownedChimerasecStocks * (chimerasecCurrentStockPrice - (chimerasecCurrentStockPrice / sellDivider))).toFixed(2));

    $('#btnBuyChimerasecStocks').click(function () {

        if (money >= chimerasecCurrentStockPrice) {
            money -= chimerasecCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedChimerasecStocks++;
            localStorage.setItem("ownedChimerasecStocks", ownedChimerasecStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimerasecOwnedStocksDisplay').html(ownedChimerasecStocks);
            if (ownedChimerasecStocks > 0)
                $('#chimerasecSellEstimate').html('$' + (ownedChimerasecStocks * (chimerasecCurrentStockPrice - chimerasecCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#chimerasecSellEstimate').html('$0');
        }

        return false;
    });
    $('#btnBuyChimerasecStocks10').click(function () {

        if (money >= chimerasecCurrentStockPrice * 10) {
            money -= chimerasecCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedChimerasecStocks += 10;
            localStorage.setItem("ownedChimerasecStocks", ownedChimerasecStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimerasecOwnedStocksDisplay').html(ownedChimerasecStocks);
            if (ownedChimerasecStocks > 0)
                $('#chimerasecSellEstimate').html('$' + (ownedChimerasecStocks * (chimerasecCurrentStockPrice - chimerasecCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#chimerasecSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnBuyChimerasecStocks100').click(function () {

        if (money >= chimerasecCurrentStockPrice * 100) {
            money -= chimerasecCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedChimerasecStocks += 100;
            localStorage.setItem("ownedChimerasecStocks", ownedChimerasecStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimerasecOwnedStocksDisplay').html(ownedChimerasecStocks);
            if (ownedChimerasecStocks > 0)
                $('#chimerasecSellEstimate').html('$' + (ownedChimerasecStocks * (chimerasecCurrentStockPrice - chimerasecCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#chimerasecSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnBuyChimerasecStocksAll').click(function () {
        var chimerasecBuyAmt = Math.floor(money / chimerasecCurrentStockPrice);
        if (chimerasecBuyAmt >= 1) {
            money -= chimerasecCurrentStockPrice * chimerasecBuyAmt;
            localStorage.setItem("money", money);
            ownedChimerasecStocks += chimerasecBuyAmt;
            localStorage.setItem("ownedChimerasecStocks", ownedChimerasecStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimerasecOwnedStocksDisplay').html(ownedChimerasecStocks);
            if (ownedChimerasecStocks > 0)
                $('#chimerasecSellEstimate').html('$' + (ownedChimerasecStocks * (chimerasecCurrentStockPrice - chimerasecCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#chimerasecSellEstimate').html('$0');
        }
        return false;
    });

    // Always sell amt at 10% lower
    $('#btnSellChimerasecStocks').click(function () {
        if (ownedChimerasecStocks > 0) {
            money += chimerasecCurrentStockPrice - chimerasecCurrentStockPrice / 10;
            localStorage.setItem("money", money);
            ownedChimerasecStocks--;
            localStorage.setItem("ownedChimerasecStocks", ownedChimerasecStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimerasecOwnedStocksDisplay').html(ownedChimerasecStocks);
            if (ownedChimerasecStocks > 0)
                $('#chimerasecSellEstimate').html('$' + (ownedChimerasecStocks * (chimerasecCurrentStockPrice - chimerasecCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#chimerasecSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellChimerasecStocks10').click(function () {
        if (ownedChimerasecStocks > 9) {
            money += (chimerasecCurrentStockPrice - chimerasecCurrentStockPrice / 10) * 10;
            localStorage.setItem("money", money);
            ownedChimerasecStocks -= 10;
            localStorage.setItem("ownedChimerasecStocks", ownedChimerasecStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimerasecOwnedStocksDisplay').html(ownedChimerasecStocks);
            if (ownedChimerasecStocks > 0)
                $('#chimerasecSellEstimate').html('$' + (ownedChimerasecStocks * (chimerasecCurrentStockPrice - chimerasecCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#chimerasecSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellChimerasecStocks100').click(function () {
        if (ownedChimerasecStocks > 99) {
            money += (chimerasecCurrentStockPrice - chimerasecCurrentStockPrice / 10) * 100;
            localStorage.setItem("money", money);
            ownedChimerasecStocks -= 100;
            localStorage.setItem("ownedChimerasecStocks", ownedChimerasecStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimerasecOwnedStocksDisplay').html(ownedChimerasecStocks);
            if (ownedChimerasecStocks > 0)
                $('#chimerasecSellEstimate').html('$' + (ownedChimerasecStocks * (chimerasecCurrentStockPrice - chimerasecCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#chimerasecSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnSellChimerasecStocksAll').click(function () {
        if (ownedChimerasecStocks > 0) {
            money += (chimerasecCurrentStockPrice - chimerasecCurrentStockPrice / 10) * ownedChimerasecStocks;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedChimerasecStocks = 0;
            localStorage.setItem("ownedChimerasecStocks", ownedChimerasecStocks);
            $('#chimerasecOwnedStocksDisplay').html(ownedChimerasecStocks);
            if (ownedChimerasecStocks > 0)
                $('#chimerasecSellEstimate').html('$' + (ownedChimerasecStocks * (chimerasecCurrentStockPrice - chimerasecCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#chimerasecSellEstimate').html('$0');
        }
        return false;
    });
})(jQuery);