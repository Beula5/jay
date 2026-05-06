const students = [
  {
    id: 1,
    name: "Munezero",
    age: 17,
    course: "Robotics"
  },
  {
    id: 2,
    name: "Beula",
    age: 18,
    course: "Software Programming"
  }
];
function getStudentById(id) {
  return students.find(s => s.id === id);
}

function getAllStudents() {
  return students;
}
function getTotalStudents(){
    return students.length;
}

module.exports = module.exports = {
  getStudentById,
  getAllStudents,
  getTotalStudents

};

