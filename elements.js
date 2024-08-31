// ============================================================================
// Шапка и футер сайта.

var copyright = document.getElementById("copyright");
copyright.innerHTML = "<br>  <h2><img src=\"/favicon.ico\" width=\"70\" height=\"70\" align=\"center\"> <span class=\"sitename-12812\">KostySystem </span></h2><h4 class=\"element-12812\">Сайт про компьютеры</h4> <br> <center> <h3>Навигация</h3><br><p><a href=\"/\" class=\"bottom-element\">Главная</a></p> <p><a href=\"/index.html#aboutus\" class=\"bottom-element\">О нас</a></p> <p><a href=\"/newbie/index.html\" class=\"bottom-element\">Для новичков</a></p> <p><a href=\"/articles/index.html\" class=\"bottom-element\">Статьи</a> </p> <p> <a href=\"/blog/index.html\" class=\"bottom-element\">Блог</a></center></p><br><br> <div class=\"avtor-pravo\"><h5>© KostySystem, 2024</h5></div> <br>";

var menu = document.getElementById("menu");
menu.innerHTML = "<div id=\"notewrite\"> </div><div id=\"notewriteerror\"> </div><div class=\"zakrep\"><nav>     <div class=\"pcnav\"><ul class=\"topmenu\">    <li><h2> <img src=\"/favicon.ico\" width=\"40px\" height=\"40px\" align=\"center\"> KostySystem</h2></li>    <li> </li>    <li> </li>    <li> </li>    <li> </li>    <li> </li>    <li><a href=\"/\">Главная</a></li>    <li><a href=\"/newbie/index.html\">Для новичков</a></li>    <li><a href=\"/articles/index.html\">KostySystem - статьи</a></li>    <li><a href=\"/blog/index.html\">Блог</a></li>  </ul></div>       <div class=\"menu\"><br>    <input type=\"checkbox\" id=\"burger-checkbox\" class=\"burger-checkbox\">    <label for=\"burger-checkbox\" class=\"burger\"></label>   <ul class=\"menu-list\"><br><br><center>            <li><a class=\"menu-item\" href=\"/\">Главная</a></li>            <li><a class=\"menu-item\" href=\"/newbie/index.html\">Для новичков</a></li>            <li><a class=\"menu-item\" href=\"/articles/index.html\">KostySystem - статьи</a></li>            <li><a class=\"menu-item\" href=\"/blog/index.html\">Блог</a></li>       </ul><br></div></div><span class=\"textphone\"> <img src=\"/favicon.ico\" width=\"35px\" height=\"35px\" align=\"center\"> <span class=\"bold-mobile\">KostySystem</span></span> </nav><br>";
// ============================================================================

// Украшательства

// ==========================
// Тех-работы
var tech = "false"
var prichinazakritia = "unknown"
var kogdadostypno = "01.09.2024 в 00:00"

// Надпись сверху страницы
var note = "false"
var notetext = "Message <a href=\"#\" class=\"hyberlink\">Подробнее</a>"

var type = "normal"
// error - сообщение о баге, сбое или проблеме.
// normal - обычное объявление
// ==========================













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
