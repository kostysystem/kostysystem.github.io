window.onload = function () {
	const o = ymaps.geolocation;
    var country = o.country
    if (country == "Украина"){
var rabotaet = "no"
    } else {
document.body.innerHTML = "Сайт доступен!";
window.location.hash = "#"
window.location.pathname = "/"
    }
}
