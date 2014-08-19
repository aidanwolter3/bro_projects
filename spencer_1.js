//Rocket to the moon

//Spencer Wolter

//Aug 19 2014

// this program sends this rocket into space


void setup() {
  size(400, 400);
}

background(121, 133, 126);//night time sky
noStroke();
fill(153, 84, 84);
var screenSize = 400;
var u = 155;
var t = 5;
var x = 99;    
var y = 206;
var z = 27;
var w = 26;
var r = 3;
var s = 329;
var p = 99;
void draw() {
    
    background(121, 133, 126);//night time sky
    
    // the stars
    fill(255, 234, 0);
    ellipse(208,p-174,r,35);//Shooting star
    ellipse(198,(x-145)%screenSize,r,r);
    ellipse(89,(x-130)%screenSize,r,r);
    ellipse(36,(x-120)%screenSize,r,r);
    ellipse(15,(x-84)%screenSize,r,r);
    ellipse(41,(x-47)%screenSize,r,r);
    ellipse(60,(x-70)%screenSize,r,r);
    ellipse(29,(x-14)%screenSize,r,r);
    ellipse(16,(x-53)%screenSize,r,r);
    ellipse(123,(x-84)%screenSize,r,r);
    ellipse(54,(x-84)%screenSize,r,r);
    ellipse(156,(x-49)%screenSize,r,r);
    ellipse(94,(x-47)%screenSize,r,r);
    ellipse(72,(x-9)%screenSize,r,r);
    ellipse(175,(x-84)%screenSize,r,r);
    ellipse(85,(x-65)%screenSize,r,r);
    ellipse(216,(x-65)%screenSize,r,r);
    ellipse(15,(x+32)%screenSize,r,r);
    ellipse(75,(x+44)%screenSize,r,r);
    ellipse(100,(x-22)%screenSize,r,r);
    ellipse(105,(x+7)%screenSize,r,r);
    ellipse(254,(x-75)%screenSize,r,r);
    ellipse(136,(x+26)%screenSize,r,r);
    ellipse(147,(x-13)%screenSize,r,r);
    ellipse(277,(x-84)%screenSize,r,r);
    ellipse(360,(x-84)%screenSize,r,r);
    ellipse(205,(x-10)%screenSize,r,r);
    ellipse(91,(x+90)%screenSize,r,r);
    ellipse(36,(x+80)%screenSize,r,r);
    ellipse(272,(x-42)%screenSize,r,r);
    ellipse(134,(x+59)%screenSize,r,r);
    ellipse(143,(x+105)%screenSize,r,r);
    ellipse(238,(x+11)%screenSize,r,r);
    ellipse(184,(x+73)%screenSize,r,r);
    ellipse(15,(x-84)%screenSize,r,r);
    ellipse(16,(x+138)%screenSize,r,r);
    ellipse(119,(x+153)%screenSize,r,r);
    ellipse(57,(x+122)%screenSize,r,r);
    ellipse(236,(x+86)%screenSize,r,r);
    ellipse(270,(x+56)%screenSize,r,r);
    ellipse(266,(x+40)%screenSize,r,r);
    ellipse(341,(x+97)%screenSize,r,r);
    ellipse(364,(x+86)%screenSize,r,r);
    ellipse(350,(x+49)%screenSize,r,r);
    ellipse(366,(x+11)%screenSize,r,r);
    //rocket parts
    fill(161, 103, 103);
    rect(68,99,79,197);//rocket body
    rect(163,296,-111,15);
    rect(52,305,z,w);//left thruster
    rect(136,305,z,w);//right thruster
    rect(94,305,z,w);// middle thruster
    triangle(161,100,51,99,106,8);//rocket head
    fill(245, 231, 231);
    quad(69,100,147,100,68,193,146,193);//roket paint
    quad(69,212,107,196,146,212,108,330);//rocket paint
    fill(255, 242, 0);
    quad(78,224,107,206,137,224,108,297);//rocket paint
    fill(255, 0, 0);
    triangle(121,s,106,403,94,s);//flame #9
    triangle(52,s,65,392,78,s);//flame #6
    triangle(136,s,149,392,163,s);
    fill(242, 222, 0);
    triangle(136,s,140,374,163,s);//flam #1
    triangle(136,s,158,374,163,s);//flame #2
    triangle(52,s,54,378,78,s);//flame #4
    triangle(52,s,76,377,78,s);//flame #5
    triangle(121,s,94,375,94,s);//flame #7
    triangle(121,s,120,375,94,s);//flame #8
    x=x+1 ;//this makes the rocket fly faster or slower up or down);
    p=p+25;
    // the launcher station
    fill(255, 255, 255);
    rect(277,x-84,57,452);
    rect(199,x+17,83,15);
    rect(252,x-54,7,367);
    rect(227,x-54,7,367);
    rect(352,x-54,7,367);
    rect(381,x-54,7,367);
    rect(227,x-54,u,t);
    rect(227,x-21,u,t);
    rect(227,x+60,u,t);
    rect(227,x+99,u,t);
    rect(227,x+20,u,t);
    rect(227,x+141,u,t);
    rect(227,x+171,u,t);
    rect(227,x+212,u,t);
    //obsidian lounch pad
    fill(41, 38, 38);
    rect(-4,x+230,424,116);
    
};
