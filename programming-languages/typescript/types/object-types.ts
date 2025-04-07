const user = {
  name: "Alice",
  age: 30,
  isActive: true,
};

function printUserInfo(user: {
  name: string;
  age: number;
  isActive: boolean;
  email?: string; // optional property
}) {
  console.log(`Name: ${user.name}`);
  console.log(`Age: ${user.age}`);
  console.log(`Active: ${user.isActive}`);
  if (user.email) {
    console.log(`Email: ${user.email}`);
  }
}

printUserInfo(user);
