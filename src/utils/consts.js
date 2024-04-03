import nodemailer from 'nodemailer';
import { accountUser } from '../user.js';

export const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false,
  auth: {
    user: accountUser.user,
    pass: accountUser.pass,
  },
});

export const getMessage = (info) => {
  const previewURL = nodemailer.getTestMessageUrl(info);
  return previewURL;
};
