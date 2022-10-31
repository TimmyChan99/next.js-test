// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { username, password } = req.body;

  if (username === process.env.USER1 && password === process.env.PASSWORD1) {
    res.status(200).json({ status: 'success' });
  }

  if (username === process.env.USER2 && password === process.env.PASSWORD2) {
    res.status(200).json({ status: 'success' });
  }

  if (username === process.env.USER3 && password === process.env.PASSWORD3) {
    res.status(401).json({ status: 'failed', message: 'Ce compte a été bloqué' });
  } else {
    res.status(401).json({ status: 'failed', message: 'Informations de connexion invalides' });
  }

}
