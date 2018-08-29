function binSearch(arr, data) {
    var upperBound = nums.length - 1;
    var lowerBound = 0;
    while (lowerBound <= upperBound) {
        var mid = Math.floor((upperBound + lowerBound) / 2);
        if (arr[mid] < data) {
            lowerBound = mid + 1;
        }
        else if (arr[mid] > data) {
            upperBound = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}

function count(arr, data) {
    var count = 0;
    var position = binSearch(arr, data);
    if (position > -1) {
        ++count;
        for (var i = position - 1; i > 0; --i) {
            if (nums[i] == data) {
                ++count;
            }
            else {
                break;
            }
        }

        for (var i = position + 1; i < nums.length; ++i) {
            if (nums[i] == data) {
                ++count;
            }
            else {
                break;
            }
        }
    }
    return count;
}

function swap(nums, index1, index2) {
    var temp = nums[index1];
    nums[index1] = nums[index2];
    nums[index2] = temp;
}

function selectionSort() {
    var min, temp;
    for (var outer = 0; outer <= nums.length - 2; ++outer) {
        min = outer;
        for (var inner = outer + 1; inner <= nums.length - 1; ++inner) {
            if (nums[inner] < nums[min]) {
                min = inner;
            }
        }
        swap(nums, outer, min);
        document.write(this.toString() + "<br/>");
    }
}

var nums = [];
for (var i = 0; i < 100; ++i){
    nums[i] = Math.floor(Math.random() * 101);
    document.write(nums[i] + "  ")
}
document.write("<br/>");
var val = parseInt(prompt("Enter a value to count: "));
var retVal = count(nums, val);
document.write("Found " + retVal + " occurrences of " + val + ".");
