import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      business,
      email,
      phone,
      website,
      service,
      budget,
      message,
    } = body;

    const { data, error } = await resend.emails.send({
      // TESTING MODE
      // When your domain is verified, replace this with:
      // "Newbrook Digital <hello@newbrookdigital.com>"
      from: "Newbrook Website <onboarding@resend.dev>",

      // During testing Resend only allows your verified email.
      to: ["nictonly@gmail.com"],

      // When the visitor clicks Reply, it goes to them.
      replyTo: email,

      subject: `🚀 New Website Inquiry - ${name}`,

      html: `
      <div style="font-family:Arial,sans-serif;max-width:700px;margin:auto;padding:20px">

        <h1 style="color:#2563eb;">
          New Contact Form Submission
        </h1>

        <hr/>

        <table style="width:100%;border-collapse:collapse">

          <tr>
            <td style="padding:8px;font-weight:bold;">Name</td>
            <td>${name}</td>
          </tr>

          <tr>
            <td style="padding:8px;font-weight:bold;">Business</td>
            <td>${business || "N/A"}</td>
          </tr>

          <tr>
            <td style="padding:8px;font-weight:bold;">Email</td>
            <td>${email}</td>
          </tr>

          <tr>
            <td style="padding:8px;font-weight:bold;">Phone</td>
            <td>${phone || "N/A"}</td>
          </tr>

          <tr>
            <td style="padding:8px;font-weight:bold;">Website</td>
            <td>${website || "N/A"}</td>
          </tr>

          <tr>
            <td style="padding:8px;font-weight:bold;">Service</td>
            <td>${service}</td>
          </tr>

          <tr>
            <td style="padding:8px;font-weight:bold;">Budget</td>
            <td>${budget}</td>
          </tr>

        </table>

        <hr style="margin:30px 0;" />

        <h2>Project Details</h2>

        <p style="line-height:1.8;">
          ${message}
        </p>

        <hr/>

        <p style="font-size:13px;color:#666;">
          This email was automatically generated from the
          Newbrook Digital website.
        </p>

      </div>
      `,
    });

    console.log("========== RESEND RESPONSE ==========");
    console.log(data);
    console.log(error);
    console.log("====================================");

    if (error) {
      return Response.json(
        {
          success: false,
          error,
        },
        {
          status: 500,
        }
      );
    }

    return Response.json({
      success: true,
      message: "Email sent successfully.",
      data,
    });

  } catch (err) {

    console.error("SERVER ERROR:", err);

    return Response.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}