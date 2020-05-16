var ContactUs_Page = require("../pageObjects/ContactUs_Page.js");

beforeEach(function() {
	browser.url('/Contact-Us/contactus.html');
});

describe('Test Contact Us form WebdriverUni', function() {

	it('Should be able to submit a successful submission via contact us form', function(done){ 
		setFirstName('joe');
		setLastName('blogs');
		setEmailAddress('joeblogs123@outlook.com');
		setComments('How are you?');
		clickSubmitButton();
		confirmSuccessfulSubmission();
	}); 

	it('Should not be able to submit a successful submission via contact us form as all fields are required(no comment)', function(done){ 
		setFirstName('mike');
		setLastName('woods');
		setEmailAddress('mikewoods@mail.com');
		clickSubmitButton();
		confirmUnsuccessfulSubmission();		
	});

	it('Should not be able to submit a successful submission via contact us form as all fields are required(no last_name and comment)', function(done){ 

		setFirstName('sarah');
		setEmailAddress('sarah@mail.com');
		clickSubmitButton();
		confirmUnsuccessfulSubmission();
	});

	it('Should not be able to submit a successful submission via contact us form as all fields are required(no email and comment)', function(done){ 
		setLastName('jones');
		setEmailAddress('jones@mail.com')
		clickSubmitButton();
		confirmUnsuccessfulSubmission();
	});

});