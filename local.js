window.onload = function () {
	const o = ymaps.geolocation;
    var country = o.country
    if (country == "Россия" || country == "Беларусь"){
var countrycontent = "ruby"
var content = document.getElementById("local-content");
content.innerHTML = "<br><hr><br><h2>Отечественное ПО</h2><p>В России начался переход на Отечественное ПО. Пока что это обязательно только для организаций. Российские ОС чаще всего основаны на ядре Linux, поэтому скоро на нашем сайте будут выходить статьи про Linux.</p> <h2><a href=\"special/perexod-ru-po.html\">Подробнее</a><br><br><hr><br><br>";

    } else {
var countrycontent = "other"
    }
}
