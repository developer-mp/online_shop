const Fair = require("../models/Fair");
const { verifyTokenAndAdmin } = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newFair = new Fair(req.body);

  try {
    const savedFair = await newFair.save();
    res.status(200).json(savedFair);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedFair = await Fair.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedFair);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Fair.findByIdAndDelete(req.params.id);
    res.status(200).json("Fair has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET FAIR

router.get("/find/:id", async (req, res) => {
  try {
    const fair = await Fair.findById(req.params.id);
    res.status(200).json(fair);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL FAIRS

router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let fairs;

    if (qNew) {
      fairs = await Fair.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      fairs = await Fair.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      fairs = await Fair.find();
    }

    res.status(200).json(fairs);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
