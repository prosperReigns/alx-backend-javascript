// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles"
};

// Create an array containing the student objects
const studentsList: Student[] = [student1, student2];

// Function to render a table with student information
function renderTable(students: Student[]): void {
  // Create the table element
  const table = document.createElement("table");

  // Create the table header
  const headerRow = table.insertRow();
  const headerFirstName = headerRow.insertCell();
  headerFirstName.textContent = "First Name";
  const headerLocation = headerRow.insertCell();
  headerLocation.textContent = "Location";

  // Append rows for each student
  students.forEach(student => {
    const row = table.insertRow();
    const cellFirstName = row.insertCell();
    cellFirstName.textContent = student.firstName;
    const cellLocation = row.insertCell();
    cellLocation.textContent = student.location;
  });

  // Append the table to the body of the document
  document.body.appendChild(table);
}

// Call the function to render the table with the studentsList
renderTable(studentsList);
