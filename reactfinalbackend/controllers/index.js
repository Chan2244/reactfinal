const mongodb = require("../db/connect");
const objectId = require("mongodb").ObjectId;


const awesomeFunction = (req, res, next) => {
    res.json("Welcome DnD and Pathfinder nerds!");
};

const tooeleTechFunction = (req, res) => {
    res.json("anyone seen the druid!");
};

const getAllClasses = async (req, res) => {
    try {
        const result = await mongodb.getDb().db().collection("classes").find();
        result.toArray().then((lists) => {
            res.setHeader("Content-Type", "application/json");
            res.status(200).json(lists);
        });
    } catch (error) {
        res.status(500).json(error);
    }
  
};

//GET single class
const getSingleClasses = async (req, res) => {
    try {
        const userId = new ObjectId(req.params.id);
        const result = await mongodb
        .getDb()
        .db()
        .collection("classes")
        .find({ _id: userId });
    result.toArray().then((lists) => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(list[0]);
    });
    } catch (error) {
        res.status(500).json(error);
    }
};

// CREATE classes
const createClasses = async (req, res) => {
    try {
        const classes = {
          className: req.body.className,
          hitpoints: req.body.hitpoints,
          wealth: req.body.wealth,
          classAlignment: req.body.classAlignment,
        }

        const response = await mongodb
        .getDb()
        .db()
        .collection("classes")
        .insertOne(classes);
    if (response.acknowledge) {
        res.status(201).json(response);
    } else {
        res
        .status(500)
        .json(
            response.error || "Some error occurred while creating the class."
        );
    }
    } catch (error) {
        res.status(500).json(error);
    }
};

// update one class
const updateClasses = async (req, res) => {
    try {
        const userId = new ObjectId(req.params.id);
        const classes = {
            className: req.body.className,
            hitpoints: req.body.hitpoints,
            wealth: req.body.wealth,
            classAlignment: req.body.classAlignment,
        };

        const response = await mongodb
        .getDb()
        .db()
        .collection("classes")
        .replaceOne({ _id: userId}, classes);
    if (response.acknowledge) {
        res.status(204).json(response);
    } else {
        res
        .status(500)
        .json(
            response.error || "Some error occurred while updating the classes."
        );
    }
    }catch (error) {
        res.status(500).json(error);
    }
};

// delete one class
const deleteClasses = async (req, res) => {
    try{
        const userId = new ObjectId(req.params.id);
        const response = await mongodb
        .getDb()
        .db()
        .collection("classes")
        .deleteOne({ _id: userId}, true);
    console.log(response);
    if (response.acknowledge) {
        res.status(200).send(response);
    } else {
        res
        .status(500)
        .json(
            response.error || "Some error occured while deleting the class."
        );
    }
    } catch (error) {
        res.status(500).json(error);
    }
};

const getAllWeapons = async (req, res) => {
    try {
        const result = await mongodb.getDb().db().collection("weapons").find();
        result.toArray().then((lists) => {
            res.setHeader("Content-Type", "application/json");
            res.status(200).json(lists);
        });
    } catch (error) {
        res.status(500).json(error);
    }
  
};

//GET single class
const getSingleWeapons = async (req, res) => {
    try {
        const userId = new ObjectId(req.params.id);
        const result = await mongodb
        .getDb()
        .db()
        .collection("weapons")
        .find({ _id: userId });
    result.toArray().then((lists) => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(list[0]);
    });
    } catch (error) {
        res.status(500).json(error);
    }
};

// CREATE classes
const createWeapons = async (req, res) => {
    try {
        const weapons = {
         WeaponName: req.body.weaponName,
         WeaponDamage: req.body.weaponDamage,
         WeaponCost: req.body.weaponCost,
         WeaponClass: req.body.weaponClass,
         WeaponType: req.body.weaponType,
        }

        const response = await mongodb
        .getDb()
        .db()
        .collection("weapons")
        .insertOne(weapons);
    if (response.acknowledge) {
        res.status(201).json(response);
    } else {
        res
        .status(500)
        .json(
            response.error || "Some error occurred while creating the weapon."
        );
    }
    } catch (error) {
        res.status(500).json(error);
    }
};

