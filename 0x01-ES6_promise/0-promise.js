export default function getResponseFromAPI() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve('Response from API');
		}, 1000);
	});
}
