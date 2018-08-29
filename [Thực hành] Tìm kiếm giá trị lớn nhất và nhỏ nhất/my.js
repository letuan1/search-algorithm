 var Minmax = function () {
    this.findMin = function () {
        var min = nums[1];
        for (var i = 1; i < nums.length; ++i) {
            if (nums[i] < min) {
                min = nums[i];
            }
        }
        return min;
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

    this.findMax = function () {
        var max = nums[0];
        for (var i = 1; i < nums.length; i++) {
            if (nums[i] > max) {
                max = nums[i]
            }
        }
        return max;
    };
};
var nums = [];
for(var i = 0 ; i < 100 ; ++i){
    nums[i] = Math.floor(Math.random() * 101);
    document.write(nums[i])
}
var minValue = new Minmax(nums);
document.write("<br/>");
document.write("The minimum value is: " + minValue.findMin() + "<hr>");
document.write("The maximum value is: " + minValue.findMax());