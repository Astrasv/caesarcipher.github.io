function cipher(){
    //Get input from textbox
    const input_text=document.getElementById("input_text").value.trim();
    let formatted_input = input_text.split(" ");
    console.log(formatted_input);
    const shift_val = Number(document.getElementById("shift").value);
    console.log(shift_val);
    if(shift_val<1 || shift_val>25){
        alert("Enter the shift value in range (1 to 25)");
    }
    else{
        //Spliting word by word
    const formatted_output = formatted_input.map( word =>{

        let strarr = word.split("");

        //Splitting letter by letter
        const each_letter = strarr.map(letter =>{
            //Caeser Cipher formula
            if (letter.charCodeAt(0)>=65 && letter.charCodeAt(0)<=90){
                let new_letter_ascii = (((letter.charCodeAt(0)-65)+shift_val)%26)+65;
                return new_letter= String.fromCharCode(new_letter_ascii);    
            }
            else{
                let new_letter_ascii = (((letter.charCodeAt(0)-97)+shift_val)%26)+97;
                return new_letter= String.fromCharCode(new_letter_ascii);
            }
            
        })
        console.log(each_letter)
        shifted_word=each_letter.join("");
        return shifted_word;
    } 
    )
    let final_output = formatted_output.join(" ");
    document.getElementById("ciphered").innerHTML=final_output;

    }

    
}


function decipher(){
    //Get input from textbox
    const input_text=document.getElementById("input_text-decrip").value.trim();
    let formatted_input = input_text.split(" ");
    console.log(formatted_input);
    const shift_val = Number(document.getElementById("shift").value);
    console.log(shift_val);
    if(shift_val<1 || shift_val>25){
        alert("Enter the shift value in range (1 to 25)");
    }
    else{
        //Spliting word by word
    const formatted_output = formatted_input.map( word =>{

        let strarr = word.split("");

        //Splitting letter by letter
        const each_letter = strarr.map(letter =>{
            //Caeser Cipher formula
            

            if (letter.charCodeAt(0)>=65 && letter.charCodeAt(0)<=90){
                var decrip=(letter.charCodeAt(0)-65)-shift_val;
                if (decrip>0){
                    let new_letter_ascii = (((letter.charCodeAt(0)-65)-shift_val)%26)+65;
                    return new_letter= String.fromCharCode(new_letter_ascii);
                }
                else{
                    let new_letter_ascii = (((letter.charCodeAt(0)-65)-shift_val+26)%26)+65;
                    return new_letter= String.fromCharCode(new_letter_ascii);
                }
                    
            }
            else{
                var decrip=(letter.charCodeAt(0)-97)-shift_val;
                if (decrip>0){
                    let new_letter_ascii = (((letter.charCodeAt(0)-97)-shift_val)%26)+97;
                    return new_letter= String.fromCharCode(new_letter_ascii);
                }
                else{
                    let new_letter_ascii = (((letter.charCodeAt(0)-97)-shift_val+26)%26)+97;
                    return new_letter= String.fromCharCode(new_letter_ascii);
                }
                
            }

            
        })
        console.log(each_letter)
        shifted_word=each_letter.join("");
        return shifted_word;
    } 
    )
    let final_output = formatted_output.join(" ");
    document.getElementById("deciphered").innerHTML=final_output;

    }

    
}

