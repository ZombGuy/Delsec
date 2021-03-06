$(document).ready(function () {
    $('#btnEmail1View').click(function () {
        $("#email1").toggle();
        if (email1Viewed == "false") {
            numUnreadEmails--;
            email1Viewed = "true";
            localStorage.setItem("email1Viewed", email1Viewed);
            localStorage.setItem("numUnreadEmails", numUnreadEmails);
            $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
            $("#btnEmail1View").html("Delsec AutoPostBot - autoGen5184828 (Viewed)");
            $("#btnEmail1View").css("background", "#CCC");
        }
        return false;
    });

    $('#btnEmail2View').click(function () {
        $("#email2").toggle();
        if (email2Viewed == "false") {
            numUnreadEmails--;
            email2Viewed = "true";
            localStorage.setItem("email2Viewed", email2Viewed);
            localStorage.setItem("numUnreadEmails", numUnreadEmails);
            $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
            $("#btnEmail2View").html("Delsec Team - Thank you (Viewed)");
            $("#btnEmail2View").css("background", "#CCC");
        }
        return false;
    });
    $('#btnEmail3View').click(function () {
        $("#email3").toggle();
        if (email3Viewed == "false") {
            numUnreadEmails--;
            email3Viewed = "true";
            localStorage.setItem("email3Viewed", email3Viewed);
            localStorage.setItem("numUnreadEmails", numUnreadEmails);
            $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
            $('#btnEmail3View').html("Tsar of Russia - Thank you (Viewed)");
            $("#btnEmail3View").css("background", "#CCC");
        }
        return false;
    });
    $('#btnEmail4View').click(function () {
        $("#email4").toggle();
        if (email4Viewed == "false") {
            numUnreadEmails--;
            email4Viewed = "true";
            localStorage.setItem("email4Viewed", email4Viewed);
            localStorage.setItem("numUnreadEmails", numUnreadEmails);
            $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
            $('#btnEmail4View').html("Delsec Team - Growing (Viewed)");
            $("#btnEmail4View").css("background", "#CCC");
        }
        return false;
    });
    $('#btnEmailQuickScopeView').click(function () {
        $("#emailQuickScope").toggle();
        if (emailQuickScopeViewed == "false") {
            numUnreadEmails--;
            emailQuickScopeViewed = "true";
            localStorage.setItem("emailQuickScopeViewed", emailQuickScopeViewed);
            localStorage.setItem("numUnreadEmails", numUnreadEmails);
            $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
            $('#btnEmailQuickScopeView').html("XxX420N0-SK0PZXxX - Fanks (Viewed)");
            $('#btnEmailQuickScopeView').css("background", "#CCC");
        }
        return false;
    });

    $('#btnEmailDelsecStockView').click(function () {
        $("#emailDelsecStock").toggle();
        if (emailDelsecStockViewed == "false") {
            numUnreadEmails--;
            emailDelsecStockViewed = "true";
            localStorage.setItem("emailDelsecStockViewed", emailDelsecStockViewed);
            localStorage.setItem("numUnreadEmails", numUnreadEmails);
            $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
            $('#btnEmailDelsecStockView').html("Delsec Team - Stocks (Viewed)");
            $('#btnEmailDelsecStockView').css("background", "#CCC");
        }
        return false;
    });

    $('#btnEmail1KView').click(function () {
        $("#email1K").toggle();
        if (email1KViewed == "false") {
            numUnreadEmails--;
            email1KViewed = "true";
            localStorage.setItem("email1KViewed", email1KViewed);
            localStorage.setItem("numUnreadEmails", numUnreadEmails);
            $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
            $('#btnEmail1KView').html("Delsec Team - $1,000 (Viewed)");
            $('#btnEmail1KView').css("background", "#CCC");
        }
        return false;
    });

    $('#btnEmail4ByteView').click(function () {
        $("#email4Byte").toggle();
        if (email4ByteViewed == "false") {
            numUnreadEmails--;
            email4ByteViewed = "true";
            localStorage.setItem("email4ByteViewed", email4ByteViewed);
            localStorage.setItem("numUnreadEmails", numUnreadEmails);
            $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
            $('#btnEmail4ByteView').html("Delsec Team - The Byte Crawlers (Viewed)");
            $('#btnEmail4ByteView').css("background", "#CCC");
        }
        return false;
    });

    $('#btnEmailWarriorView').click(function () {
        $("#emailWarrior").toggle();
        if (emailWarriorViewed == "false") {
            numUnreadEmails--;
            emailWarriorViewed = "true";
            localStorage.setItem("emailWarriorViewed", emailWarriorViewed);
            localStorage.setItem("numUnreadEmails", numUnreadEmails);
            $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
            $('#btnEmailWarriorView').html("Mr. Delusive - Warrior (Viewed)");
            $('#btnEmailWarriorView').css("background", "#CCC");
        }
        return false;
    });

    $('#btnEmailWizardView').click(function () {
        $("#emailWizard").toggle();
        if (emailWizardViewed == "false") {
            numUnreadEmails--;
            emailWizardViewed = "true";
            localStorage.setItem("emailWizardViewed", emailWizardViewed);
            localStorage.setItem("numUnreadEmails", numUnreadEmails);
            $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
            $('#btnEmailWizardView').html("Mr. Delusive - Wizard (Viewed)");
            $('#btnEmailWizardView').css("background", "#CCC");
        }
        return false;
    });

    $('#btnEmailHealerView').click(function () {
        $("#emailHealer").toggle();
        if (emailHealerViewed == "false") {
            numUnreadEmails--;
            emailHealerViewed = "true";
            localStorage.setItem("emailHealerViewed", emailHealerViewed);
            localStorage.setItem("numUnreadEmails", numUnreadEmails);
            $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
            $('#btnEmailHealerView').html("Mr. Delusive - Healer (Viewed)");
            $('#btnEmailHealerView').css("background", "#CCC");
        }
        return false;
    });

    $('#btnEmailRogueView').click(function () {
        $("#emailRogue").toggle();
        if (emailRogueViewed == "false") {
            numUnreadEmails--;
            emailRogueViewed = "true";
            localStorage.setItem("emailRogueViewed", emailRogueViewed);
            localStorage.setItem("numUnreadEmails", numUnreadEmails);
            $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
            $('#btnEmailRogueView').html("Mr. Delusive - Rogue (Viewed)");
            $('#btnEmailRogueView').css("background", "#CCC");
        }
        return false;
    });

    $('#btnEmail4KBView').click(function () {
        $("#email4KB").toggle();
        if (email4KBViewed == "false") {
            numUnreadEmails--;
            email4KBViewed = "true";
            localStorage.setItem("email4KBViewed", email4KBViewed);
            localStorage.setItem("numUnreadEmails", numUnreadEmails);
            $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
            $('#btnEmail4KBView').html("Delsec Team - Continued Loyalty (Viewed)");
            $('#btnEmail4KBView').css("background", "#CCC");
        }
        return false;
    });

    $('#btnEmailVipersecStartView').click(function () {
        $("#emailVipersecStart").toggle();
        if (emailVipersecStartViewed == "false") {
            numUnreadEmails--;
            emailVipersecStartViewed = "true";
            localStorage.setItem("emailVipersecStartViewed", emailVipersecStartViewed);
            localStorage.setItem("numUnreadEmails", numUnreadEmails);
            $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
            $('#btnEmailVipersecStartView').html("Vipersec - 86542345 (Viewed)");
            $('#btnEmailVipersecStartView').css("background", "#CCC");
        }
        return false;
    });

    $('#btnEmailChimerasecStartView').click(function () {
        $("#emailChimerasecStart").toggle();
        if (emailChimerasecStartViewed == "false") {
            numUnreadEmails--;
            emailChimerasecStartViewed = "true";
            localStorage.setItem("emailChimerasecStartViewed", emailChimerasecStartViewed);
            localStorage.setItem("numUnreadEmails", numUnreadEmails);
            $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
            $('#btnEmailChimerasecStartView').html("Chimerasec - Yo (Viewed)");
            $('#btnEmailChimerasecStartView').css("background", "#CCC");
        }
        return false;
    });

    $('#btnEmailGriffonbankStartView').click(function () {
        $("#emailGriffonbankStart").toggle();
        if (emailGriffonbankStartViewed == "false") {
            numUnreadEmails--;
            emailGriffonbankStartViewed = "true";
            localStorage.setItem("emailGriffonbankStartViewed", emailGriffonbankStartViewed);
            localStorage.setItem("numUnreadEmails", numUnreadEmails);
            $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
            $('#btnEmailGriffonbankStartView').html("Griffon Bank - Welcome to Griffon Bank (Viewed)");
            $('#btnEmailGriffonbankStartView').css("background", "#CCC");
        }
        return false;
    });
});