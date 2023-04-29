let XLSX = require('xlsx');
let fs = require('fs');

//Creat a workbook object
let workbook = XLSX.readFile('C:/Users/Osman Ghazi/Desktop/Project/cypress/e2e/userData/Book1.xlsx');

// Create worksheet

let worksheet = workbook .Sheets['Sheet1']

//Conver xlsx to json object
let user_data =XLSX.utils.sheet_to_json(worksheet)
console.log(user_data)
fs.writeFile('cypress/fixtures/usdata1.json',JSON.stringify(user_data), (err) => {
    if(err){
        console.log(err)
        return
    }

})
