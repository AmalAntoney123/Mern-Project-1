const nodemailer = require('nodemailer');

// Create transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD // Use an app-specific password
  }
});

const sendPasswordResetEmail = async (email, resetToken) => {
  const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

  const mailOptions = {
    from: `"EduVoyage Support" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Password Reset Request',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Reset Your Password</title>
          <style>
            body {
              margin: 0;
              padding: 0;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              background-color: #f9fafb;
              color: #1f2937;
              line-height: 1.5;
            }
            .email-container {
              max-width: 600px;
              margin: 20px auto;
              background-color: #ffffff;
              border-radius: 8px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            .header {
              background-color: #2563eb;
              padding: 24px;
              border-radius: 8px 8px 0 0;
              text-align: center;
            }
            .logo {
              width: 120px;
              height: auto;
              margin-bottom: 16px;
            }
            .header h1 {
              color: white;
              margin: 0;
              font-size: 24px;
              font-weight: 600;
            }
            .content {
              padding: 32px 24px;
              background-color: #ffffff;
            }
            .button {
              display: inline-block;
              padding: 12px 32px;
              background-color: #2563eb;
              color: white !important;
              text-decoration: none;
              border-radius: 6px;
              font-weight: 600;
              font-size: 16px;
              margin: 24px 0;
              box-shadow: 0 2px 4px rgba(37, 99, 235, 0.2);
              transition: background-color 0.2s;
            }
            .button:hover {
              background-color: #1d4ed8;
            }
            .note {
              font-size: 14px;
              color: #6b7280;
              margin-top: 24px;
              padding-top: 16px;
              border-top: 1px solid #e5e7eb;
            }
            .footer {
              padding: 24px;
              text-align: center;
              color: #6b7280;
              font-size: 14px;
              border-top: 1px solid #e5e7eb;
            }
            @media only screen and (max-width: 600px) {
              .email-container {
                margin: 0;
                border-radius: 0;
              }
              .header {
                border-radius: 0;
              }
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <div class="header">
              <img src="https://cdn-icons-png.flaticon.com/512/6681/6681204.png" alt="EduVoyage Logo" class="logo">
              <h1>Password Reset Request</h1>
            </div>

            <div class="content">
              <p>Hello,</p>
              <p>We received a request to reset your password for your EduVoyage account. To proceed with the password reset, please click the button below:</p>
              
              <div style="text-align: center;">
                <a href="${resetUrl}" class="button">Reset Password</a>
              </div>
              
              <p>For security reasons, this password reset link will expire in 1 hour.</p>
              
              <div class="note">
                <p>If you didn't request this password reset, you can safely ignore this email. Your account security is important to us, and your password will remain unchanged.</p>
                <p style="margin-top: 16px;">
                  If you're having trouble clicking the button, copy and paste this URL into your browser:<br>
                  <a href="${resetUrl}" style="color: #2563eb; word-break: break-all;">${resetUrl}</a>
                </p>
              </div>
            </div>

            <div class="footer">
              <p>&copy; ${new Date().getFullYear()} EduVoyage. All rights reserved.</p>
              <p style="margin-top: 8px;">This is an automated message, please do not reply to this email.</p>
            </div>
          </div>
        </body>
      </html>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Password reset email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Error sending password reset email');
  }
};

module.exports = {
  sendPasswordResetEmail
}; 