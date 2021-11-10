import { join } from 'path';
import configData from '../config.json';
import dotenv from 'dotenv';
import __dirname from './dirname.js';

dotenv.config();

const defaultEmbedOptions = {
  description: 'Scam link blocked!',
  color: 'RED',
};

const config = {
  token: process.env.TOKEN,
  blocksPath: join(__dirname, '..', 'blocks.txt'),
  logChannel: configData.logChannel || null,
  action: configData.action || 'DELETE',
  actionReason: configData.actionReason || 'AntiScam',
  embedOptions: configData.embedOptions || defaultEmbedOptions,
};

export { config as default };
