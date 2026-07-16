import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return Response.json(
        {
          success: false,
          message: "RESEND_API_KEY is not configured.",
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

    // ===================================================
    // EMAIL TO YOU (Business Notification)
    // ===================================================

    const adminEmail = await resend.emails.send({
      from: "Newbrook Website <onboarding@resend.dev>",

      // Change to your email
      to: ["nictonly@gmail.com"],

      replyTo: email,

      subject: `🚀 New Strategy Request - ${name}`,

      html: `
      <div style="font-family:Arial,sans-serif;max-width:700px;margin:auto;padding:30px;">

        <h1 style="color:#2563eb;">
          New Contact Form Submission
        </h1>

        <hr/>

        <table style="width:100%;border-collapse:collapse">

          <tr>
            <td style="padding:10px;"><strong>Name</strong></td>
            <td>${name}</td>
          </tr>

          <tr>
            <td style="padding:10px;"><strong>Business</strong></td>
            <td>${business || "N/A"}</td>
          </tr>

          <tr>
            <td style="padding:10px;"><strong>Email</strong></td>
            <td>${email}</td>
          </tr>

          <tr>
            <td style="padding:10px;"><strong>Phone</strong></td>
            <td>${phone || "N/A"}</td>
          </tr>

          <tr>
            <td style="padding:10px;"><strong>Website</strong></td>
            <td>${website || "N/A"}</td>
          </tr>

          <tr>
            <td style="padding:10px;"><strong>Service</strong></td>
            <td>${service}</td>
          </tr>

          <tr>
            <td style="padding:10px;"><strong>Budget</strong></td>
            <td>${budget}</td>
          </tr>

        </table>

        <hr style="margin:30px 0;" />

        <h2>Project Details</h2>

        <p style="line-height:1.8;">
          ${message || "No message provided."}
        </p>

      </div>
      `,
    });

    // ===================================================
    // EMAIL TO CLIENT
    // ===================================================

    const clientEmail = await resend.emails.send({
      from: "Newbrook Website <onboarding@resend.dev>",

      to: [email],

      subject: "Thank you for contacting NewBrook Digital!",

      html: `
      <div style="font-family:Arial,sans-serif;max-width:700px;margin:auto;padding:30px;">

        <h1 style="color:#2563eb;">
          Thank You, ${name}!
        </h1>

        <p style="font-size:16px;line-height:1.8;">
          We've received your request for a free strategy session.
        </p>

        <p style="font-size:16px;line-height:1.8;">
          Our team is reviewing your project and will contact you within one business day.
        </p>

        <hr style="margin:30px 0;" />

        <h2>What Happens Next?</h2>

        <ul style="line-height:2;">
          <li>✅ We review your project.</li>
          <li>✅ We prepare a growth strategy.</li>
          <li>✅ We contact you.</li>
          <li>✅ We discuss the best solution for your business.</li>
        </ul>

        <div style="margin-top:35px;">

          <a
            href="https://newbrook.digital/resources"
            style="
              background:#2563eb;
              color:white;
              text-decoration:none;
              padding:14px 28px;
              border-radius:8px;
              display:inline-block;
              font-weight:bold;
            "
          >
            Explore Free Resources
          </a>

        </div>

        <hr style="margin:40px 0;" />

        <p style="font-size:15px;color:#666;">
          Thank you for choosing
          <strong> NewBrook Digital</strong>.
        </p>

        <p style="font-size:14px;color:#888;">
          Website: https://newbrook.digital
        </p>

      </div>
      `,
    });

    // ===================================================
    // CHECK FOR ERRORS
    // ===================================================

    if (adminEmail.error) {
      console.error(adminEmail.error);

      return Response.json(
        {
          success: false,
          error: adminEmail.error,
        },
        {
          status: 500,
        }
      );
    }

    if (clientEmail.error) {
      console.error(clientEmail.error);

      return Response.json(
        {
          success: false,
          error: clientEmail.error,
        },
        {
          status: 500,
        }
      );
    }

    return Response.json({
      success: true,
      message: "Emails sent successfully.",
    });

  } catch (error) {

    console.error("SERVER ERROR:", error);

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