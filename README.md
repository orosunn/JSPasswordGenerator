# JavaScript Password Generator

## Random Password Generation from User Criteria

This application is built primarily with JavaScript for the purpose of allowing users to generate a randomized and secure password. It provides users with the ability to select the character types they wish to be present and the length of their password. The rest is handled by randomization, outputting a unique password that suits their criteria needs. 

## How the generatePassword Function Works

1. There are four variable selectors (OK/cancel) which allow the user to select whether they would like to include uppercase, lowercase, numeric, and/or special characters in their password.

2. Next there is an if statement which confirms that at least one character type has been selected. if all entries read as negative, an alert notifies the user that they must select at least one, then an empty return statement ends the execution.

3. There are four variables which correspond with the previous selectors. They contain the character pool strings for each character type. 

4. Assuming that step 2 has been skipped over (at least one selection was made), the charPool variable updates. It starts as an empty string and includes 4 if statements which correspond with the selector variables. Each dictate that if the user selects to include that character type, then the string of characters from that type are added to the string attached to charPool by using the addition assignment (+=). The charPool string is drawn upon during the generation process.

5. Next is the passLength variable which is used to record the desired length of the random password. It presents the user with a prompt asking them to select a length for their password between 8 and 128 characters. It then uses the parseInt function to turn the recorded string entry from the user into a number that can be used during generation.

6. The final step is the password variable which contains the for loop that generates the password from the data collected and sorted so far. This starts as an empty string which will contain the final password after randomization. The for statement dictates that the loop will start at the 0 index and increase by 1. This will iterate as many times as the passLength variable (meaning that it stops drawing random selections once the string reaches the desired password length). The random variable selects a random index within the charPool string by using the random function and mutiplying it by charPool.length (legnth of the charPool string). Next, the charAt method returns a character within the charPool string at the index specified by the random variable. The addition assignment (+=) is then used to attach the selected random character to the password variable string. This loops until there are as many selections as the specified password length, at which point the loops ends and the generated string is returned. 

### License

This project is licensed under the terms of the MIT license.