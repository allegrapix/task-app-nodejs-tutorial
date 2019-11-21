const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'rusalexandraioana@gmail.com',
    subject: 'Thanks for joining up',
    text: `Hey there, ${name}. I am spamming you.`
  });
}

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'rusalexandraioana@gmail.com',
    subject: 'Cancelation email',
    text: `Hey ${name}, sorry things didn't work out.`
  });
}

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail
}