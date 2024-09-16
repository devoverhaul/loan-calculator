function calculateLoan() {
    var txtInput = document.getElementById('monthlySalary');
    var salary = txtInput.value
    // If salary less than 50000 then loan amount will be 10%
    const LOAN_PERCENTAGE = 0.1;
    const bt = document.querySelector('.loan');
    const num = document.querySelector('.amount');
    var loanAmount = salary * LOAN_PERCENTAGE;
    // Salary greater than or equal to 50000, qualify for 20% as loan amount
    if (salary >= 50000); {
        loanAmount = salary * 0.2;
    } 
    bt.addEventListener('click', function() {
        
        num.console.log('loan amount' + loanAmount);
      });
}
