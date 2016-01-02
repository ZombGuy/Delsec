﻿$(document).ready(function () {

    $('#ramnetStockDisplayCost').html('$' + ramnetCurrentStockPrice.toFixed(2));
    $('#ramnetStockSellPrice').html('$' + (ramnetCurrentStockPrice - ramnetCurrentStockPrice / sellDivider).toFixed(2));
    $('#ramnetOwnedStocksDisplay').html(ownedRamnetStocks);
    $('#ramnetSellEstimate').html('$' + (ownedRamnetStocks * (ramnetCurrentStockPrice - (ramnetCurrentStockPrice / sellDivider))).toFixed(2));

    $('#btnBuyRamnetStocks').click(function () {

        if (money >= ramnetCurrentStockPrice) {
            money -= ramnetCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedRamnetStocks++;
            localStorage.setItem("ownedRamnetStocks", ownedRamnetStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#ramnetOwnedStocksDisplay').html(ownedRamnetStocks);
            if (ownedRamnetStocks > 0)
                $('#ramnetSellEstimate').html('$' + (ownedRamnetStocks * (ramnetCurrentStockPrice - ramnetCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#ramnetSellEstimate').html('$0');
        }

        return false;
    });
    $('#btnBuyRamnetStocks10').click(function () {

        if (money >= ramnetCurrentStockPrice * 10) {
            money -= ramnetCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedRamnetStocks += 10;
            localStorage.setItem("ownedRamnetStocks", ownedRamnetStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#ramnetOwnedStocksDisplay').html(ownedRamnetStocks);
            if (ownedRamnetStocks > 0)
                $('#ramnetSellEstimate').html('$' + (ownedRamnetStocks * (ramnetCurrentStockPrice - ramnetCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#ramnetSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnBuyRamnetStocks100').click(function () {

        if (money >= ramnetCurrentStockPrice * 100) {
            money -= ramnetCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedRamnetStocks += 100;
            localStorage.setItem("ownedRamnetStocks", ownedRamnetStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#ramnetOwnedStocksDisplay').html(ownedRamnetStocks);
            if (ownedRamnetStocks > 0)
                $('#ramnetSellEstimate').html('$' + (ownedRamnetStocks * (ramnetCurrentStockPrice - ramnetCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#ramnetSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnBuyRamnetStocksAll').click(function () {
        var ramnetBuyAmt = Math.floor(money / ramnetCurrentStockPrice);
        if (ramnetBuyAmt >= 1) {
            money -= ramnetCurrentStockPrice * ramnetBuyAmt;
            localStorage.setItem("money", money);
            ownedRamnetStocks += ramnetBuyAmt;
            localStorage.setItem("ownedRamnetStocks", ownedRamnetStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#ramnetOwnedStocksDisplay').html(ownedRamnetStocks);
            if (ownedRamnetStocks > 0)
                $('#ramnetSellEstimate').html('$' + (ownedRamnetStocks * (ramnetCurrentStockPrice - ramnetCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#ramnetSellEstimate').html('$0');
        }
        return false;
    });

    // Always sell amt at 10% lower
    $('#btnSellRamnetStocks').click(function () {
        if (ownedRamnetStocks > 0) {
            money += ramnetCurrentStockPrice - ramnetCurrentStockPrice / 10;
            localStorage.setItem("money", money);
            ownedRamnetStocks--;
            localStorage.setItem("ownedRamnetStocks", ownedRamnetStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#ramnetOwnedStocksDisplay').html(ownedRamnetStocks);
            if (ownedRamnetStocks > 0)
                $('#ramnetSellEstimate').html('$' + (ownedRamnetStocks * (ramnetCurrentStockPrice - ramnetCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#ramnetSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellRamnetStocks10').click(function () {
        if (ownedRamnetStocks > 9) {
            money += (ramnetCurrentStockPrice - ramnetCurrentStockPrice / 10) * 10;
            localStorage.setItem("money", money);
            ownedRamnetStocks -= 10;
            localStorage.setItem("ownedRamnetStocks", ownedRamnetStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#ramnetOwnedStocksDisplay').html(ownedRamnetStocks);
            if (ownedRamnetStocks > 0)
                $('#ramnetSellEstimate').html('$' + (ownedRamnetStocks * (ramnetCurrentStockPrice - ramnetCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#ramnetSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellRamnetStocks100').click(function () {
        if (ownedRamnetStocks > 99) {
            money += (ramnetCurrentStockPrice - ramnetCurrentStockPrice / 10) * 100;
            localStorage.setItem("money", money);
            ownedRamnetStocks -= 100;
            localStorage.setItem("ownedRamnetStocks", ownedRamnetStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#ramnetOwnedStocksDisplay').html(ownedRamnetStocks);
            if (ownedRamnetStocks > 0)
                $('#ramnetSellEstimate').html('$' + (ownedRamnetStocks * (ramnetCurrentStockPrice - ramnetCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#ramnetSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnSellRamnetStocksAll').click(function () {
        if (ownedRamnetStocks > 0) {
            money += (ramnetCurrentStockPrice - ramnetCurrentStockPrice / 10) * ownedRamnetStocks;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedRamnetStocks = 0;
            localStorage.setItem("ownedRamnetStocks", ownedRamnetStocks);
            $('#ramnetOwnedStocksDisplay').html(ownedRamnetStocks);
            if (ownedRamnetStocks > 0)
                $('#ramnetSellEstimate').html('$' + (ownedRamnetStocks * (ramnetCurrentStockPrice - ramnetCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#ramnetSellEstimate').html('$0');
        }
        return false;
    });
})(jQuery);