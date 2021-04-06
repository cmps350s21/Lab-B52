import fs from 'fs-extra'

/*
1.Rewrite the you created in Part-4 using promises adding the number of students registered in each course.
{
    crn: 200,
    courseCode: 'GENG 200',
    courseName: 'Probability and Statistics for Engineers',
    semester: 'Fall 2016',
    instructorId: 12,
    instrctorName: 'Zeyad Ali',
    studentCount: 56
  },
*/

// async function getCoursesWithInstructorName(){
//     const courses = await fs.readJson('data/course.json')
//     const students = await fs.readJson('data/student.json')
//     const staffs = await fs.readJson('data/staffs.json')
//
//     for (const course of courses) {
//         const {firstname, lastname} = staffs.find(staff => staff.staffNo == course.instructorId)
//         const registeredStudents = students.filter(student => student.courseIds.includes(course.crn))
//         course.studentsCount = registeredStudents.length
//         course.instructorName = `${firstname} ${lastname}`
//     }
// }

function getCoursesWithInstructorName() {
    return fs.readJson('data/course.json')
        .then(courses => {
            return fs.readJson('data/staff.json')
                .then(staffs => {
                    for (const course of courses) {
                        const {firstname, lastname} = staffs.find(staff => staff.staffNo == course.instructorId)
                        course.instructorName = `${firstname} ${lastname}`
                    }
                    return courses
                })
        }) //with the instructor name
        .then(courses => {
            return fs.readJson('data/student.json')
                .then(students => {
                    for (const course of courses) {
                        const registeredStudents = students.filter(student => student.courseIds.includes(course.crn))
                        course.studentsCount = registeredStudents.length
                    }
                    return courses
                })
        }) //total number of students
        .catch(err => console.log(err))
}

getCoursesWithInstructorName().then(courses => console.log(courses))