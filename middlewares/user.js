
export default function isStudent(req, res, next) {
      return res.status(401).json({ error: 'Unauthorized' });

    next();
  }
  