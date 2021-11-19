zero=0;
one=0;
two=0;
three=0;
j=0
for(i=0;i<200;i++){
	j=Math.floor(Math.random()*100);
	if (j%4==0){ 
		zero++;
	} else if (j%4==1){ 
		one++;
	} else if (j%4==2){ 
		two++;
	} else {
		three++;
	}
}
console.log(zero);
console.log(one);
console.log(two);
console.log(three);
