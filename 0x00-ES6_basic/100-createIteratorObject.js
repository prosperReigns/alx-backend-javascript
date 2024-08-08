export default function createIteratorObject(report) {
	  const allEmployees = {
		      ...report.allEmployees,
		    };
	  const employeeList = [];
	  for (const employee of Object.values(allEmployees)) {
		      employeeList.push(...employee);
		    }
	  return employeeList;
}
