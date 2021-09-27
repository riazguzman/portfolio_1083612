const Message = require("../models/message");

const postComment = async (req, res) => {
  const { name, email, title, content } = req.body;
  try {
    let message = new Message({ name, email, title, content });
    message.save();
    res.json(message);
  } catch (err) {
    res.status(400).json({
      err,
    });
  }
};

const getComments = async (req, res) => {
  try {
    const comments = await Message.find();
    res.json(comments);
  } catch (err) {
    console.error(err);
  }
};

module.exports = { postComment, getComments };
