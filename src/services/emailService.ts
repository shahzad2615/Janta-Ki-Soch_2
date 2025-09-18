import emailjs from '@emailjs/browser';
const SERVICE_ID = 'service_fqnqfik';
const TEMPLATE_ID = 'template_peu0dqc';
const PUBLIC_KEY = 'qhS-SL_fHZwJCTOQC';

emailjs.init(PUBLIC_KEY);
export interface EmailData {
  name: string;
  email: string;
  phone?: string;
  aadhar?: string;
  address?: string;
  category?: string;
  priority?: string;
  description?: string;
  source?: string;
  comments?: string;
  attachments?: File[];
}

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    // Convert attachments to base64
    const attachmentBase64 = await Promise.all(
      data.attachments?.map(file =>
        new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        })
      ) || []
    );

    const templateParams: any = {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone || '',
      aadhar: data.aadhar || '',
      address: data.address || '',
      category: data.category || '',
      priority: data.priority || '',
      description: data.description || '',
      source: data.source || '',
      comments: data.comments || '',
      to_email: 'coderhub230@gmail.com',
    };

    // Add attachments dynamically: attach1, attach2, …
    attachmentBase64.forEach((base64, i) => {
      templateParams[`attachment${i + 1}`] = base64;
    });

    const res = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
    return res.status === 200;
  } catch (err) {
    console.error('Email sending failed:', err);
    return false;
  }
};
