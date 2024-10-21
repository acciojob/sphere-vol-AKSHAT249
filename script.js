function volume_sphere() {
    //Write your code here
	let radius = document.getElementById("radius");
	if(radius<0 || isNan(radius)){
		document.getElementById("volume").textContent = "NaN";
	}else{
		let pi = 3.1415927;
		let volume = Math.round((4*pi*r*r*r)/3,4);
		document.getElementById("volume").textContent = volume;
	}
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
