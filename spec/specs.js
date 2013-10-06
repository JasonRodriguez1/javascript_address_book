describe('Name', function() {
  it('allows user to input the user first name', function () {
    var name = Object.create(Name);
    name.setFirstName("Chris");
    name.firstName.should.equal("Chris");
  });
  
  it('allows user to input the user last name', function () {
    var name = Object.create(Name);
    name.setLastName("Farley");
    name.lastName.should.equal("Farley");
  });

  it("allows user to input first and last name", function() {
    var name = Object.create(Name);
    name.setLastName("Jordan");
    name.setFirstName("Michael");
    name.fullName().should.equal("Michael Jordan");
  });
});

describe('PhoneNumber', function() {
  it('allows user to input a phone PhoneNumber', function() {
    var phoneNumber = Object.create(PhoneNumber);
    phoneNumber.setNumber("555-555-5555");
    phoneNumber.number.should.equal("555-555-5555");
  });
});

describe('Email', function() {
  it('lets you set its address', function() {
    var email = Object.create(Email);
    email.setAddress('michael@epicodus.com');
    email.address.should.equal('michael@epicodus.com');
  });

  it('lets you set its type', function() {
    var email = Object.create(Email);
    email.setType('home');
    email.type.should.equal('home');
  });
});

describe('Address', function() {
  it('allows the user to input an address', function() {
    var address = Object.create(Address);
    address.mailAddress('123 Evergreen Terrace', 'Portland', 'Oregon', 97214);
    address.mainStreet.should.equal("123 Evergreen Terrace");
    address.mainCity.should.equal("Portland");
    address.mainState.should.equal("Oregon");
    address.mainZip.should.equal(97214);
  });
});

describe('Contact', function() {
  it('starts out with no names', function() {
    var contact = Object.create(Contact);
    contact.initialize();
    contact.names.should.eql([]);
  });

  it('starts out with no phone numbers', function() {
    var contact = Object.create(Contact);
    contact.initialize();
    contact.numbers.should.eql([]);
  });

  it('starts out with no email addresses', function() {
    var contact = Object.create(Contact);
    contact.initialize();
    contact.emails.should.eql([]);
  });

  it('starts out with no addresses', function() {
    var contact = Object.create(Contact);
    contact.initialize();
    contact.addresses.should.eql([]);
  });

  it('lets you add a name', function() {
    var contact = Object.create(Contact);
    var name = Object.create(Name);
    contact.initialize();
    contact.addName(name);
    contact.names.should.eql([name]);
  });

  it("lets you add an email address", function() {
    var contact = Object.create(Contact);
    var email = Object.create(Email);
    contact.initialize();
    contact.addEmail(email);
    contact.emails.should.eql([email]);
  });

    it("lets you add a phone numbers", function() {
    var contact = Object.create(Contact);
    var phoneNumber = Object.create(PhoneNumber);
    contact.initialize();
    contact.addNumber(phoneNumber);
    contact.numbers.should.eql([phoneNumber]);
  });

    it("lets you add addresses", function() {
    var contact = Object.create(Contact);
    var address = Object.create(Address);
    contact.initialize();
    contact.addAddress(address);
    contact.addresses.should.eql([address]);
  });
});



