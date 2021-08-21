function createTableRow(u) {                                                    //table creating
    let userRole = "[";
    for (let i = 0; i < u.roles.length; i++) {
        userRole += u.roles[i].name.substring(5);
        if (i != (u.roles.length - 1)) {
            userRole += ", ";
        }
    }
    userRole += "]";
    return `<tr id="user_table_row">
        <td>${u.id}</td>
        <td>${u.name}</td>
        <td>${u.lastname}</td>
        <td>${u.age}</td>
        <td>${u.username}</td>
        <td>${userRole}</td>
        <td>
        <a href="/api/users/${u.id}" class="btn btn-info openEdit" >Edit</a>
        </td>
        <td>
        <a href="/api/users/${u.id}" class="btn btn-danger openDelete">Delete</a>
        </td>
</tr>`;
}


function restartAllUser() {                                                     //table refreshing
    let UserTableBody = $("#user_table_body")
    UserTableBody.children().remove();

    fetch("api/users")
        .then((response) => {
            response.json().then(data => data.forEach(function (item, i, data) {
                let TableRow = createTableRow(item);
                UserTableBody.append(TableRow);
            }));
        }).catch(error => {
        console.log(error);
    });
}