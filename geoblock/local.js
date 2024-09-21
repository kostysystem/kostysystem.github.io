window.onload = function () {
	const o = ymaps.geolocation;
    var country = o.country
    if (country == "Украина"){
var country = "blocked"
    } else {
var country = "unblocked"
document.body.innerHTML = "Сайт доступен!";
window.location.hash = "#"
window.location.pathname = "/"
    }
}
