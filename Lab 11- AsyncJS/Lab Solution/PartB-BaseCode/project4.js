/*
1.Rewrite the you created in Part-2 using promises.
*/
import fs from 'fs-extra'


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
        .catch(err => console.log(err))
}

getCoursesWithInstructorName().then(courses => console.log(courses))


// function getCoursesWithInstructorName(cb) {
//
//     fs.readFile('data/course.json', (err, data) => {
//         if (!err) {
//             const courses = JSON.parse(data)
//             fs.readFile('data/staff.json', (err, data) => {
//                 if (!err) {
//                     const staffs = JSON.parse(data)
//                     for (const course of courses) {
//                         const {firstname, lastname} = staffs.find(staff => staff.staffNo == course.instructorId)
//                         course.instructorName = `${firstname} ${lastname}`
//                     }
//                     cb(null, courses)
//                 } else
//                     cb(err, null)
//             })
//         } else cb(err, null)
//     })
// }
//
//
// getCoursesWithInstructorName((err, data) => {
//     if (!err) console.log(data)
//     else console.log(err)
// })
