import { env } from "@/env.mjs";
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: env?.NODEMAILER_EMAIL || "",
    pass: env?.NODEMAILER_PW || "",
  },
});

export const mailOptions = {
  from: env?.NODEMAILER_EMAIL || "",
  to: env?.NODEMAILER_EMAIL || "",
};
