import { NextFunction, Request, Response } from 'express';
import { readDb } from '../utils/db';

export const getAllHotel = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const hotels = await readDb();
  
      if (!hotels) {
        res.status(404).json({ error: 'Hotel not found' });
        return;
      }
      
      res.json(hotels);
    } catch (error) {
      next(error);
    }
  };