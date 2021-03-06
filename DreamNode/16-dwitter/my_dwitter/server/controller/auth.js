import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import * as authRepository from '../data/data-auth.js';
import { config } from '../config.js';

/*
const secret = 'FMowkoto!EHSm*K#DqJZAJTTQYhdUt#O';
const jwtExpiresInDay = '2d';
const bcryptSaltRound = 10;
*/

export async function signup(req, res, next) {
  const { username, password, name, email, url } = req.body;
  const isExist = await authRepository.findByusername(username);
  if (isExist) {
    return res
      .status(400)
      .json({ message: `${username} is already exist username.` });
  }
  const hashPassword = bcrypt.hashSync(password, config.bcrypt.saltRounds);
  const userId = await authRepository.create({
    username,
    password: hashPassword,
    name,
    email,
    url,
  });
  const token = createJwt(userId);
  return res.status(201).json({ userId, token });
}

export async function login(req, res, next) {
  const { username, password } = req.body;
  const user = await authRepository.findByusername(username);
  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password!' });
  }
  const checkPassword = bcrypt.compareSync(password, user.password);
  if (!checkPassword) {
    return res.status(401).json({ message: 'Invalid username or password!' });
  }
  const token = createJwt(user.id);
  return res.status(200).json({ userId: user.id, token });
}

function createJwt(id) {
  const token = jwt.sign({ id }, config.jwt.secretKey, {
    expiresIn: config.jwt.expiresInSec,
  });
  return token;
}

export async function me(req, res, next) {
  const user = await authRepository.findById(req.userId);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  return res.status(200).json({ token: req.token, username: user.username });
}
