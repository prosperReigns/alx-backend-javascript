import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
	const array = [];

	return Promise.allSettled([
		signUpUser(firstName, lastName),
		uploadPhoto(fileName),
	]).then((results) => {
		results.forEach((element) => {
			if (element.status === 'fulfilled') {
				array.push({ status: element.status, value: element.value });
			} else {
				array.push({ status: element.status, value: `${element.reason}` });
			}
		});
		return array;
	});
}
