function fibonacci(num) {
// your code here
	if(num<=2){
		return num-1;
	}
	let a=0;
	let b=1;
	for(let i=2;i<n;i++){
		let tempt=a+b;
		a=b;
		b=tempt;
	}
	return b;
}

module.exports = fibonacci;
