const cal = () => {
    let bill_amount=document.getElementById("bill_amt").value;
    let per=document.getElementById("percentage").value;
    let tip_1=(per/100)*bill_amount;
    let total_1=Number(bill_amount)+tip_1;
    
    
    document.getElementById("Tip").value=tip_1;
    document.getElementById("Total").value=total_1;
    }
    alert(total_1);
    