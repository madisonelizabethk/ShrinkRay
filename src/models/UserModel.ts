

async function getUserByUsername(username: string): Promise<User | null> {
  // Get the user by where the username matches the parameter
  // This should also retrieve the links relation
}

async function addNewUser(username: string, passwordHash: string): Promise<User | null> {
  // Add the new user to the database
}
