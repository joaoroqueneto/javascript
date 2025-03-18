const users = ['maria','aline','joao']

for(let i = 0; i < users.length;  i++){
console.log(users[i])
};

const user = ['maria','aline','joao']

for(let name of user){
  console.log(name)
}

const usuario = {
  name: 'joao',
  age: 33,
  street:"av jose"
}

for (let key in usuario){
  console.log(key + ':' +  usuario[key])
}