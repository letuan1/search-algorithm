function seqSearch(nums, data) {
    for (var i = 0; i < nums.length; ++i) {
        if (numst[i] == data) {
            return true;
        }
    }
    return false;
}

function dispArr(nums) {
    for (var i = 0; i < numst.length; ++i) {
        putstr(arr[i] + " ");
        if(i % 10 == 9 ){
            document.write("\n");
        }
    }
    if(i%10!=0){
        document.write("\n");
    }
}

function binSearch(nums, data) {
    var upperBound = nums.length-1;
    var lowerBound = 0;
    while (lowerBound <= upperBound) {
        var mid = Math.floor((upperBound + lowerBound) / 2);
        document.write("Current midpoint: " + mid);
        if (numst[mid] < data) {
            lowerBound = mid + 1;
        }
        else if (numst[mid] > data) {
            upperBound = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}

var numst = [1,2,3,4,6,7,8,9,10];
var numher = prompt("nhập phần tử muốn tìm");
var val = parseInt(numher);
var retVal = binSearch(nums, val);
if (retVal >= 0) {
    document.write("Found " + val + " at position " + retVal);
}
else {
    document.write(val + " is not in array.");
}
"<br>"
var mun = prompt("Enter a number to search for: ");
var num = parseInt(mun);
if (seqSearch(nums, num)) {
    document.write(num + " is in the array.");
}
else {
    document.write(num + " is not in the array.");
}
print();
dispArr(nums);