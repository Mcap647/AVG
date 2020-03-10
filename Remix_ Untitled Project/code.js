
var mylist = [];


function findsum() 
{
  var sum = 0;
  for (var i = 0; i < mylist.length; i++)
  {
   sum = sum + mylist[i];
  }
  return sum;
}

//var s = findsum(mylist);
//console.log("the sum is :" + s);

function findaverage()
{
  var total = findsum();
  var elements = mylist.length;
  var a = (total/elements);
  return a;
}
var avg = findaverage(mylist);
findaverage(mylist);
console.log("The Average is :" + avg);


onEvent("add", "click", function(event) {
var num = getNumber("num_input");
appendItem(mylist,num);

setText("text_area1",mylist);
var listAvg = findaverage();

setText("text_areaAVG",listAvg);

  console.log("add clicked!");
});














