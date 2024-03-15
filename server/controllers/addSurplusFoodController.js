const Surplus = require('../models/surplusModel');

exports.createSurplusFood = async (req, res) => {
    try {
        const { orgName, description, foodQuantityAsPerson, cookingTime, imgFood, addressPickup } = req.body;
        
        const surplus = await Surplus.create({
            orgName,
            description,
            foodQuantityAsPerson,
            cookingTime,
            imgFood,
            addressPickup
        });

        res.status(201).json({
            success: true,
            message: "Surplus food added successfully",
            surplus
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

exports.getAllSurplusFood = async (req, res) => {
    try {
        const surplusFoods = await Surplus.find();

        res.status(200).json({
            success: true,
            count: surplusFoods.length,
            surplusFoods
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

exports.getSurplusFoodById = async (req, res) => {
    try {
        const surplusFood = await Surplus.findById(req.params.id);

        if (!surplusFood) {
            return res.status(404).json({
                success: false,
                message: "Surplus food not found"
            });
        }

        res.status(200).json({
            success: true,
            surplusFood
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};
