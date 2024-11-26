'use server';

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_KEY,
    },
});

export const SendEmail = async (prevState: any, formData: FormData) => {
    
    try {
        const { name, email, subject } = Object.fromEntries(formData);
        
        if (!name || !email || !subject) {
            return { message: '모든 필드를 입력해주세요' };
        }

        await transporter.sendMail({
            from: process.env.GMAIL_USER, // 보내는 이메일
            to: `${email}`, // 받는 이메일
            subject: `문의하기: ${name}(${email})`,
            html: `<h1>문의 내용</h1>
                   <p>${subject}</p>
                  `,
        });
        
        return { message: '이메일 전송 성공' };
    } catch (error) {
        return { message: '이메일 전송 실패', error: error };
    }

};
