var ContactUs_Page = require("./pageObjects/ContactUs_Page.js");

beforeEach(function() {
	browser.url('/Contact-Us/contactus.html');
});

describe('Test Contact Us form WebdriverUni', function() {

	function setFirstName(firstName){
		return browser.setValue(firstNameSelector, firstName);
	};
	function setLastName(lastName){
		return browser.setValue(lastNameSelector, lastName);
	};
	function setEmailAddress(emailAddress){
		return browser.setValue(emailAddressSelector, emailAddress);
	};
	function setComments(comments){
		return browser.setValue(commentsSelector, comments);
	};
	function clickSubmitButton(){
		return browser.click(submitButtonSelector);
	};

	function confirmSuccessfulSubmission(){
		var validateSubmissionHeader = browser.waitUntil(function() {
			return browser.getText(successfulSubmissionSelector) == 'Thank You for your Message!';
		}, 3000)
		expect(validateSubmissionHeader, 'Successful Submission Message does not Exist!').to.be.true;
	};
	function confirmUnsuccessfulSubmission(){
		var validateSubmissionHeader = browser.waitUntil(function() {
			return browser.getText(unsuccessfulSubmissionSelector) == 'Error: all fields are required';
		}, 3000)
		expect(browser.getText(unsuccessfulSubmissionSelector)).to.include('Error: all fields are required');
	};

	contactusDetails.forEach(function (contactusDetail){
		it('Should be able to submit a successful submission via contact us form', function(done){ 
			setFirstName('joe');
			setLastName('blogs');
			setEmailAddress(contactusDetail.email);
			setComments(contactusDetail.body);
			clickSubmitButton();
			confirmSuccessfulSubmission();
		}); 
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