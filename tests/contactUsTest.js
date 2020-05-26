var ContactUs_Page = require("../pageObjects/ContactUs_Page.js");

beforeEach(async() => {
	await browser.url('/Contact-Us/contactus.html');
});

describe('Test Contact Us form WebdriverUni', () => {

	it('Test 1: Should be able to submit a successful submission via contact us form', () => { 
		ContactUs_Page.submitAllInformationViaContactUsForm('joe','blogs','joeblogs123@outlook.com','how are you?');
		ContactUs_Page.successfulSubmissionHeader.waitForDisplayed(3000);
		try {
			expect(ContactUs_Page.successfulSubmissionHeaderText).to.equal("Thank You for your Message!");
		} catch (err) {
			console.log("Exception: " + err);
			assert.fail();
		}
	}); 

	it('Test 2: Should not be able to submit a successful submission via contact us form as all fields are required(no email and comment)', () => { 
		ContactUs_Page.setLastName('jones');
		ContactUs_Page.setEmailAddress('jones@mail.com')
		ContactUs_Page.clickSubmitButton();
		try {
			expect(ContactUs_Page.unsuccessfulSubmissionHeaderText).to.have.string("Error: all fields are required");
		} catch (err) {
			console.log("Exception: " + err);
			assert.fail();
		}
		
	});

});