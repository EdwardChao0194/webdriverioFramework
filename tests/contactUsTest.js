var ContactUs_Page = require("../pageObjects/ContactUs_Page.js");

beforeEach(async() => {
	await browser.url('/Contact-Us/contactus.html');
});

describe('Test Contact Us form WebdriverUni', () => {

	it('Test 1: Should be able to submit a successful submission via contact us form', () => { 
		ContactUs_Page.submitAllInformationViaContactUsForm('joe','blogs','joeblogs123@outlook.com','how are you?');
	}); 

	it('Test 2: Should not be able to submit a successful submission via contact us form as all fields are required(no email and comment)', () => { 
		ContactUs_Page.setLastName('jones');
		ContactUs_Page.setEmailAddress('jones@mail.com')
		ContactUs_Page.clickSubmitButton();
		ContactUs_Page.confirmUnsuccessfulSubmission();
	});

});