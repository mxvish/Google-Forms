zero=0;
one=0;
two=0;
three=0;

for(i=0;i<500;i++){
	j=Math.floor(Math.random()*4);
	switch(j){
	case 0:
		zero++;
		break;
	case 1:
		one++;
		break;
	case 2:
		two++;
		break;
	case 3:
		three++;
	}
}
console.log(zero);
console.log(one);
console.log(two);
console.log(three);
