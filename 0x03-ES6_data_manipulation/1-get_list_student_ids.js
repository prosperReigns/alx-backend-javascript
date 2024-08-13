export default getListStudentIds(arr) {
	if (arr instanceof Array) {
		return arr.map(arr => arr.id);
	}

	return [];
}
