
import {Residency} from "../models/Residency";
import IResidency from "../models/IResidency";

export const createResidency = async (residency : Residency)=>{
    try{
        await IResidency.create(residency);
        return residency;
    }catch (error){
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
}

export const getResidencies = async ()=>{
    try{
        const residencies = await IResidency.find();
        return residencies;
    }catch (error){
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
}

export const getResidencyById = async (id:string) => {
    try{
        const residency = await IResidency.findById(id);
        return residency;
    }catch (error){
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
}

export const getResidenciesByUserId = async (id:string) => {
    try{
        const residencies = await IResidency.find({owner: id}).populate("owner", "name email");
        return residencies;
    }catch (error){
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
}

export const updateResidency = async (id:string, residency: Residency) => {
    try{
        let updatedResidency = await IResidency.findByIdAndUpdate(id, residency, {new: true});
        if (!updatedResidency) {
            throw new Error(`Residency with id ${id} not found`);
        }
        return updatedResidency;
    }catch (error){
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
}

export const deleteResidency = async (id:string) => {
    try{
        const deletedResidency = await IResidency.findByIdAndDelete(id);
        if (!deletedResidency) {
            throw new Error(`Residency with id ${id} not found`);
        }
        return deletedResidency;
    }catch (error){
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
}


















