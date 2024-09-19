// ============================================================================
// Шапка и футер сайта.

var copyright = document.getElementById("copyright");
copyright.innerHTML = "<br>  <h2><img src=\"/favicon.ico\" width=\"70\" height=\"70\" align=\"center\"> <span class=\"sitename-12812\">KostySystem </span></h2><h4 class=\"element-12812\">Сайт про компьютеры</h4> <br> <center> <h3>Навигация</h3><br><p><a href=\"/\" class=\"bottom-element\">Главная</a></p> <p><a href=\"/index.html#aboutus\" class=\"bottom-element\">О нас</a></p> <p><a href=\"/schedule.html\" class=\"bottom-element\">Наше расписание</a></p> <p><a href=\"/search.html\" class=\"bottom-element\">Поиск по сайту</a></p> <p><a href=\"/newbie/index.html\" class=\"bottom-element\">Для новичков</a></p> <p><a href=\"/articles/index.html\" class=\"bottom-element\">Статьи</a> </p> <p> <a href=\"/blog/index.html\" class=\"bottom-element\">Блог</a></center></p><br><br> <div class=\"avtor-pravo\"><h5>© KostySystem, 2024</h5></div> <br>";

var menu = document.getElementById("menu");
menu.innerHTML = "<div id=\"notewrite\"> </div><div id=\"notewriteerror\"> </div><div class=\"zakrep\"><nav>     <div class=\"pcnav\"><ul class=\"topmenu\">    <li><span><h2> <a href=\"/\" class=\"logo\" style=\"color: #fff;\"><img src=\"/favicon.ico\" width=\"40px\" height=\"40px\" align=\"center\"> KostySystem</a></h2></span></li>    <li> </li>    <li> </li>    <li> </li>    <li> </li>    <li> </li>     <li><a href=\"/newbie/index.html\" class=\"pcmenu-item\">Для новичков</a></li>    <li class=\"pcmenu-item\"><a href=\"/articles/index.html\" class=\"pcmenu-item\">KostySystem - статьи</a></li>    <li class=\"pcmenu-item\"><a href=\"/blog/index.html\" class=\"pcmenu-item\">Блог</a></li>  </ul></div>       <div class=\"menu\"><br>    <input type=\"checkbox\" id=\"burger-checkbox\" class=\"burger-checkbox\">    <label for=\"burger-checkbox\" class=\"burger\"></label>   <ul class=\"menu-list\"><br><br><center>            <li><a class=\"menu-item\" href=\"/\">Главная</a></li>            <li><a class=\"menu-item\" href=\"/newbie/index.html\">Для новичков</a></li>            <li><a class=\"menu-item\" href=\"/articles/index.html\">KostySystem - статьи</a></li>            <li><a class=\"menu-item\" href=\"/blog/index.html\">Блог</a></li>       </ul><br></div></div><span class=\"textphone\"> <span><a href=\"/\" class=\"logo\"><img src=\"/favicon.ico\" width=\"35px\" height=\"35px\" align=\"center\"> <span class=\"bold-mobile\">KostySystem</span></a></span></span> </nav> <h2><span class=\"search-button\"><a href=\"/search.html\" class=\"search-link\" title=\"Поиск по сайту\"><img src=\"/images/website-search.png\" width=\"32\" height=\"32\"></a></span></h2><h2><span class=\"theme-pereklychatel\" id=\"switchtheme\"><a onclick=\"switchTheme()\" href=\"#switch\" style=\"text-decoration: none;\"><img src=\"/images/website-blacktheme.png\" width=\"32\" height=\"32\" title=\"Переключить тему\"></a></span></h2><br><br>";
// ============================================================================

// Украшательства

// ==========================
// Тех-работы
var tech = "false"
var prichinazakritia = "Обновление сайта."
var kogdadostypno = "30.08.2024 в 20:00"

// Надпись сверху страницы
var note = "false"
var notetext = "message <a href=\"#\" class=\"hyberlink\">Подробнее</a>"

var type = "normal"
// error - сообщение о баге, сбое или проблеме.
// normal - обычное объявление
// ==========================





