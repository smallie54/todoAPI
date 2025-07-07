import { Task } from "../models/task.js";


export const createTask = async (req, res) => {
  try {
    const { title, description, completed } = await req.body;
    const altTask = await Task.create({
      title,
      description,
      completed,
    });
    return res.status(201).json(altTask);
  } catch (error) {
    return res.status(400).json({ error: "task not created" });
  }
};

export const listTask = async (req, res) => {
  try {
    const getTask = await Task.find();
    return res.status(200).json(getTask);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const getTask = async (req, res) => {
  try {
    const { id } = await req.params;
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ message: "task not found" });
    }
    return res.status(200).json(task);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = await req.params;
    const task = await Task.findByIdAndDelete(id);

    if (!task) {
      return res.status(404).json({ message: "task not found" });
    }
    return res.status(201).json({ message: "successfully deleted" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { title, description, completed } = await req.body;
    const { id } = await req.params;
    const task = await Task.findByIdAndUpdate(id, {
      title,
      description,
      completed,
    },
    {new: true}
  );
  return res.status(200).json(task)
  } catch (error) {
    return res.status(400).json({message: error.message})
  }
};


