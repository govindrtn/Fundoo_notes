import { token } from 'morgan'

const nodemailer = require('nodemailer')
const { google } = require('googleapis')


const CLIENT_ID = '435843099448-u7varh96t18170dmu5jmol6i2anmgf0l.apps.googleusercontent.com'
const CLIENT_SECRET = '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'
const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
const REFRESH_TOKEN = '1//04lZtONIFWc7ACgYIARAAGAQSNwF-L9IrV5mfABTrQfmWPKn-BRfPTCpe_6Y2o8Uh8ZWHpSGT1VfkoaCfW_qR93hgYS0cZKZL8F4'

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

export async function sendMail(email,newToken) {
    try {
        const accessToken = await oAuth2Client.getAccessToken()

        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'govindmaithilrtn@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
            }
        })

        const mailOption = {
            from: 'Govind <govindmaithilrtn@gmail.com>',
            to: email,
            subject: "Hello from gmail API..",
            Text: 'Hello from gmail API',
            html: `<h1>forget password token ${newToken} </h1>`
        };
        const result = await transport.sendMail(mailOption)
        return result;
    }
    catch (error) {
        return error
    }
}

// sendMail().then(result => console.log("email sent....." , result))
// .catch(error => console.log(error.message))