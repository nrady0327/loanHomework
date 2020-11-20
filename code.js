$(document).ready(function ()
{
    //create rules
    var myRules =
        {
            salary:
                {
                    required: true,
                    min: 20000,
                    max: 2000000,
                    digits: true
                },
            credit:
                {
                    required: true,
                    min: 300,
                    max: 850,
                    digits: true
                },
            monthsAtWork:
                {
                    required: true,
                    min: 12,
                    digits: true
                }
        };
    //create error messages
    var myMessages =
        {
            salary:
                {
                    required: "This field is required.",
                    min: "Enter an acceptable minimal value.",
                    max: "Don't go over the maximum value.",
                    digits: "Must be an integer no decimals!"
                },
            credit:
                {
                    required: "This field is required.",
                    min: "Enter a minimum score of 300.",
                    max: "Enter a maximum score of 850.",
                    digits: "No decimals!"
                },
            monthsAtWork:
                {
                    required: "This field is required",
                    min: "Enter a minimum of 12 months",
                    max: "Enter at least 13 months",
                    digits: "No decimals!"
                }
        };
    //validate the information
    $("form").validate(
        {
         submitHandler: calcLoan,
         rules: myRules,
        messages: myMessages
        }
    );


    //create the calculation function
    function calcLoan(event)
    {
        event.preventDefault();
        //grab the salary
        var salary = $("#salary").val();
        //grab credit score
        var creditScore = $("#creditScore").val();
        //grab months at job
        var months = $("#monthsAtJob").val();

        //if salary is >=40000
        do
            {

                //if credit score is >=600
                if(creditScore>=600)
                {
                    //put text in the html saying "Loan approved"
                    var approval = $("#loanApprovalOutput").text("Loan approved.");
                }
                else if(creditScore <600)
                {
                    //if credit score is not >=600 ask if months at job is >12

                    //if months at job is >12
                    if(months >12)
                    {
                        //put text in html saying "Loan approved"
                        var approval = $("#loanApprovalOutput").text("Loan approved");
                    }
                        //if months at job is <12

                    else if(month<12)
                    {
                        //put text in html saying "Loan denied"
                        var approval = $("#loanApprovalOutput").text("Loan denied");
                    }
                }

            }while(salary>=40000);

        //if salary is not >=40000
        while(salary<40000)
        {

            //if credit score is >=600
            if(creditScore >=600)
            {
                //if months at job is >12
                //put text in html saying "Loan approved"
                if(months >12)
                {
                    var approval = $("#loanApprovalOutput").text("Loan approved");
                }
            }
           else if(months<12)
           {
               //if months at job is <12
               //put text in html saying "Loan denied"
               var approval = $("#loanApprovalOutput").text("Loan denied");
           }
            if(creditScore<600)
            {
                //if credit score is <600
                //put text in html saying "Loan denied"
                var approval = $("#loanApprovalOutput").text("Loan denied");
            }

        }

    }
});