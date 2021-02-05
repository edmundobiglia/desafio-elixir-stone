function validateEmailsFormat(emails) {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const AreAllEmailsValid = emails.every((email) => regex.test(email.toLowerCase()));

  return AreAllEmailsValid;
}

function validateNoDuplicateEmails(emails) {
  const uniqueEmails = [...new Set(emails)];

  const numberOfUniqueEmails = uniqueEmails.length;

  const numberOfAllEmails = emails.length;

  const areAllEmailsUnique = numberOfAllEmails === numberOfUniqueEmails;

  return areAllEmailsUnique;
}

function validateEmails(emails) {
  const hasEmails = emails.length > 0;

  if (!hasEmails) {
    throw new Error("No emails provided. Please provide at least one email.");
  }

  const AreAllEmailsValid = validateEmailsFormat(emails);

  if (!AreAllEmailsValid) {
    throw new Error("Please make sure all emails are valid.");
  }

  const AreAllEmailsUnique = validateNoDuplicateEmails(emails);

  if (!AreAllEmailsUnique) {
    throw new Error("Please make sure there are no duplicate emails.");
  }
}

module.exports = validateEmails;
