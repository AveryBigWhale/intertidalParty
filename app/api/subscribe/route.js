import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    // 從請求中解析 JSON 資料，取得 email 欄位
    const { email } = await request.json();
    if (!email) {
      return new Response(JSON.stringify({ error: 'Email is required' }), {
        status: 400,
      });
    }

    // 建立 nodemailer 傳送器，使用環境變數設定 SMTP 資料
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // 例如: 'smtp.gmail.com'
      port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587,
      secure: process.env.SMTP_PORT === '465', // 465 為 true，其餘則 false
      auth: {
        user: process.env.SMTP_USER, // 你的 SMTP 帳號
        pass: process.env.SMTP_PASS, // 你的 SMTP 密碼
      },
    });

    // 設定預先撰寫好的郵件內容
    const mailOptions = {
      from: `"Your Site Name" <${process.env.SMTP_USER}>`,
      to: email,
      subject: '感謝您訂閱電子報',
      html: `
        <h1>歡迎訂閱！</h1>
        <p>感謝您訂閱我們的電子報，未來我們將定期寄送最新消息與專業資訊給您。</p>
      `,
    };

    // 寄送郵件
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
    });
  }
}