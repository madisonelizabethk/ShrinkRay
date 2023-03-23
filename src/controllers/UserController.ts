import { Request, Response } from 'express';

async function registerUser(req: Request, res: Response): Promise<void> {
  // Implement the registration code
  const { email, password } = req.body as AuthRequest;

  // Check if the user with the given username exists before attempting to add account
  if (!username) {
    res.sendStatus(404); // Not found
    return;
  }


}
