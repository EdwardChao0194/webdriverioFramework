beforeEach(function() {
	browser.url('/Contact-Us/contactus.html');

});

describe('Test Contact Us form WebdriverUni', function() {

	beforeEach(function() {
	console.log('Inside the describe block!');

});
	
	it('Should be able to submit a successful submission via contact us form', function(done){ 
		browser.setValue("[name='first_name']", 'Edward');
		browser.setValue("[name='last_name']", 'Chao');
		browser.setValue("[name='email']", 'Theo@mail.com');
		browser.setValue("[name='message']", 'Theo is a dog.');
		browser.click("[type='submit']");
	});

	it('Should not be able to submit a successful submission via contact us form as all fields are required(no comment)', function(done){ 

		browser.setValue("[name='first_name']", 'Edward');
		browser.setValue("[name='last_name']", 'Chao');
		browser.setValue("[name='email']", 'Theo@mail.com');
		browser.click("[type='submit']");

	});

	it('Should not be able to submit a successful submission via contact us form as all fields are required(no last_name and comment)', function(done){ 

		browser.setValue("[name='first_name']", 'Edward');
		browser.setValue("[name='email']", 'Theo@mail.com');
		browser.click("[type='submit']");

	});

	it('Should not be able to submit a successful submission via contact us form as all fields are required(no email and comment)', function(done){ 

		browser.setValue("[name='first_name']", 'Edward');
		browser.setValue("[name='last_name']", 'Chao');
		browser.click("[type='submit']");
	});

});