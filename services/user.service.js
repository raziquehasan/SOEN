import User from "../models/user.models.js"; 

export const createUser = async ({ email, password }) => {
    if (!email || !password) {
        throw new Error("Email and password are required");
    }

    // Use the hashPassword method from User model
    const hashedPassword = await User.hashPassword(password);

    // Save user to database
    const user = await User.create({
        email,
        password: hashedPassword,
    });

    return user;
};