// Data Access Object
import model from "./model.js";

export const createModule = async (module) => {
  return await model.create(module);
};
export const findAllModules = (cid) => model.find({ course: cid });
export const findModuleById = (moduleId) => model.findById(moduleId);
export const updateModule = (moduleId, module) =>
  model.updateOne({ _id: moduleId }, { $set: module });
export const deleteModule = (moduleId) => model.deleteOne({ _id: moduleId });
