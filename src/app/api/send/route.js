import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
  var { img } = await req.json();

  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["viktorhrimli101@gmail.com"],
      subject: "Hello world",
      attachments: [
        {
          path: "",
          filename: "invoice.pdf",
        },
      ],
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
