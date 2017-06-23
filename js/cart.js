var carModel;
function cart_creator(){
	//cart
	var wheel = new THREE.Mesh(  // This is the tire; the wheel object also contains the spokes
		new THREE.TorusGeometry(0.75, 0.25, 16, 32),
		new THREE.MeshLambertMaterial({ color: 0x0000A0 })
	);
	var yellow = new THREE.MeshPhongMaterial({
		    color: 0xffff00,
			specular: 0x101010,
			shininess: 16
		});
	var cylinder = new THREE.Mesh(  // a yellow cylinder with height 1 and diameter 1
	    new THREE.CylinderGeometry(0.5,0.5,1,32,1),
		yellow
	);
	cylinder.scale.set(0.15,1.2,0.15); // Make it thin and long for use as a spoke
	wheel.add(cylinder.clone());  // Add a copy of the cylinder
	cylinder.rotation.z = Math.PI/3;  // Add a rotation about the z-axis for the second spoke
	wheel.add(cylinder.clone());
	cylinder.rotation.z = -Math.PI/3; // For third spoke, use a negative rotation about z-axis
	wheel.add(cylinder.clone());
	
	axleModel = new THREE.Object3D();     // A model containing two wheels and a cylinder.
	cylinder.scale.set(0.2,4.3,0.2);  // scale the cylinder for use as an axle
	cylinder.rotation.set(Math.PI/2,0,0);     // rotate its axis onto the z-axis
	axleModel.add(cylinder);
	wheel.position.z = 2;          // the wheels are positioned at the top and bottom of cylinder
	axleModel.add(wheel.clone());
	wheel.position.z = -2;
	axleModel.add(wheel);
	

	var red = new THREE.MeshPhongMaterial({
	    color: "red",
            specular: 0x080808,
            shininess: 8,
            shading: THREE.FlatShading
	});
	carModel = new THREE.Mesh(new THREE.BoxGeometry(6,1.2,3), red);
	carModel.position.y = 0.6;
	
	carModel.carAxle1 = axleModel.clone();
	carModel.carAxle1.position.x = -2.5;
	carModel.carAxle2 = axleModel.clone();
	carModel.carAxle2.position.x = 2.5;
	carModel.add(carModel.carAxle1);
	carModel.add(carModel.carAxle2);
	
	scene.add(carModel);
        carModel.index = count;
        carModel.name = "objects["+count+"]";
        carModel.attr = "name,length,color,opacity,material";
        objects.push(carModel);
        count+=1;
        dragElements.push(carModel);
        carModel.objname="cart";
        carModel.rotateWheels=function(value=Math.PI/10)
        {
            carModel.carAxle1.rotation.z+=value;
            carModel.carAxle2.rotation.z+=value;
        };
        carModel.parameters = 
        {
            name : carModel.name,
            size:1,
            rotate:function(){carModel.carAxle1.rotation.z+=Math.PI/10;carModel.carAxle2.rotation.z+=Math.PI/10;}
       };
        carModel.gui=function (carModel)
        {

            var carModelName = gui.add( carModel.parameters, 'name' ).name('Variable Name').listen();
            
            var size = gui.add(carModel.parameters,'size').min(0.1).max(4).step(0.1).name('Size').listen();
            size.onChange(function(value){
               carModel.scale.set(value,value,value); 
            });
            gui.add( carModel.parameters, 'rotate' ).name("rotateWheels");
            gui.open();

        };
        
    return carModel;
}