// update one class
const updateWeapons = async (req, res) => {
    try {
        const userId = new ObjectId(req.params.id);
        const classes = {
            WeaponName: req.body.weaponName,
         WeaponDamage: req.body.weaponDamage,
         WeaponCost: req.body.weaponCost,
         WeaponClass: req.body.weaponClass,
         WeaponType: req.body.weaponType,
        };

        const response = await mongodb
        .getDb()
        .db()
        .collection("weapons")
        .replaceOne({ _id: userId}, weapons);
    if (response.acknowledge) {
        res.status(204).json(response);
    } else {
        res
        .status(500)
        .json(
            response.error || "Some error occurred while updating the weapons."
        );
    }
    }catch (error) {
        res.status(500).json(error);
    }
};

// delete one class
const deleteWeapons = async (req, res) => {
    try{
        const userId = new ObjectId(req.params.id);
        const response = await mongodb
        .getDb()
        .db()
        .collection("weapons")
        .deleteOne({ _id: userId}, true);
    console.log(response);
    if (response.acknowledge) {
        res.status(200).send(response);
    } else {
        res
        .status(500)
        .json(
            response.error || "Some error occured while deleting the weapon."
        );
    }
    } catch (error) {
        res.status(500).json(error);
    }
};

const getAllMonsters = async (req, res) => {
    try {
        const result = await mongodb.getDb().db().collection("monsters").find();
        result.toArray().then((lists) => {
            res.setHeader("Content-Type", "application/json");
            res.status(200).json(lists);
        });
    } catch (error) {
        res.status(500).json(error);
    }
  
};

//GET single class
const getSingleMonsters = async (req, res) => {
    try {
        const userId = new ObjectId(req.params.id);
        const result = await mongodb
        .getDb()
        .db()
        .collection("monster")
        .find({ _id: userId });
    result.toArray().then((lists) => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(list[0]);
    });
    } catch (error) {
        res.status(500).json(error);
    }
};

// CREATE classes
const createMonsters = async (req, res) => {
    try {
        const monster = {
          MonsterName: req.body.monsterName,
          MonsterType: req.body.monsterType,
          MonsterClimate: req.body.monsterClimate,
          MonsterTerrrain: req.body.monsterTerrain,
          MonsterXp: req.body.monsterXp,
        }

        const response = await mongodb
        .getDb()
        .db()
        .collection("monsters")
        .insertOne(monster);
    if (response.acknowledge) {
        res.status(201).json(response);
    } else {
        res
        .status(500)
        .json(
            response.error || "Some error occurred while creating the monsters."
        );
    }
    } catch (error) {
        res.status(500).json(error);
    }
};

// update one class
const updateMonsters = async (req, res) => {
    try {
        const userId = new ObjectId(req.params.id);
        const monsters = {
           MonsterName: req.body.monsterName,
          MonsterType: req.body.monsterType,
          MonsterClimate: req.body.monsterClimate,
          MonsterTerrrain: req.body.monsterTerrain,
          MonsterXp: req.body.monsterXp,
        };

        const response = await mongodb
        .getDb()
        .db()
        .collection("monsters")
        .replaceOne({ _id: userId}, classes);
    if (response.acknowledge) {
        res.status(204).json(response);
    } else {
        res
        .status(500)
        .json(
            response.error || "Some error occurred while updating the monsters."
        );
    }
    }catch (error) {
        res.status(500).json(error);
    }
};

// delete one class
const deleteMonsters = async (req, res) => {
    try{
        const userId = new ObjectId(req.params.id);
        const response = await mongodb
        .getDb()
        .db()
        .collection("monsters")
        .deleteOne({ _id: userId}, true);
    console.log(response);
    if (response.acknowledge) {
        res.status(200).send(response);
    } else {
        res
        .status(500)
        .json(
            response.error || "Some error occured while deleting the Monsters."
        );
    }
    } catch (error) {
        res.status(500).json(error);
    }
};


module.exports = { awesomeFunction, tooeleTechFunction, getAllClasses, getSingleClasses, createClasses, updateClasses, deleteClasses, getAllWeapons, getSingleWeapons, createWeapons, updateWeapons, deleteWeapons, getAllMonsters, getSingleMonsters, createMonsters, updateMonsters, deleteMonsters  };