import IUser from "../models/IUser";
import {User} from "../models/User";

export const registerUser = async (user : User) => {

    try {
        const fetchedUser = await IUser.findOne({email: user.email});

        if (!fetchedUser) {
            // const encryptedPassword = await bcrypt.hash(password, 10);

            const newUser = new User(user.name, user.email, user.password, user.residencies, user.inquiries);

            await IUser.create(newUser);
            return newUser;
        }else{
            console.log(`User already exists`);
        }
    } catch (error) {
        console.log(`Error occurred: ${error}`);
    }
}