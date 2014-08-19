//Micah Wolter
//8/19/2014
//Villager
//He walks like a zombie


void setup() {
  	size(400, 400);
}

var x = 48;
void draw() {

	//the background
	fill(157, 212, 201);
	rect(0,0,400,400);
	noStroke();

	//the clouds
    fill(240, 245, 245);
    ellipse(200,68,78,84);
    ellipse(85,70,74,77);
    ellipse(143,63,92,100);
    stroke(13, 11, 11);

	//the grass
	fill(43, 235, 14);
	rect(0,208,410,15);

	//the blocks (not separated)
	fill(125, 43, 43);
	rect(-1,224,400,192);

	//the lines to separate the blocks
	fill(10, 4, 4);
	rect(83,210,1,194);
	rect(172,209,1,190);
	rect(262,210,1,206);
	rect(354,209,1,208);
	rect(-5,310,414,-1);

    //the villagers head
    fill(209, 176, 140);
    ellipse(x-28,73,36,47);

    //the villagers eyeball
    fill(255, 252, 252);
    ellipse(x-22,67,8,11);
    fill(56, 51, 51);
    ellipse(x-21,68,2,5);

    //the villagers nose
    fill(199, 138, 127);
    ellipse(x-11,77,9,27);

    //the villagers mouth
    fill(10, 9, 9);
    rect(x-30,82,13,0);

    //the villagers body
    fill(98, 36, 115);
    rect(x-5,95,-38,75);

    //the arms
    rect(x-30,119,29,9);
    rect(x-30,95,10,25);

    //the legs
    fill(82, 60, 60);
    rect(x-33,170,14,37);
    x=x+1;
}

