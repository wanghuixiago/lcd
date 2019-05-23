module.exports = function main(str) {
    var zero = [
        "._.",
        "|.|",
        "|_|"
    ]
    var one = [
        "...",
        "..|",
        "..|"
    ];

    var two = [
        "._.",
        "._|",
        "|_."
    ]
    var three = [
        "._.",
        "._|",
        "._|"
    ]

    var four = [
        "...",
        "|_|",
        "..|"
    ]
    var five = [
        "._.",
        "|_.",
        "._|"
    ]
    var six = [
        "._.",
        "|_.",
        "|_|"
    ]
    var seven = [
        "._.",
        "..|",
        "..|"
    ]
    var eight = [
        "._.",
        "|_|",
        "|_|"
    ]
    var nine = [
        "._.",
        "|_|",
        "..|"
    ];

    var lcdNum = [zero, one, two, three, four, five, six, seven, eight, nine]
    if(typeof str !=="string"){
        throw new TypeError("input type should be a string")
    }
    var ary = str.split("");
    var result = []; 
    var pattern= /^\d+$/;
    if(!pattern.test(str.toString())){
        throw new TypeError("input is not allowed")
    }
    var index=0;
   while(index < 3) {
        var item = [];
        for (var j = 0; j < ary.length; j++) {
            item.push(lcdNum[parseInt(ary[j])][index])
        }
        item = item.toString().replace(/,/g, " ");
        item = item.concat("\n")
        result = result.concat(item).toString();
        index++;
    }
    return result
}