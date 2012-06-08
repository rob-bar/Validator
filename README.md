# Validator
## Overview

#### Description	

	This javascript file is usseful for validating 	strings & other variables.
	It is no plugin so it can be used on its own.
	Feel free to adapt, use or share this file. 
	
#### usage

**U can use the validator its functions separetly:**

	Validator.validateEmail('test@tet.com'); *(=TRUE)*
	Validator.validateIsequalto('tests','testststs'); *(=FALSE)*
	Validator.validateRequired(''); *(=FALSE)*

**U can use the validator its validate function:**

		Validator.validate({
			url:{
				validator: Validator.validateUrl('http://www.google.be'),
				onSuccess: function(){Debugger.log("This string is valid");},
				onFail: function(){Debugger.log("This string is Invalid");}
			},
			email:{
				validator: Validator.validateEmail('http://www.google.be'),
				onSuccess: function(){Debugger.log("This string is valid");},
				onFail: function(){Debugger.log("This string is Invalid");}
			}
		});
		Debugger.log("Validator.hasErrors => "+Validator.hasErrors);
		
This function accepts an object that can have multiple validation objects
every validation object (like above url for example) must have 2 explicit keys:
*(validator(Must be a validator function that returns true or false))* and *(onFail(this is a callback function that will be invoked when the validatior function returns false))*, optionaly you can add in a *onSuccess* witch will be invoked when the validator returns true.

**U can use the hasErrors flag to check if all the fields are valid:**

	Debugger.log("Validator.hasErrors => "+Validator.hasErrors);

This hasErrors variable can tell you if you had any validation errors while invoking the validate function.
If not you can continue.

**U can use the Validator.validateRegExp to push in your own regular expresion to validate:**

			custom:{
				//string between 1 and 20
				validator: Validator.validateRegExp('19', /^1?[1-9]$|^[1-2]0$/),
				onSuccess: function(){Debugger.log("This string is valid");},
				onFail: function(){Debugger.log("This string is Invalid");}
			}
			
#### check the index.html file for all examples, enjoy