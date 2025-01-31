import IUser from "../models/IUser";
import {User} from "../models/User";

export const registerUser = async (user: User) => {

    try {
        const fetchedUser = await IUser.findOne({email: user.email});

        if (!fetchedUser) {
            // const encryptedPassword = await bcrypt.hash(password, 10);
            const newUser = new User(user.name, user.email, user.password, user.residencies, user.inquiries);

            await IUser.create(newUser);
            return newUser;
        } else {
            throw new Error(`User already exists`);
        }
    } catch (error) {
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
}

export const loginUser = async (user: User) => {
    try {
        const fetchedUser = await IUser.findOne({email: user.email});

        if(fetchedUser){
            return fetchedUser;
        }

        return null;
    } catch (error) {
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
}

export const updateUser = async (id:string, user: User) => {
    try{
        await IUser.updateOne({_id:id}, user);
        return user;
    }catch (error){
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
}

export const addUserResidency = async (id:string, residencyId: string | any ) => {
    try{
        const updatedUser = await IUser.findByIdAndUpdate(id,
            {
                $push: {residencies: residencyId},
            },
            {new: true}
        );
        if (!updatedUser) {
            throw new Error(`User with id : ${id} not found`);
        }
    }catch (error){
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
}

