// Date : 25/09/2025
// Objective : Write a JavaScript program that simulates fetching user information from a database and then works with that data.

// Callback-based function
function getUserData(id, callback){
    setTimeout(() => {
        if (id > 0) {
            callback(null , { id: id, name: `User${id}`, email: `User${id}@anudip.com` });
        } else {
            callback('Error : Invalid User ID');
        }
    }, 1000);
}

// Testing the function
getUserData(1, (err, User) => {
    if (err) 
        console.log(err);
    else
        console.log('Callback:', User);
});


// Promise-based function
function getUserDataPromise(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id > 0){
                resolve({ id: id, Name: `User${id}`, email : `User${id}@anudip.com`});
            } else{
                reject('Error : Invalid user ID');
            }
        }, 2000);
    });
}

// Test Promise using then/catch
getUserDataPromise(2)
    .then(user => console.log('Promise then/catch:', user))
    .catch(err => console.log(err));

// // Async/await for multiple users
async function fetchMultipleUsers() {
    try{
        const user1 = await getUserDataPromise(1);
        console.log('Async/Await :', user1);
        const user2 = await getUserDataPromise(2);
        console.log('Async/Await :', user2);
        const user3 = await getUserDataPromise(3);
        console.log('Async/Await :' , user3);
    } catch (err) {
        console.log(err)
    }
}

fetchMultipleUsers();

// Constructor function
function User(id, name, email){
    this.id =id;
    this.name =name;
    this.email= email;
}

// Prototype method
User.prototype.getInfo = function(){
    return ` ID : ${this.id} , Name : ${this.name}, Email: ${this.email}`
}


// Create user objects
const userA = new User(1, 'Satyam', 'satyam@anudip.com');
const userB = new User(2, 'Aisha', 'aisha@anudip.com');
const userC = new User(3, 'Gulafasa', 'gulafasa@example.com');

// Print info
console.log(userA.getInfo());
console.log(userB.getInfo());
console.log(userC.getInfo());

// Fetch user using Promise and create User object
async function fetchAndCreateUser(id) {
    try {
        const data = await getUserDataPromise(id);
        const user = new User(data.id, data.name, data.email);
        console.log('Fetched & Created User:', user.getInfo());
    } catch (err) {
        console.log(err);
    }
}

fetchAndCreateUser(4);
