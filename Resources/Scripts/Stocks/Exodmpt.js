﻿$(document).ready(function () {

    $('#exodmptStockDisplayCost').html('$' + exodmptCurrentStockPrice.toFixed(2));
    $('#exodmptStockSellPrice').html('$' + (exodmptCurrentStockPrice - exodmptCurrentStockPrice / sellDivider).toFixed(2));
    $('#exodmptOwnedStocksDisplay').html(ownedExodmptStocks);
    $('#exodmptSellEstimate').html('$' + (ownedExodmptStocks * (exodmptCurrentStockPrice - (exodmptCurrentStockPrice / sellDivider))).toFixed(2));

    $('#btnBuyExodmptStocks').click(function () {

        if (money >= exodmptCurrentStockPrice) {
            money -= exodmptCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedExodmptStocks++;
            localStorage.setItem("ownedExodmptStocks", ownedExodmptStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#exodmptOwnedStocksDisplay').html(ownedExodmptStocks);
            if (ownedExodmptStocks > 0)
                $('#exodmptSellEstimate').html('$' + (ownedExodmptStocks * (exodmptCurrentStockPrice - exodmptCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#exodmptSellEstimate').html('$0');
        }

        return false;
    });
    $('#btnBuyExodmptStocks10').click(function () {

        if (money >= exodmptCurrentStockPrice * 10) {
            money -= exodmptCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedExodmptStocks += 10;
            localStorage.setItem("ownedExodmptStocks", ownedExodmptStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#exodmptOwnedStocksDisplay').html(ownedExodmptStocks);
            if (ownedExodmptStocks > 0)
                $('#exodmptSellEstimate').html('$' + (ownedExodmptStocks * (exodmptCurrentStockPrice - exodmptCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#exodmptSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnBuyExodmptStocks100').click(function () {

        if (money >= exodmptCurrentStockPrice * 100) {
            money -= exodmptCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedExodmptStocks += 100;
            localStorage.setItem("ownedExodmptStocks", ownedExodmptStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#exodmptOwnedStocksDisplay').html(ownedExodmptStocks);
            if (ownedExodmptStocks > 0)
                $('#exodmptSellEstimate').html('$' + (ownedExodmptStocks * (exodmptCurrentStockPrice - exodmptCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#exodmptSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnBuyExodmptStocksAll').click(function () {
        var exodmptBuyAmt = Math.floor(money / exodmptCurrentStockPrice);
        if (exodmptBuyAmt >= 1) {
            money -= exodmptCurrentStockPrice * exodmptBuyAmt;
            localStorage.setItem("money", money);
            ownedExodmptStocks += exodmptBuyAmt;
            localStorage.setItem("ownedExodmptStocks", ownedExodmptStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#exodmptOwnedStocksDisplay').html(ownedExodmptStocks);
            if (ownedExodmptStocks > 0)
                $('#exodmptSellEstimate').html('$' + (ownedExodmptStocks * (exodmptCurrentStockPrice - exodmptCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#exodmptSellEstimate').html('$0');
        }
        return false;
    });

    // Always sell amt at 10% lower
    $('#btnSellExodmptStocks').click(function () {
        if (ownedExodmptStocks > 0) {
            money += exodmptCurrentStockPrice - exodmptCurrentStockPrice / 10;
            localStorage.setItem("money", money);
            ownedExodmptStocks--;
            localStorage.setItem("ownedExodmptStocks", ownedExodmptStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#exodmptOwnedStocksDisplay').html(ownedExodmptStocks);
            if (ownedExodmptStocks > 0)
                $('#exodmptSellEstimate').html('$' + (ownedExodmptStocks * (exodmptCurrentStockPrice - exodmptCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#exodmptSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellExodmptStocks10').click(function () {
        if (ownedExodmptStocks > 9) {
            money += (exodmptCurrentStockPrice - exodmptCurrentStockPrice / 10) * 10;
            localStorage.setItem("money", money);
            ownedExodmptStocks -= 10;
            localStorage.setItem("ownedExodmptStocks", ownedExodmptStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#exodmptOwnedStocksDisplay').html(ownedExodmptStocks);
            if (ownedExodmptStocks > 0)
                $('#exodmptSellEstimate').html('$' + (ownedExodmptStocks * (exodmptCurrentStockPrice - exodmptCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#exodmptSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellExodmptStocks100').click(function () {
        if (ownedExodmptStocks > 99) {
            money += (exodmptCurrentStockPrice - exodmptCurrentStockPrice / 10) * 100;
            localStorage.setItem("money", money);
            ownedExodmptStocks -= 100;
            localStorage.setItem("ownedExodmptStocks", ownedExodmptStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#exodmptOwnedStocksDisplay').html(ownedExodmptStocks);
            if (ownedExodmptStocks > 0)
                $('#exodmptSellEstimate').html('$' + (ownedExodmptStocks * (exodmptCurrentStockPrice - exodmptCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#exodmptSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnSellExodmptStocksAll').click(function () {
        if (ownedExodmptStocks > 0) {
            money += (exodmptCurrentStockPrice - exodmptCurrentStockPrice / 10) * ownedExodmptStocks;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedExodmptStocks = 0;
            localStorage.setItem("ownedExodmptStocks", ownedExodmptStocks);
            $('#exodmptOwnedStocksDisplay').html(ownedExodmptStocks);
            if (ownedExodmptStocks > 0)
                $('#exodmptSellEstimate').html('$' + (ownedExodmptStocks * (exodmptCurrentStockPrice - exodmptCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#exodmptSellEstimate').html('$0');
        }
        return false;
    });
})(jQuery);