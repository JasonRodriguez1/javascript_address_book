var Contact = {
  initialize: function() {
    this.numbers = [];
    this.names = [];
    this.emails = [];
    this.addresses = [];
     
  },
  addEmail: function(emailInput, emailType) {
    var email = Object.create(Email);
    email.setAddress(emailInput, emailType);
    this.emails.push(email); 
  },
  addNumber: function(phoneNumber, numberType) {
    var number = Object.create(PhoneNumber);
    number.setNumber(phoneNumber);
    number.setNumberType(numberType);
    this.numbers.push(number); 
  },
  addName: function(name1,name2) {
    var name = Object.create(Name);
    name.setFirstName(name1);
    name.setLastName(name2);
    this.names.push(name);
  },
  addAddress: function(street,type,city,state,zip) {
    var address = Object.create(Address);
    address.mailAddress(street,type,city,state,zip);
    this.addresses.push(address);
  }
};
var Name = {
  setFirstName: function (name1) {
   this.firstName = name1;
  },
  setLastName: function(name2) {
    this.lastName = name2;
  }
};

var PhoneNumber = {
  setNumber: function (number) {
    this.number = number;
  },
  setNumberType: function(type) {
    this.type = type;
  }
};

var Email = {
  setAddress: function(address, type) {
    this.address = address;
    this.type = type;
  }
};

var Address = {
  mailAddress: function(street,type,city,state,zip) {
    this.mainStreet = street;
    this.mainType = type;
    this.mainCity = city;
    this.mainState = state;
    this.mainZip = zip;

  }
};
var List = {
  initialize: function() {
    this.contacts = [];
  }
};

$(function() {
  var list = Object.create(List);
  list.initialize();

  $("#create-contact").submit(function() {
    var myContact = Object.create(Contact);
    myContact.initialize();
    
    var firstName = $("input#first-name").val();
    var lastName = $("input#last-name").val();
    myContact.addName(firstName, lastName);
    var userNumber = $("input#phone-number").val();
    var userNumerType = $("select#number-type").val();
    myContact.addNumber(userNumber, userNumerType);

    var emailAddress = $("input#email").val();
    var emailType = $('select#email-type').val();
    myContact.addEmail(emailAddress, emailType);
    
    
    var streetAddress = $("input#street-address").val();
    var addressType = $('select#address-type').val();
    var cityAddress = $("input#city-address").val();
    var stateAddress = $("input#state-address").val();
    var zipAddress = $("input#zip-address").val();

    $("input").val("");
    
    myContact.addAddress(streetAddress,addressType,cityAddress,stateAddress,zipAddress);
    list.contacts.push(myContact);
   
    $('#stored-contact').append(
         "<li class=" + myContact.names[0].firstName + myContact.names[0].lastName + ">" + myContact.names[0].firstName + " " + myContact.names[0].lastName +
           "<ul class='hidden'>" +
             "<li>" + myContact.numbers[0].number + " Type: " + myContact.numbers[0].type + "</li>" +
             "<li>" + myContact.emails[0].address + " Type: " + myContact.emails[0].type + "</li>" +
             "<li>" + myContact.addresses[0].mainStreet + " Type: " + myContact.addresses[0].mainType + "</li>" +
             "<li>" + myContact.addresses[0].mainCity + "</li>" +
             "<li>" + myContact.addresses[0].mainState + "</li>" +
             "<li>" + myContact.addresses[0].mainZip + "</li>" +
           "</ul>" +
         "</li>"
       );

      $("li." + myContact.names[0].firstName + myContact.names[0].lastName).click(function() {
        $(this).children("ul.hidden").slideToggle();
    }); 
    // debugger;
    return false; 
  });

});








