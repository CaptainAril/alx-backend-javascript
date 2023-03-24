export default function createReportObject(employeesList) {
  const empList = {
    allEmployees: employeesList,
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };

  return empList;
}
