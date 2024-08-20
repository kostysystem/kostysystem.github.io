window.onload = function () {
	const o = ymaps.geolocation;
    var country = o.country
    if (country == "Россия" || country == "Беларусь"){
var countrycontent = "ruby"
document.title = "Статьи по Linux - KostySystem";
var content = document.getElementById("page");
content.innerHTML = "<center><br><img src=\"favicon.ico\" width=\"70\" height=\"70\"><h1>KostySystem</h1><h3>Скоро мы начнём выпускать статьи по Linux.</h3><hr><br><br><br><h3>Мы начинаем выпускать статьи по Linux с 15 сентября 2024.</h3><p>В России начался переход на Отечественное ПО. Это пока что касается только организаций. Обычных пользователей это пока не касается. Российские ОС чаще всего основаны на ядре Linux, поэтому скоро на нашем сайте будут выходить статьи про Linux. Статьи по Linux так-же будут полезны тем, кто хочет перейти с Windows на Linux. Инструкции будут работать как на отечественных, так и на других дистрибутивах.</p> <br> <h2><a href=\"/\">На главную сайта</a><br><br><br><br><br><br><br><br><br>";

    } else {
var countrycontent = "other"
document.title = "Что-то пошло не так - KostySystem";
var content = document.getElementById("page");
content.innerHTML = "<center><br><img src=\"favicon.ico\" width=\"70\" height=\"70\"><h1>KostySystem</h1><h3>Ошибка</h3><hr><br><h3>Что-то пошло не так...</h3><br><h4>Страница недоступна. Увы.</h4><h4>Вы можете отправиться на главную.</h4><br><br><h1><a href=\"https://kostysystem.github.io\">На главную</a></h1><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></center>";
    }
}
