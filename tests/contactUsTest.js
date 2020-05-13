var request = require('sync-request');

beforeEach(function() {
	browser.url('/Contact-Us/contactus.html');
});

describe('Test Contact Us form WebdriverUni', function() {
	var res = request('GET', 'http://jsonplaceholder.typicode.com/posts/1/comments');
	var contactusDetails = JSON.parse(res.getBody().toString('utf8'));

	var firstNameSelector = "[name='first_name']";
	var lastNameSelector = "[name='last_name']";
	var emailAddressSelector = "[name='email']";
	var commentsSelector = "[name='message']";
	var successfulSubmissionSelector = "#contact_reply h1";
	var unsuccessfulSubmissionSelector = "body";
	var submitButtonSelector = "[type='submit']";

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
		expect(validateSubmissionHeader, 'Successful submission message does not exist').to.be.true;
	};

	contactusDetails.forEach(function (contactusDetail){
		it('Should be able to submit a successful submission via contact us form', function(done){ 
			browser.submitDataViaContactUsForm('joe', 'Blogs', contactusDetail.email, contactusDetail.body);

			var successfulContactConfirmation = browser.isExisting("#contact_reply h1");
			expect(successfulContactConfirmation, 'Successful submission message does not exist').to.be.true;

			var successfulSubmission = browser.getText('#contact_reply h1');
			expect(successfulSubmission).to.equal('Thank You for your Message!');

		}); 
	});

	it('Should not be able to submit a successful submission via contact us form as all fields are required(no comment)', function(done){ 

		browser.setValue("[name='first_name']", 'Edward');
		browser.setValue("[name='last_name']", 'Chao');
		browser.setValue("[name='email']", 'Theo@mail.com');
		browser.click("[type='submit']");

		var successfulContactConfirmation = browser.isExisting("#contact_reply h1");
		expect(successfulContactConfirmation, 'Successful submission message does not exist').to.be.false;
		
	});

	it('Should not be able to submit a successful submission via contact us form as all fields are required(no last_name and comment)', function(done){ 

		browser.setValue("[name='first_name']", 'Edward');
		browser.setValue("[name='email']", 'Theo@mail.com');
		browser.click("[type='submit']");

		var successfulContactConfirmation = browser.isExisting("#contact_reply h1");
		expect(successfulContactConfirmation, 'Successful submission message does not exist').to.be.false;
	});

	it('Should not be able to submit a successful submission via contact us form as all fields are required(no email and comment)', function(done){ 

		browser.setValue("[name='first_name']", 'Edward');
		browser.setValue("[name='last_name']", 'Chao');
		browser.click("[type='submit']");

		var errorText = browser.getText("body");
		expect(errorText).to.include('Error: all fields are required');

		var errorText = browser.isVisible("body");
		expect (errorText, 'Error message is not visible').to.be.true;

	});

});