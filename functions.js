function lowercaseMessage(string) {
    return string.toLowerCase();
}

function transform(string, a_function) {
    return string.a_function;
}

function notifyByEmail(email_address) {
    return 'Email sent to: ${email_address}';
}

function notifyByText(phone_number) {
    return 'Text sent to: ${phone_number}';
}


module.exports = lowercaseMessage;
module.exports = transform;
module.exports = notifyByEmail;
module.exports = notifyByText;