const  a = document.querySelector('.table-users-object');
let output = '';
const url = 'http://localhost:8080/api/users';

//let data = JSON.parse(this.responseText);

fetch(url, {
    credentials: 'include'
})
    .then(res => res.json())
    .then(data => {
        data.forEach(u => {
            output += `${u.username}`;
        });
        a.innerHTML = output;
    })

// function createTableRow(u) {                                                    //table creating
//     let userRole = "[";
//     for (let i = 0; i < u.roles.length; i++) {
//         userRole += u.roles[i].name.substring(5);
//         if (i != (u.roles.length - 1)) {
//             userRole += ", ";
//         }
//     }
//     userRole += "]";
//     return `<tr id="user_table_row">
//         <td>${u.id}</td>
//         <td>${u.name}</td>
//         <td>${u.lastname}</td>
//         <td>${u.age}</td>
//         <td>${u.username}</td>
//         <td>${userRole}</td>
//         <td>
//         <a href="/api/users/${u.id}" class="btn btn-info openEdit" >Edit</a>
//         </td>
//         <td>
//         <a href="/api/users/${u.id}" class="btn btn-danger openDelete">Delete</a>
//         </td>
// </tr>`;
// }