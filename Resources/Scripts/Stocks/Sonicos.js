﻿$(window).load(function () {

    $('#sonicosStockDisplayCost').html('$' + sonicosCurrentStockPrice.toFixed(2));
    $('#sonicosStockSellPrice').html('$' + (sonicosCurrentStockPrice - sonicosCurrentStockPrice / sellDivider).toFixed(2));
    $('#sonicosOwnedStocksDisplay').html(ownedSonicosStocks);
    $('#sonicosSellEstimate').html('$' + (ownedSonicosStocks * (sonicosCurrentStockPrice - (sonicosCurrentStockPrice / sellDivider))).toFixed(2));

    $('#btnBuySonicosStocks').click(function () {

        if (money >= sonicosCurrentStockPrice) {
            money -= sonicosCurrentStockPrice;
            ownedSonicosStocks++;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#sonicosOwnedStocksDisplay').html(ownedSonicosStocks);
            if (ownedSonicosStocks > 0)
                $('#sonicosSellEstimate').html('$' + (ownedSonicosStocks * (sonicosCurrentStockPrice - sonicosCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#sonicosSellEstimate').html('$0');
        }

        return false;
    });
    $('#btnBuySonicosStocks10').click(function () {

        if (money >= sonicosCurrentStockPrice * 10) {
            money -= sonicosCurrentStockPrice * 10;
            ownedSonicosStocks += 10;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#sonicosOwnedStocksDisplay').html(ownedSonicosStocks);
            if (ownedSonicosStocks > 0)
                $('#sonicosSellEstimate').html('$' + (ownedSonicosStocks * (sonicosCurrentStockPrice - sonicosCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#sonicosSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnBuySonicosStocks100').click(function () {

        if (money >= sonicosCurrentStockPrice * 100) {
            money -= sonicosCurrentStockPrice * 100;
            ownedSonicosStocks += 100;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#sonicosOwnedStocksDisplay').html(ownedSonicosStocks);
            if (ownedSonicosStocks > 0)
                $('#sonicosSellEstimate').html('$' + (ownedSonicosStocks * (sonicosCurrentStockPrice - sonicosCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#sonicosSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnBuySonicosStocksAll').click(function () {
        var sonicosBuyAmt = Math.floor(money / sonicosCurrentStockPrice);
        if (sonicosBuyAmt >= 1) {
            money -= sonicosCurrentStockPrice * sonicosBuyAmt;
            ownedSonicosStocks += sonicosBuyAmt;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#sonicosOwnedStocksDisplay').html(ownedSonicosStocks);
            if (ownedSonicosStocks > 0)
                $('#sonicosSellEstimate').html('$' + (ownedSonicosStocks * (sonicosCurrentStockPrice - sonicosCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#sonicosSellEstimate').html('$0');
        }
        return false;
    });

    // Always sell amt at 10% lower
    $('#btnSellSonicosStocks').click(function () {
        if (ownedSonicosStocks > 0) {
            money += sonicosCurrentStockPrice - sonicosCurrentStockPrice / 10;
            ownedSonicosStocks--;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#sonicosOwnedStocksDisplay').html(ownedSonicosStocks);
            if (ownedSonicosStocks > 0)
                $('#sonicosSellEstimate').html('$' + (ownedSonicosStocks * (sonicosCurrentStockPrice - sonicosCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#sonicosSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellSonicosStocks10').click(function () {
        if (ownedSonicosStocks > 9) {
            money += (sonicosCurrentStockPrice - sonicosCurrentStockPrice / 10) * 10;
            ownedSonicosStocks -= 10;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#sonicosOwnedStocksDisplay').html(ownedSonicosStocks);
            if (ownedSonicosStocks > 0)
                $('#sonicosSellEstimate').html('$' + (ownedSonicosStocks * (sonicosCurrentStockPrice - sonicosCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#sonicosSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellSonicosStocks100').click(function () {
        if (ownedSonicosStocks > 99) {
            money += (sonicosCurrentStockPrice - sonicosCurrentStockPrice / 10) * 100;
            ownedSonicosStocks -= 100;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#sonicosOwnedStocksDisplay').html(ownedSonicosStocks);
            if (ownedSonicosStocks > 0)
                $('#sonicosSellEstimate').html('$' + (ownedSonicosStocks * (sonicosCurrentStockPrice - sonicosCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#sonicosSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnSellSonicosStocksAll').click(function () {
        if (ownedSonicosStocks > 0) {
            money += (sonicosCurrentStockPrice - sonicosCurrentStockPrice / 10) * ownedSonicosStocks;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedSonicosStocks = 0;
            $('#sonicosOwnedStocksDisplay').html(ownedSonicosStocks);
            if (ownedSonicosStocks > 0)
                $('#sonicosSellEstimate').html('$' + (ownedSonicosStocks * (sonicosCurrentStockPrice - sonicosCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#sonicosSellEstimate').html('$0');
        }
        return false;
    });
})(jQuery);