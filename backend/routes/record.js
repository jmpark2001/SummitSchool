import express from "express";
import db from "../server/db/conn.js";
import { ObjectId } from "mongodb";

const router = express.Router();

// This section will help you get a list of all the records.
router.get("/", async (req, res) => {
  let collection = await db.collection("registrations");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

// This section will help you get a single record by id
router.get("/:id", async (req, res) => {
  let collection = await db.collection("registrations");
  let query = {_id: new ObjectId(req.params.id)};
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

// This section will help you create a new record.
router.post("/", async (req, res) => {
  let newDocument = {
    studentFullName:  req.body.studentFullName,
    parentFullName: req.body.parentFullName,
    studentPhoneNumber: req.body.studentPhoneNumber,
    parentPhoneNumber: req.body.parentPhoneNumber,
    parentEmail: req.body.parentEmail,
    homeAddress: req.body.homeAddress,
    homeAddress2: req.body.homeAddress2,
    homeCity: req.body.homeCity,
    homeState: req.body.homeState,
    homeZip: req.body.homeZip,
    classes: req.body.classes
  };
  let collection = await db.collection("registrations");
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});

// This section will help you update a record by id.
router.patch("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };
  const updates =  {
    $set: {
        studentFullName:  req.body.studentFullName,
        parentFullName: req.body.parentFullName,
        studentPhoneNumber: req.body.studentPhoneNumber,
        parentPhoneNumber: req.body.parentPhoneNumber,
        parentEmail: req.body.parentEmail,
        homeAddress: req.body.homeAddress,
        homeAddress2: req.body.homeAddress2,
        homeCity: req.body.homeCity,
        homeState: req.body.homeState,
        homeZip: req.body.homeZip,
        classes: req.body.classes
    }
  };

  let collection = await db.collection("registrations");
  let result = await collection.updateOne(query, updates);

  res.send(result).status(200);
});

// This section will help you delete a record
router.delete("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };

  const collection = db.collection("registrations");
  let result = await collection.deleteOne(query);

  res.send(result).status(200);
});

export default router;