interface User {
  id: number;
  name: string;
  email: string;
}

function printUser(user: User) {
  console.log(`ID: ${user.id}`);
  console.log(`Name: ${user.name}`);
  console.log(`Email: ${user.email}`);
}

printUser({
  id: 1,
  name: "John Doe",
  email: "johndoe@example.com",
});
