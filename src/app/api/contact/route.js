import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_USER, // deve essere info@zeusviaggi.it
    to: process.env.SMTP_USER, // destinatario (può essere lo stesso)
    replyTo: email,
    subject: `Nuovo messaggio dal sito Zeus Viaggi`,
    text: `
      Nome: ${name}
      Email: ${email}
      Messaggio:
      ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }));
  } catch (error) {
    console.error("Errore invio email:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message })
    );
  }
}
