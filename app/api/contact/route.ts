import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("Missing RESEND_API_KEY");

      return Response.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        {
          status: 500,
        }
      );
    }

    const resend = new Resend(apiKey);

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
      from: "Newbrook Website <onboarding@resend.dev>",

      to: ["nictonly@gmail.com"],

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
            <td><strong>Name</strong></td>
            <td>${name}</td>
          </tr>

          <tr>
            <td><strong>Business</strong></td>
            <td>${business || "N/A"}</td>
          </tr>

          <tr>
            <td><strong>Email</strong></td>
            <td>${email}</td>
          </tr>

          <tr>
            <td><strong>Phone</strong></td>
            <td>${phone || "N/A"}</td>
          </tr>

          <tr>
            <td><strong>Website</strong></td>
            <td>${website || "N/A"}</td>
          </tr>

          <tr>
            <td><strong>Service</strong></td>
            <td>${service}</td>
          </tr>

          <tr>
            <td><strong>Budget</strong></td>
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
          Sent automatically from NewBrook Digital.
        </p>

      </div>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);

      return Response.json(
        {
          success: false,
          message: "Unable to send email.",
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

  } catch (error) {
    console.error("Server Error:", error);

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