import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    // ✅ crea il transporter (usa un account reale)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "me@gmail.com",
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
      },
    });

    // Configura il trasporto SMTP di Mailtrap
    // const transporter = nodemailer.createTransport({
    //   host: "sandbox.smtp.mailtrap.io",
    //   port: 2525,
    //   auth: {
    //     user: "3a250ff027b841",
    //     pass: "10607b30f1dda7",
    //   },
    // });

    // ✅ definisci il contenuto della mail
    await transporter.sendMail({
      from: '"Sito Zeus Viaggi" <noreply@zeusviaggi.test>', // un mittente fittizio
      to: "gionnymiele@gmail.com", // l’indirizzo a cui vuoi ricevere su Mailtrap
      subject: `Nuovo messaggio da ${name}`,
      html: `
        <h3>Hai ricevuto un nuovo messaggio dal sito</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefono:</strong> ${phone || "Non specificato"}</p>
        <p><strong>Messaggio:</strong><br>${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Errore invio email:", error);
    return Response.json(
      { success: false, error: "Errore invio email" },
      { status: 500 }
    );
  }
}
