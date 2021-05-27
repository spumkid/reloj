const app = document.getElementById('app');

document.addEventListener('DOMContentLoaded', function () {
	horaActual();
});

function horaActual() {
	const horaActual = new Date().toLocaleTimeString();

	app.innerHTML = `${horaActual}`;

	setTimeout('horaActual()', 1000);
}
