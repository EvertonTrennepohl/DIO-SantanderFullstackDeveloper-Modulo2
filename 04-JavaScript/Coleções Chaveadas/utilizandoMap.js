var usuarios = new Map();
usuarios.set('Carlos', 'Admin');
usuarios.set('Beto', 'Admin');
usuarios.set('Lucas', 'Admin');
usuarios.set('João', 'User');
usuarios.set('Pedro', 'Admin');
usuarios.set('Teodoro', 'User');

function getAdmins(map) {
    let admins = [];
    for([key, value] of map) {
        if(value === "Admin") {
            admins.push(key);
        }
    }
    return admins;
}

console.log(getAdmins(usuarios));