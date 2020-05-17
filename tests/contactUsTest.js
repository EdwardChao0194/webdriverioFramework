var ContactUs_Page = require("../pageObjects/ContactUs_Page.js");

beforeEach(function() {
	browser.url('/Contact-Us/contactus.html');
});

describe('Test Contact Us form WebdriverUni', function() {

	it('Should be able to submit a successful submission via contact us form', function(done){ 
		ContactUs_Page.submitAllInformationViaContactUsForm('joe','blogs','joeblogs123@outlook.com','how are you?');
	}); 

	it('Should not be able to submit a successful submission via contact us form as all fields are required(no comment)', function(done){ 
		ContactUs_Page.setFirstName('mike');
		ContactUs_Page.setLastName('woods');
		ContactUs_Page.setEmailAddress('mikewoods@mail.com');
		ContactUs_Page.clickSubmitButton();
		ContactUs_Page.confirmUnsuccessfulSubmission();		
	});

	it('Should not be able to submit a successful submission via contact us form as all fields are required(no last_name and comment)', function(done){ 

		ContactUs_Page.setFirstName('sarah');
		ContactUs_Page.setEmailAddress('sarah@mail.com');
		ContactUs_Page.clickSubmitButton();
		ContactUs_Page.confirmUnsuccessfulSubmission();
	});

	it('Should not be able to submit a successful submission via contact us form as all fields are required(no email and comment)', function(done){ 
		ContactUs_Page.setLastName('jones');
		ContactUs_Page.setEmailAddress('jones@mail.com')
		ContactUs_Page.clickSubmitButton();
		ContactUs_Page.confirmUnsuccessfulSubmission();
	});

});