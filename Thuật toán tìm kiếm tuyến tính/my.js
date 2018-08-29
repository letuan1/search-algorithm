var Insus = function () {
  this.seqSearch = function (nums, data) {
      for (var i = 0 ; i < nums.length ; i++){
          if (nums[i] == data){
              return true;
          }
      }
      return false;
  };

  this.disArr = function () {
      for (var i = 0 ; i < nums.length ; i++ ){
          document.write(nums[i] + " ");
          if (i % 10 ==9){
              document.write("\n");
          }
      }
      if (i % 10 != 0){
          document.write("\n");
      }
  };
};

var nums = [];
for (var i = 0 ; i < 100 ; i++){
    nums[i] = Math.floor(Math.random() * 101);
}

var mon = new Insus(nums);
mon.disArr(nums);
prompt("Enter a number to search for: ");
var num = parseInt(prompt());
document.write();
if (mon.seqSearch(nums, num)){
    document.write(num + " is in the array.");
}else {
    document.write(num + " is not in the array.")
}