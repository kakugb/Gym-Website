export const dummyUsers = [
  { username: "admin", password: "admin123", role: "admin" },
  { username: "instructor", password: "instructor123", role: "instructor" },
  { username: "student", password: "student123", role: "student" },
];

export const loginUser = (username, password) => {
  const user = dummyUsers.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  }
  return null;
};

export const logoutUser = () => {
  localStorage.removeItem("user");
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
