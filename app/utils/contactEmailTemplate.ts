export const contactEmailTemplate = ({
  name,
  email,
  message,
}: {
  name: string
  email: string
  message: string
}) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form Submission</title>
    <style>
      body, table, td, a {
        text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        font-family: 'Tahoma', sans-serif;
      }
      table, td {
        mso-table-rspace: 0pt;
        mso-table-lspace: 0pt;
      }
      img {
        -ms-interpolation-mode: bicubic;
      }
      body {
        margin: 0;
        padding: 0;
        width: 100%;
      }
      h1 {
        font-size: 1.875rem;
        font-weight: 400;
        color: #12121c;
      }
      p {
        font-size: 1.125rem;
        color: #12121c;
        line-height: 1.5;
      }
      strong {
        font-size: 1.2375rem;
      }
      table {
        border-collapse: collapse;
        width: 100%;
      }
      .email-header {
        background-color: #eee2f3;
        border-bottom: 0.125rem solid #ae4971;
        padding: 1.25rem;
        text-align: center;
      }
      .email-body {
        padding: 1.25rem;
      }
      .email-body p:last-child {
        margin-top: 1.25rem;
      }
      .email-footer {
        background-color: #f4f4f4;
        color: #888888;
        padding: 1.25rem;
        text-align: center;
        font-size: 0.75rem;
      }
    </style>
  </head>
  <body>
    <table role="presentation">
      <tr>
        <td class="email-header">
          <h1>Contact Form Submission</h1>
        </td>
      </tr>
      <tr>
        <td class="email-body">
          <p><strong>Name: </strong>${name}</p>
          <p><strong>Email: </strong>${email}</p>
          <p><strong>Message: </strong>${message}</p>
        </td>
      </tr>
      <tr>
        <td class="email-footer">
          <p><a href="https://rileyhoffman.com" style="color: #0073e6; text-decoration: none;">rileyhoffman.com</a></p>
        </td>
      </tr>
    </table>
  </body>
  </html>`
