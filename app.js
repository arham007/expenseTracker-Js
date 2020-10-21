
var saving=0;
var expenses=[];
var budg=0;
var ex=0;
var sir=0;
var item;
var table=document.getElementById("mainTable");
var a = new Date();



function addIncome(){
    var income=document.getElementById("exampleInputEmail1");
    saving=parseInt(income.value);
    budg=parseInt(income.value);
    showIncome()
    income.value="";
}
function showIncome(){
    var budget=document.getElementById("budget");
    var balance=document.getElementById("balance");
    budget.innerHTML=budg;
    balance.innerHTML=saving;
    

}
function Expense(expense,expenseAmount){
    this.expense=expense;
    this.expenseAmount=expenseAmount;
}
function addExpense(){
    var expense=document.getElementById("expense").value;
    var expenseAmount=document.getElementById("expenseAmount");
    var newExpense=new Expense(expense,parseInt(expenseAmount.value));
    expenses.push(newExpense);
    console.log(expenses)
    ex+=parseInt(expenseAmount.value);
    var expenseCard=document.getElementById("expenseCard");
    expenseCard.innerHTML=ex;
    expenseAmount.value="";
    
    var sir=saving-ex;
    showIncome()
    balance.innerHTML=sir;
    render()

}
console.log(document.getElementsByClassName("delete"))

function render(){
    
    for (var i=0;i<expenses.length;i++){
        item="<tr>"+"<td>"+expenses[i].expense+"</td>"+"<td>"+expenses[i].expenseAmount+"</td>"+"<td>"+"<input type=date id='dat' onkeyup='my_Function(this)'>"+"</td>"+"<td>"+"<button class='edit' onclick=edit(this)><i class='fas fa-user-edit'></i></button>"+"</td>"+"<td>"+"<button class='delete' onclick='del_btn(this)'><i class='fas fa-trash-alt'></i></button>"+"</td>"+"</tr>"    
    }
    table.innerHTML+=item;


   


    
}

// var dat=document.getElementById("dat");
function my_Function(e){
    if (event.keyCode==13){
        e.disabled=true;
    }

}



function del_btn(e){
    var abc=parseFloat(e.parentNode.parentNode.firstChild.nextSibling.firstChild.nodeValue)
    // console.log(abc)
    var expenseCard=document.getElementById("expenseCard");
    var arman=parseFloat(expenseCard.innerHTML);
    var check=arman-abc;
    // console.log(check)
    expenseCard.innerHTML=check;
    var asif=parseFloat(balance.innerHTML)
    asif+=abc;
    balance.innerHTML=asif;
    // var balance=document.getElementById("balance");
    // showIncome()
    // var check2=saving+abc;
    // balance.innerHTML=check2;

    
    // balance.innerHTML=saving;

    
    
    e.parentNode.parentNode.remove();

}

function edit(e){
    // console.log(e.parentNode.parentNode.firstChild.nextElementSibling.firstChild.nodeValue)
    var a=prompt("enter a bug value",e.parentNode.parentNode.firstChild.firstChild.nodeValue);
    var b=prompt("enter new value",e.parentNode.parentNode.firstChild.nextElementSibling.firstChild.nodeValue);
    e.parentNode.parentNode.firstChild.firstChild.nodeValue=a;   
    e.parentNode.parentNode.firstChild.nextElementSibling.firstChild.nodeValue=b;
    var expenseCard=document.getElementById("expenseCard");
    var element=parseInt(expenseCard.innerHTML) - e.parentNode.parentNode.firstChild.nextElementSibling.firstChild.nodeValue;
    expenseCard.innerHTML=element;
    var balance=document.getElementById("balance");
    var bbc=parseInt(balance.innerHTML) + parseInt(e.parentNode.parentNode.firstChild.nextElementSibling.firstChild.nodeValue);
    balance.innerHTML=bbc;
    // console.log(typeof(expenseCard.innerHTML))
    


    
    
}














