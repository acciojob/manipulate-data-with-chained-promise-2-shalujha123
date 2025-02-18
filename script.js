//your JS code here. If required.
let arr = [1,2,3,4]
let output = document.getElementById("output")
function chainedPromise(arr){
	return new Promise((resolve)=>{
		setTimeout(()=>{
			const evenNumbers = arr.filter((num)=> num%2===0)
			resolve(evenNumbers)
		},1000)
	})
	.then((evenNumbers)=>{
		output.innerHTML = evenNumbers.join(",")
		return new Promise((resolve)=>{
			setTimeout(()=>{
				const doubled = evenNumbers.map((num)=> num*2)
				resolve(doubled)
			},2000)
		})
	})
	.then((doubled)=>{
		output.innerHTML = doubled.join(",")
	})
}
window.onload = chainedPromise(arr)






