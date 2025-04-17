const users = [];
let idCounter = 1;

class User {
  constructor(email, password) {
    this.id = idCounter++;
    this.email = email;
    this.password = password;
  }

  static findByEmail(email) {
    return users.find(user => user.email === email);
  }

  static findById(id) {
    return users.find(user => user.id === id);
  }

  static getAll() {
    return users.map(user => {
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    });
  }

  static create(user) {
    users.push(user);
    return user;
  }

  static delete(id) {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
      return users.splice(index, 1)[0];
    }
    return null;
  }
}

module.exports = User;