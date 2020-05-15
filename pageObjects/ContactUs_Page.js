class ContactUs_Page {
	get firstName(){ return $("['first_name']");}
	get lastName(){ return $("['last_name']");}
	get comments(){ return $("textarea");}
	get emailAddress(){ return $("[name='email']");}
	get submitButton(){ return $("[type='submit']");}
	get successfulSubmissionHeader(){ return $("#contact_reply1 h1");}
	get unsuccessfulSubmissionHeader(){ return $("body");}
}

module.exports = new ContactUs_Page();