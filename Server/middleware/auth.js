import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
  const token = req.headers.authorization;
  try {
    jwt.verify(token, process.env.JWT_SECRET);
    // res.json({decoded});
    next();

  } catch(err) {
    res.json({ success: false, message: err.message });
  }
};

export default auth;