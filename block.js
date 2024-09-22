
window.onload = function () {
	const o = ymaps.geolocation;
    var country = o.country
    if (country == "Украина"){
document.body.innerHTML = "Недоступно";
window.location.hash = "#"
window.location.pathname = "/geoblock/blocked.html"
    } else {

    }
}
