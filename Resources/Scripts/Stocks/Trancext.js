﻿$(document).ready(function () {

    $('#trancextStockDisplayCost').html('$' + trancextCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#trancextCurrentPrice').html('$' + trancextCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#trancextStockSellPrice').html('$' + (trancextCurrentStockPrice - trancextCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#trancextOwnedStocksDisplay').html(ownedTrancextStocks);
    $('#trancextMoneySpent').html('$' + trancextSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#trancextSellEstimate').html('$' + (ownedTrancextStocks * (trancextCurrentStockPrice - (trancextCurrentStockPrice / sellDivider))).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

    $('#btnBuyTrancextStocks').click(function () {

        if (money >= trancextCurrentStockPrice) {
            money -= trancextCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedTrancextStocks++;
            localStorage.setItem("ownedTrancextStocks", ownedTrancextStocks);
            trancextSpentAmt += trancextCurrentStockPrice;
            localStorage.setItem("trancextSpentAmt", trancextSpentAmt);
            $('#trancextMoneySpent').html('$' + trancextSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#trancextOwnedStocksDisplay').html(ownedTrancextStocks);
            $('#trancextOwnedStocks').html(ownedTrancextStocks);
            if (ownedTrancextStocks > 0)
                $('#trancextSellEstimate').html('$' + (ownedTrancextStocks * (trancextCurrentStockPrice - trancextCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#trancextSellEstimate').html('$0.00');
        }

        return false;
    });
    $('#btnBuyTrancextStocks10').click(function () {

        if (money >= trancextCurrentStockPrice * 10) {
            money -= trancextCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedTrancextStocks += 10;
            localStorage.setItem("ownedTrancextStocks", ownedTrancextStocks);
            trancextSpentAmt += trancextCurrentStockPrice * 10;
            localStorage.setItem("trancextSpentAmt", trancextSpentAmt);
            $('#trancextMoneySpent').html('$' + trancextSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#trancextOwnedStocksDisplay').html(ownedTrancextStocks);
            $('#trancextOwnedStocks').html(ownedTrancextStocks);
            if (ownedTrancextStocks > 0)
                $('#trancextSellEstimate').html('$' + (ownedTrancextStocks * (trancextCurrentStockPrice - trancextCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#trancextSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnBuyTrancextStocks100').click(function () {

        if (money >= trancextCurrentStockPrice * 100) {
            money -= trancextCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedTrancextStocks += 100;
            localStorage.setItem("ownedTrancextStocks", ownedTrancextStocks);
            trancextSpentAmt += trancextCurrentStockPrice * 100;
            localStorage.setItem("trancextSpentAmt", trancextSpentAmt);
            $('#trancextMoneySpent').html('$' + trancextSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#trancextOwnedStocksDisplay').html(ownedTrancextStocks);
            $('#trancextOwnedStocks').html(ownedTrancextStocks);
            if (ownedTrancextStocks > 0)
                $('#trancextSellEstimate').html('$' + (ownedTrancextStocks * (trancextCurrentStockPrice - trancextCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#trancextSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnBuyTrancextStocksAll').click(function () {
        var trancextBuyAmt = Math.floor(money / trancextCurrentStockPrice);
        if (trancextBuyAmt >= 1) {
            money -= trancextCurrentStockPrice * trancextBuyAmt;
            localStorage.setItem("money", money);
            ownedTrancextStocks += trancextBuyAmt;
            localStorage.setItem("ownedTrancextStocks", ownedTrancextStocks);
            trancextSpentAmt += trancextCurrentStockPrice * trancextBuyAmt;
            localStorage.setItem("trancextSpentAmt", trancextSpentAmt);
            $('#trancextMoneySpent').html('$' + trancextSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#trancextOwnedStocksDisplay').html(ownedTrancextStocks);
            $('#trancextOwnedStocks').html(ownedTrancextStocks);
            if (ownedTrancextStocks > 0)
                $('#trancextSellEstimate').html('$' + (ownedTrancextStocks * (trancextCurrentStockPrice - trancextCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#trancextSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellTrancextStocks').click(function () {
        if (ownedTrancextStocks > 0) {
            money += trancextCurrentStockPrice - trancextCurrentStockPrice / sellDivider;
            localStorage.setItem("money", money);
            var average = trancextSpentAmt / ownedTrancextStocks;
            trancextSpentAmt -= average;
            localStorage.setItem("trancextSpentAmt", trancextSpentAmt);
            $('#trancextMoneySpent').html('$' + trancextSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedTrancextStocks--;
            localStorage.setItem("ownedTrancextStocks", ownedTrancextStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#trancextOwnedStocksDisplay').html(ownedTrancextStocks);
            $('#trancextOwnedStocks').html(ownedTrancextStocks);
            if (ownedTrancextStocks > 0)
                $('#trancextSellEstimate').html('$' + (ownedTrancextStocks * (trancextCurrentStockPrice - trancextCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#trancextSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellTrancextStocks10').click(function () {
        if (ownedTrancextStocks > 9) {
            money += (trancextCurrentStockPrice - trancextCurrentStockPrice / sellDivider) * 10;
            localStorage.setItem("money", money);
            var average = trancextSpentAmt / ownedTrancextStocks;
            trancextSpentAmt -= average * 10;
            localStorage.setItem("trancextSpentAmt", trancextSpentAmt);
            $('#trancextMoneySpent').html('$' + trancextSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedTrancextStocks -= 10;
            localStorage.setItem("ownedTrancextStocks", ownedTrancextStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#trancextOwnedStocksDisplay').html(ownedTrancextStocks);
            $('#trancextOwnedStocks').html(ownedTrancextStocks);
            if (ownedTrancextStocks > 0)
                $('#trancextSellEstimate').html('$' + (ownedTrancextStocks * (trancextCurrentStockPrice - trancextCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#trancextSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellTrancextStocks100').click(function () {
        if (ownedTrancextStocks > 99) {
            money += (trancextCurrentStockPrice - trancextCurrentStockPrice / sellDivider) * 100;
            localStorage.setItem("money", money);
            var average = trancextSpentAmt / ownedTrancextStocks;
            trancextSpentAmt -= average * 100;
            localStorage.setItem("trancextSpentAmt", trancextSpentAmt);
            $('#trancextMoneySpent').html('$' + trancextSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedTrancextStocks -= 100;
            localStorage.setItem("ownedTrancextStocks", ownedTrancextStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#trancextOwnedStocksDisplay').html(ownedTrancextStocks);
            $('#trancextOwnedStocks').html(ownedTrancextStocks);
            if (ownedTrancextStocks > 0)
                $('#trancextSellEstimate').html('$' + (ownedTrancextStocks * (trancextCurrentStockPrice - trancextCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#trancextSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellTrancextStocksAll').click(function () {
        if (ownedTrancextStocks > 0) {
            money += (trancextCurrentStockPrice - trancextCurrentStockPrice / sellDivider) * ownedTrancextStocks;
            localStorage.setItem("money", money);
            trancextSpentAmt = 0;
            localStorage.setItem("trancextSpentAmt", trancextSpentAmt);
            $('#trancextMoneySpent').html('$' + trancextSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedTrancextStocks = 0;
            localStorage.setItem("ownedTrancextStocks", ownedTrancextStocks);
            $('#trancextOwnedStocksDisplay').html(ownedTrancextStocks);
            $('#trancextOwnedStocks').html(ownedTrancextStocks);
            if (ownedTrancextStocks > 0)
                $('#trancextSellEstimate').html('$' + (ownedTrancextStocks * (trancextCurrentStockPrice - trancextCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#trancextSellEstimate').html('$0.00');
        }
        return false;
    });
});