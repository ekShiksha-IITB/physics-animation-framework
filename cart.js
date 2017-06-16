var carModel = new THREE.Object3D();
function cart_creator(){
	
	carModel.wheel = new THREE.Mesh(  // This is the tire; the wheel object also contains the spokes
		new THREE.TorusGeometry(0.75, 0.25, 16, 32),
		new THREE.MeshLambertMaterial({ color: 0x0000A0,transparent:true,opacity:1 })
	);
	var yellow = new THREE.MeshPhongMaterial({
		    color: 0xffff00,
			specular: 0x101010,
			shininess: 16,
                        opacity:1
		});
	var cylinder = new THREE.Mesh(  // a yellow cylinder with height 1 and diameter 1
	    new THREE.CylinderGeometry(0.5,0.5,1,32,1),
		yellow
	);
	cylinder.scale.set(0.15,1.2,0.15); // Make it thin and long for use as a spoke
	carModel.wheel.add(cylinder.clone());  // Add a copy of the cylinder
	cylinder.rotation.z = Math.PI/3;  // Add a rotation about the z-axis for the second spoke
	carModel.wheel.add(cylinder.clone());
	cylinder.rotation.z = -Math.PI/3; // For third spoke, use a negative rotation about z-axis
	carModel.wheel.add(cylinder.clone());
	
	axleModel = new THREE.Object3D();     // A model containing two wheels and a cylinder.
	cylinder.scale.set(0.2,4.3,0.2);  // scale the cylinder for use as an axle
	cylinder.rotation.set(Math.PI/2,0,0);     // rotate its axis onto the z-axis
	axleModel.add(cylinder);
	carModel.wheel.position.z = 2;          // the wheels are positioned at the top and bottom of cylinder
	axleModel.add(carModel.wheel.clone());
	carModel.wheel.position.z = -2;
	axleModel.add(carModel.wheel);
	
	// Create a car, consisting of two boxes, two spheres for the headlights, and two axles.
	
	var red = new THREE.MeshPhongMaterial({
	    color: "red",
		specular: 0x080808,
		shininess: 8,
		shading: THREE.FlatShading,
                transparent:true,
                opacity:1
	});
	carModel.body = new THREE.Mesh(new THREE.BoxGeometry(6,1.2,3), red);
	carModel.body.position.y = 0.6;
	
	carAxle1 = axleModel.clone();
	carAxle1.position.x = -2.5;
	carAxle2 = axleModel.clone();
	carAxle2.position.x = 2.5;
	carModel.add(carAxle1);
	carModel.add(carAxle2);
	carModel.add(carModel.body);
	
	
	
	scene.add(carModel);
        carModel.index = count;
        carModel.name = "objects["+count+"]";
        carModel.attr = "side";
        objects.push(carModel);
        count+=1;
        dragElements.push(carModel);
        carModel.objname="carModel";
        carModel.parameters = 
        {
            name : carModel.name,
            length: 5,
            color: "#ff0000", // color (change "#" to "0x")
            opacity: 1, 
            visible: true,
            material: "Phong",
            reset: function() { resetObject(carModel); }

        };
        carModel.gui=function (carModel)
        {

            var carModelName = gui.add( carModel.parameters, 'name' ).name('Variable Name').listen();

            var carModelColor = gui.addColor( carModel.parameters, 'color' ).name('Color').listen();
            carModelColor.onChange(function(value) // onFinishChange
            {   carModel.material.color.setHex( value.replace("#", "0x") );   
            });

            /*var carModelLength = gui.add( carModel.parameters, 'length' ).min(0).max(50).step(1).name('Length').listen();
            carModelLength.onChange(function(value)
            {   carModel.geometry = new THREE.BoxGeometry(value,value,value);
                carModel.geometry.needVerticesUpdate = true;
             });*/

            var carModelOpacity = gui.add( carModel.parameters, 'opacity' ).min(0).max(1).step(0.01).name('Opacity').listen();
            carModelOpacity.onChange(function(value)
            {   console.log("opacity changing");
                carModel.material.opacity = value;   
                render();
            });
            console.log("before");
            var carModelMaterial = gui.add( carModel.parameters, 'material', [ "Basic", "Lambert", "Phong", "Wireframe" ] ).name('material').listen();
            carModelMaterial.onChange(function(value) 
            {   updateMaterial(carModel,value); 
              });
            console.log("after");
                var carModelVisible = gui.add( carModel.parameters, 'visible' ).name('Visible?').listen();
            carModelVisible.onChange(function(value) 
            {   
                carModel.visible = value;      
            });
            gui.add( carModel.parameters, 'reset' ).name("Reset Cube Parameters");
            gui.open();

        };
    return carModel;
}