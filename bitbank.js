import terminalImage  from "terminal-image";

console.log(await terminalImage.file('bitbank.png', {width: '50%', height: '50%'}));


let line1= "  ......######################              ##################    ####        ######        ####################    ####          ######  ######      ########  ######      ########"
let line2=  "    ......####################              ##################    ####        ######        ####################    ##################    ######      ########  ######    ########  "
let line3= "      ......####################            ####          ######  ####        ######        ######          ####    ##################    ######    ##########  ######    ######    "
let line4= "      ##......            ########          ####          ######  ####        ######        ######          ####      ####      ####      ######    ####  ####  ######  ######      "
let line5= "      ####..................######          ##################    ####        ######        ####################      ######    ####      ######  ####    ####  ############        "
let line6= "      ######            ......  ##          ################      ####        ######        ##################          ####  ######      ############    ####  ##########          "
let line7= "    ##  ##################  ....            ####        ######    ####        ######        ######        ####          ####  ####        ##########      ####  ############        "
let line8= "      ##  ##################  ....          ####        ######    ####        ######        ######        ####          ##########        ##########      ####  ######  ######      "
let line9= "            ################    ....        ##################    ####  ##################  ##################            ######          ########        ####  ######    ########  "
let line10= "                                ......      ################      ####  ##################  ################              ######          ######          ####  ######      ########"

//console.log (lines)

console.log(line2+"\n"+line1)
console.log(line3+"\n"+line2+"\n"+line1)
console.log(line4+"\n"+line3+"\n"+line2+"\n"+line1)
console.log(line5+"\n"+line4+"\n"+line3+"\n"+line2+"\n"+line1)
console.log(line6+"\n"+line5+"\n"+line4+"\n"+line3+"\n"+line2+"\n"+line1)
console.log(line7+"\n"+line6+"\n"+line5+"\n"+line4+"\n"+line3+"\n"+line2+"\n"+line1)
console.log(line8+"\n"+line7+"\n"+line6+"\n"+line5+"\n"+line4+"\n"+line3+"\n"+line2+"\n"+line1)
console.log(line9+"\n"+line8+"\n"+line7+"\n"+line6+"\n"+line5+"\n"+line4+"\n"+line3+"\n"+line2+"\n"+line1)
console.log(line10+"\n"+line9+"\n"+line8+"\n"+line7+"\n"+line6+"\n"+line5+"\n"+line4+"\n"+line3+"\n"+line2+"\n"+line1)
//