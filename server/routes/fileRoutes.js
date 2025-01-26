const express = require("express");
const mongoose = require("mongoose");
const File = require("../models/File"); // Assuming your file schema is in the 'models' folder
const User = require("../models/User"); // Assuming your user schema is in the 'models' folder
const router = express.Router();

// Create a new file
router.post("/files", async (req, res) => {
  try {
    const { name, description, hash, userAddress } = req.body;

    const newFile = new File({
      name,
      description,
      hash,
      userAddress,
    });


    await newFile.save();
    res.status(201).json(newFile);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all files
router.get("/files", async (req, res) => {
  try {
    const files = await File.find(); 
    res.status(200).json(files);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/files/:id", async (req, res) => {
  try {
    const { id } = req.params; // Extract the file ID from the route parameter

    // Find the file by its ID
    const file = await File.findById(id);

    if (!file) {
      return res.status(404).json({ message: "File not found" });
    }

    res.status(200).json(file); // Return the file details
  } catch (err) {
    console.error("Error fetching file by ID:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/userFiles", async (req, res) => {
    try {
      const { userAddress } = req.query; // Get user address from query parameters
  
      if (!userAddress) {
        return res.status(400).json({ error: "User address is required" });
      }      
      // Find all files associated with the user's ID (User._id)
      const files = await File.find({ userAddress:  userAddress });
  
      if (files.length === 0) {
        return res.status(404).json({ message: "No files found for this user" });
      }
  
      // Return all the files associated with the user
      res.status(200).json(files);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

// Update a file by ID
router.put("/files/:id", async (req, res) => {
  try {
    const { name, description, hash, User } = req.body;

    const file = await File.findByIdAndUpdate(
      req.params.id,
      { name, description, hash, User },
      { new: true }
    );

    if (!file) {
      return res.status(404).json({ message: "File not found" });
    }

    res.status(200).json(file);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a file by ID
router.delete("/files/:id", async (req, res) => {
  try {
    const file = await File.findByIdAndDelete(req.params.id);

    if (!file) {
      return res.status(404).json({ message: "File not found" });
    }

    res.status(200).json({ message: "File deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
