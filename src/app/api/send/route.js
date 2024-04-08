import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
  var { url } = await req.json();

  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["viktorhrimli101@gmail.com", "workviktornew@gmail.com"],
      subject: "New custumer",
      html: `<img src=${url} width="300" height="250" alt="surprise mazafaka" />`,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
