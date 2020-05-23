beforeEach(function() {
  browser.url("/Dropdown-Checkboxes-RadioButtons/index.html");
})

describe('Test Selected Dropdown Menus, Checkboxes & Radio Buttons', function() {
  it('Dropdown item Java is selected therefore should return true', function(done) {
    var isSelected = browser.isSelected("option[value='java']");
    console.log(isSelected);
    expect(isSelected).to.be.true;    
  });
  
  it('Dropdown item maven is not selected therefore should return false', function(done) {    
    var isSelected = browser.isSelected("option[value='maven']");
    console.log(isSelected);
    expect(isSelected).to.be.false;
  });
  
  it('Option2 is not selected therefore should return false', function(done) {    
    var isSelected = browser.isSelected("input[value='option-2']");
    console.log(isSelected);
    expect(isSelected).to.be.false;
  });
  
  it('Option3 is selected therefore should return true', function(done) {    
    var isSelected = browser.isSelected("input[value='option-3']");
    console.log(isSelected);
    expect(isSelected).to.be.true;
  });
  
  it('Radio button pumpkin is selected therefore should be true', function(done) {    
    var isSelected = browser.isSelected("input[value='pumpkin']");
    console.log(isSelected);
    expect(isSelected).to.be.true;
  });
});