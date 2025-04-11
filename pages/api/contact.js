import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Todos los campos son obligatorios." });
    }

    try {
      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: process.env.EMAIL_USER, // Configurado en .env.local
          pass: process.env.EMAIL_PASS, // Configurado en .env.local
        },
      });

      const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `Nuevo mensaje de ${name}`,
        text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
      };

      await transporter.sendMail(mailOptions);

      return res.status(200).json({ success: "Mensaje enviado correctamente." });
    } catch (error) {
      console.error("Error al enviar el correo: ", error);
      return res.status(500).json({ error: "Error al enviar el mensaje." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Método ${req.method} no permitido.` });
  }
}
