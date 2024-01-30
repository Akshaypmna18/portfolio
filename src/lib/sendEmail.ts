"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (data: any): Promise<any> => {
  const { email, message } = data;
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "akshaypmnacoc@gmail.com",
    reply_to: email,
    subject: "Email from Portfolio",
    text: message,
  });
};

export default sendEmail;
