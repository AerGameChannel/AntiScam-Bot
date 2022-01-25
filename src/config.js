import { join } from 'path';
import configData from '../config.json';
import __dirname from './dirname.js';

const defaultEmbedOptions = {
  description: 'Scam link blocked!',
  color: 'RED',
};

const config = {
  token: configData.token,
  blocksPath: join(__dirname, '..', 'blocks.txt'),
  logChannel: configData.logChannel || null,
  action: configData.action || 'DELETE',
  actionReason: configData.actionReason || 'AntiScam',
  embedOptions: configData.embedOptions || defaultEmbedOptions,
  actionErrorDelete: configData.actionErrorDelete || 'Error occured. Message not deleted or not found',
  actionErrorBan: configData.actionErrorBan || 'Error occured. User likely not banned! (Perm error?)',
};

export { config as default };
