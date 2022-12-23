//Javascript

var snippets = [{
    id: "go-home",
    path: "home"
},
{
    id: "go-linear",
    path: "linear"
},
{
    id: "go-binary",
    path: "binary"
},
{
    id: "go-bubble",
    path: "bubble"
},
{
    id: "go-selection",
    path: "selection"
},
{
    id: "go-insertion",
    path: "insertion"
},
{
    id: "go-merge",
    path: "merge"
},
{
    id: "go-quick",
    path: "quick"
},
{
    id: "go-caesar",
    path: "caesar"
},
{
    id: "go-vigenere",
    path: "vigenere"
},
{
    id: "go-otp",
    path: "otp"
},
{
    id: "go-polybius",
    path: "polybius"
},
{
    id: "go-ascii",
    path: "ascii"
},
{
    id: "go-simple-btn",
    path: "simple-btn"
},
{
    id: "go-adv-btn",
    path: "adv-btn"
},
{
    id: "go-flex-btn",
    path: "flex-btn"
},
{
    id: "go-mountains",
    path: "mountains"
},
{
    id: "go-clouds",
    path: "clouds"
},
{
    id: "go-linear-gradient",
    path: "linear-gradient"
},
{
    id: "go-radial",
    path: "radial"
},
{
    id: "go-auto",
    path: "auto"
},
{
    id: "go-flexbox",
    path: "flexbox"
},
{
    id: "go-grid",
    path: "grid"
}
];

$("#nav-snippets").hide();
$("#search-change").hide();
$("#colors-2").hide();
var currentScreen = "home";
$(".tab").hide();
$("#" + currentScreen).show();
$("#settings input[type='range']").attr("min", "0").attr("max", "255").attr("value", "255");

$("footer").html("Created by <a href=\"https://www.khanacademy.org/profile/fotis2008/\" target=\"_blank\"> fotis2008</a>");

function changeDisplay() {
    if ($("#background-style").val() == 1) {
        $("#color-display").css("background", "none");
        $("#color-display").css("background-color", "rgb(" + $("#red-1").val() + ", " + $("#green-1").val() + ", " + $("#blue-1").val() + ")");
    } else {
        $("#color-display").css("background", "linear-gradient(" + $("#degrees").val() + "deg, rgb(" + $("#red-1-2").val() + ", " + $("#green-1-2").val() + ", " + $("#blue-1-2").val() + "), rgb(" + $("#red-2-2").val() + ", " + $("#green-2-2").val() + ", " + $("#blue-2-2").val() + ")" + ")");
    }
}

function changeNav(s=0) {
    if ($("#nav-snippets").is(":visible") || s==1) {
        $("#nav-snippets").slideUp();
        $("#arrow").text("˅").css("font-size", "2em").css("top", "9px");
    } else {
        $("#nav-snippets").slideDown("");
        $("#arrow").text("^").css("font-size", "1.5em").css("top", "6px");;
    }
}

function changeScreen(screen) {
    if (screen != "settings" && screen != "non-settings") {
        $("#" + currentScreen).fadeOut(() => {
            currentScreen = screen;
            $("#" + screen).fadeIn();
        });
        window.scroll(0, 0);
    } else if (screen === "settings") {
        window.scroll(0, 0);
        $("#nav-bar").slideUp();
        setTimeout(() => {
            $("#non-settings").css("animation-name", "move-out-2");
            setTimeout(() => {
                $("#non-settings").hide();
                $("#settings").show();
            }, 1000);
        }, 350);
    } else {
        window.scroll(0, 0);
        $("#settings").css("animation-name", "move-out-1");
        setTimeout(() => {
            $("#settings").hide();
            $("#non-settings").show();
            $("#non-settings").css("animation-name", "move-in-2");
            setTimeout(() => {
                $("#nav-bar").slideDown();
                $("#settings").css("animation-name", "move-in-1");
            }, 350);
        }, 1000);
    }
}

function changeBackground() {
    if ($("#background-style").val() == 1) {
        $("html,body").css("background", "none");
        $("html,body").css("background-color", "rgb(" + $("#red-1").val() + ", " + $("#green-1").val() + ", " + $("#blue-1").val() + ")");
    } else {
        $("html,body").css("background", "linear-gradient(" + $("#degrees").val() + "deg, rgb(" + $("#red-1-2").val() + ", " + $("#green-1-2").val() + ", " + $("#blue-1-2").val() + "), rgb(" + $("#red-2-2").val() + ", " + $("#green-2-2").val() + ", " + $("#blue-2-2").val() + ")" + ")");
    }
}

$("#non-nav").on("click", function() {
    changeNav(1);
});

$("#searchbar").on("input", function() {
    $("#" + currentScreen).hide();
    $("footer").hide();
    $("#search-change").html("<h4>Results:</h4>");
    var found = false;
    for (var i = 0; i < snippets.length; i++) {
        if ($("#" + snippets[i].id + " h3").text().toLowerCase().includes(this.value.toLowerCase())) {
            $("<div class='show-whole' onClick='changeScreen(\"" + snippets[i].path + "\")'>" + $("#" + snippets[i].id).html() + "</div>").appendTo("#search-change");
            found = true;
        }
    }
    for (var i = 0; i < snippets.length; i++) {
        if ($("#" + snippets[i].id + " p").text().toLowerCase().includes(this.value.toLowerCase()) && !$("#" + snippets[i].id + " h3").text().toLowerCase().includes(this.value.toLowerCase())) {
            $("<div class='show-whole' onClick='changeScreen(\"" + snippets[i].path + "\")'>" + $("#" + snippets[i].id).html() + "</div>").appendTo("#search-change");
            found = true;
        }
    }
    if (!found) {
        $("#search-change").html("<h4>No results were found.</h4>");
    }
});

$("#searchbar").on("focus", function() {
    $("#search-change").slideDown();
    $("#" + currentScreen).hide();
    $("footer").hide();
});

$("#searchbar").on("blur", function() {
    $("#search-change").slideUp(() => {
        $("#" + currentScreen).fadeIn();
        $("footer").show();
    });
});

$("#background-style").on("change", function() {
    if (this.value == 1) {
        $("#colors-2").slideUp();
        setTimeout(function() {
            $("#colors-1").slideDown();
        }, 250);
    } else {
        $("#colors-1").slideUp();
        setTimeout(function() {
            $("#colors-2").slideDown();
        }, 250);
    }
    changeDisplay();
});

$("#settings input").on("change", changeDisplay);
