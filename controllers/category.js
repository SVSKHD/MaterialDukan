const Category = require("../models/category");
const Slugify = require("slugify");

exports.create = async (req,res) => {
  try {
    const { name, description } = req.body;
    res.json(await new Category({name , slug:Slugify(name) , description }).save())
  } catch (error) {
    res.status(400).send("Category Creation Failed")
  }
};

exports.getAll =async (req,res) => {
  const Categories = await Category.find()
  res.json(Categories)
};

exports.getCategory = (req,res) => {

};

exports.update = async (req,res) => {
  const { name , description} = req.body;
  
    const updated = await Category.findOneAndUpdate(
      { slug: req.params.slug },
      { name, slug: Slugify(name) , description},
      { new: true }
    );
    res.json(updated);

}

exports.RemoveCategory = async (req,res) => {
  try {
    const deleted = await Category.findOneAndDelete({ slug: req.params.slug });
    res.json(deleted);
  } catch (err) {
    res.status(400).send("Category delete failed");
  }
};
