/*
admin - all access
subadmin - create/delete courses
testprep - create/delete test
user - consume contenty
other- trial users
*/

// function getUserRole (name, roles) {
//     switch (roles) {
//         case "admin": return `${name} is admin with all access`
            
            
//         case "subadmin": return `${name} is sub-admin create/delete courses`
//         case "testprep": return `${name} is test-prep create/delete test`
//         case "user": return `${name} is user consume content`
//         case "other-trial-user": return `${name} is trial user`
           
    
//         default: return `Invalid role`
            
//     }

// }

// var getUserRole = function  (name, roles) {
//     switch (roles) {
//         case "admin": return `${name} is admin with all access`
            
            
//         case "subadmin": return `${name} is sub-admin create/delete courses`
//         case "testprep": return `${name} is test-prep create/delete test`
//         case "user": return `${name} is user consume content`
//         case "other-trial-user": return `${name} is trial user`
           
    
//         default: return `Invalid role`
            
//     }

// }

var getUserRole =  (name, roles) => {
    switch (roles) {
        case "admin": return `${name} is admin with all access`
            
            
        case "subadmin": return `${name} is sub-admin create/delete courses`
        case "testprep": return `${name} is test-prep create/delete test`
        case "user": return `${name} is user consume content`
        case "other-trial-user": return `${name} is trial user`
           
    
        default: return `Invalid role`
            
    }

}

var role = getUserRole("Nicks", "admin");
console.log(role);

console.log(getUserRole("Nicks", "testprep"));

