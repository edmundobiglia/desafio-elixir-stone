function validateEmailsFormat(emailList) {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const AreAllEmailsValid = emailList.every((email) => regex.test(email.toLowerCase()));

  return AreAllEmailsValid;
}

function validateNoDuplicateEmails(emailList) {
  const uniqueEmails = [...new Set(emailList)];

  const numberOfUniqueEmails = uniqueEmails.length;

  const numberOfAllEmails = emailList.length;

  const areAllEmailsUnique = numberOfAllEmails === numberOfUniqueEmails;

  return areAllEmailsUnique;
}

function validateEmails(emailList) {
  const emailListHasEmails = emailList.length > 0;

  if (!emailListHasEmails) {
    throw new Error("No emails provided. Please provide at least one email.");
  }

  const AreAllEmailsValid = validateEmailsFormat(emailList);

  if (!AreAllEmailsValid) {
    throw new Error("Please make sure all emails are valid.");
  }

  const allEmailsAreUnique = validateNoDuplicateEmails(emailList);

  if (!allEmailsAreUnique) {
    throw new Error("Please make sure there are no duplicate emails.");
  }
}

module.exports = validateEmails;