function help() {
    console.log("Список доступных команд:")
    console.log("switchTheme() - сменить тему")
    console.log("reload() - перезагрузить страницу")
    console.log("alert(\"Текст\") - отобразить уведомление")
    console.log("status() - отобразить статус текущей страницы")
    console.log("newbie() - раздел \"Для новичков\"")
    console.log("articles() - раздел \"Статьи\"")
    console.log("blog() - Блог KostySystem")
    console.log("И это не всё... Есть ещё системные команды. Их оооооооочень много!")
}
function reload() {
    console.log("Перезагружаем...")
    window.location.reload()
}
function newbie() {
    window.location.pathname = "/newbie/"
}
function articles() {
    window.location.pathname = "/articles/"
}
function blog() {
    window.location.pathname = "/blog/"
}
function status() {
console.log(" ")
console.log("Статус текущей веб-страницы:")
console.log("Host: " + window.location.host + "")
console.log("Path: " + window.location.pathname + "")
console.log("Protocol: " + window.location.protocol + "")
console.log("Hash: " + window.location.hash + "")
console.log("URL: " + window.location.href + "")
console.log(" ")
}

let isDark = false;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function switchTheme() {
    if (isDark) {
        var theme = document.getElementById("styles");
        theme.innerHTML = "<link rel=\"stylesheet\" type=\"text/css\" href=\"/styles.css\" />";
        var themeswicon = document.getElementById("switchtheme");
        themeswicon.innerHTML = "<a onclick=\"switchTheme()\" href=\"#switch\" style=\"text-decoration: none;\"><img src=\"/images/website-blacktheme.png\" width=\"32\" height=\"32\" title=\"Переключить тему\"></a>";
        var theme = "white";
        localStorage.setItem("mode", theme);
        isDark = false;
    } else {
        var theme = document.getElementById("styles");
        theme.innerHTML = "<link rel=\"stylesheet\" type=\"text/css\" href=\"/stylesdark.css\" />";
        var themeswicon = document.getElementById("switchtheme");
        themeswicon.innerHTML = "<a onclick=\"switchTheme()\" href=\"#switch\" style=\"text-decoration: none;\"><img src=\"/images/website-whitetheme.png\" width=\"32\" height=\"32\" title=\"Переключить тему\"></a>";
        var theme = "dark";
        localStorage.setItem("mode", theme);
        isDark = true;
    }
    await sleep(2000)
}


var theme = localStorage.getItem("mode");

if (theme == "dark") {
switchTheme()
}

var url = window.location.pathname

    if (note == "true"){
    if (type == "error"){
var copyright = document.getElementById("notewriteerror");
copyright.innerHTML = "<div id=\"noteerr\"><br><br><div class=\"notetext\">" + notetext +" </div><br><br></div>";
    }
    if (type == "normal"){
var copyright = document.getElementById("notewrite");
copyright.innerHTML = "<div id=\"note\"><br><br><div class=\"notetext\">" + notetext +" </div><br><br></div>";
    }
    else {

    }

    } 
    else {

    }
    if (tech == "true"){
document.title = "Технические работы - KostySystem"
document.body.innerHTML = "<center><br><br><h3>В данный момент наш сайт находится на технических работах.<br><br>Причина временного отключения: " + prichinazakritia + "</h3><br><br><h4>Наш сайт будет доступен примерно " + kogdadostypno + ".<br><br><br><br><h4><a href=\"#\"onclick=\"location.reload (); return false;\">Обновить страницу</a>";
    }
    else {

    }
console.log("K  K  SSSSSSS")
console.log("K K   S                         KostySystem")
console.log("KK    SSSSSSS")
console.log("K K         S               Сайт про компьютеры!")
console.log("K  K  SSSSSSS")
console.log(" ")
console.log("Добро пожаловать в консоль сайта! Она необходима для тестирования возможностей сайта и не только. Не подходит для обычных пользователей.")
console.log(" ")
console.log("Статус текущей веб-страницы:")
console.log("Host: " + window.location.host + "")
console.log("Path: " + window.location.pathname + "")
console.log("Protocol: " + window.location.protocol + "")
console.log("Hash: " + window.location.hash + "")
console.log("URL: " + window.location.href + "")
console.log(" ")
console.log("Введите help(), чтобы получить список команд.")

