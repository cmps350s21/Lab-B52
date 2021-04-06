/*
1.Rewrite the you created in Part-1 using promises.
*/

import fs from 'fs-extra'

fs.readJson('data/course.json')
    .then(message=>console.log(message))
    .catch(err=>console.log(err))