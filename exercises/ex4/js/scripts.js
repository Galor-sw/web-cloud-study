
function checkform()
{
    const isInterestChecked = Array.from(
        document.querySelectorAll(`input[name='interests[]']`)
    )
    .map(el => el.checked)
    .some(i => i);

    if (!isInterestChecked) {
        document.getElementById('interest-error').innerText = 'Please check at least one item';
        return false;
    };
    // var fullnamePar = document.getElementById("fullName1").value;
    // if(fullnamePar =="")
    //     {
    //         alert("insert full name");
    //         return false;   
    //     }
    // else
    //     {
    //         var regex = /[a-z]  /;
    //         console.log(regex);
    //         if(!regex.test(fullnamePar))
    //             return false;
    //     }

    // var passwordPar = document.getElementById("password1").value;
    // console.log(passwordPar);
    //     if(passwordPar = "")
    //         {
    //             alert("fill the password please!")
    //             return false;
    //         }
           
        // var regex1 = /[0-9] {3} -? [0-9] {6}/
        // var phonePar = document.getElementById("phoneNumber").value;
        // if(!regex1.test(phonePar)){
        //     console.log(regex1);
        //     console.log(phonePar);
        //     return false;
        // }
        
// return true;
}