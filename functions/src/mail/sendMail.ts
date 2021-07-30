import { HttpsError } from 'firebase-functions/lib/providers/https';

import { createTransport } from 'nodemailer';

import { CONFIG, EUROPE_128MB } from '../functions';

export default EUROPE_128MB.https.onCall(async (data?: { name?: string, email?: string, message?: string }) => {
    if (data === undefined || data === null) {
        throw new HttpsError('invalid-argument', 'Invalid payload.');
    }

    if (data.name === undefined || data.name === '') {
        throw new HttpsError('invalid-argument', 'Invalid "name".');
    }

    if (data.email === undefined || data.email === '' || !/^[^\s@]+@[^\s@]+$/.test(data.email)) {
        throw new HttpsError('invalid-argument', 'Invalid "email".');
    }

    if (data.message === undefined || data.message === '') {
        throw new HttpsError('invalid-argument', 'Invalid "message".');
    }

    try {
        await createTransport(CONFIG.smtp).sendMail({
            from: { name: 'aferreira.xyz', address: 'me@aferreira.xyz' },
            to: { name: 'Álvaro Ferreira', address: 'me@aferreira.xyz' },

            cc: { name: data.name, address: data.email },
            replyTo: { name: data.name, address: data.email },

            subject: 'Contact Request (via https://aferreira.xyz/)',
            text: data.message
        });

        return { success: true };
    } catch (e) {
        console.error(e);

        throw new HttpsError('internal', 'Failed sending mail.');
    }
});
