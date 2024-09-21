
window.onload = function () {
	const o = ymaps.geolocation;
    var country = o.country
    if (country == "Украина"){
var country = "blocked"
document.body.innerHTML = "Недоступно";
window.location.hash = "#"
window.location.pathname = "/geoblock/blocked.html"
    } else {
var country = "unblocked"
    }
}
