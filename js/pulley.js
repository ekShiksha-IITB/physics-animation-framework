var pulley;
function pulley_creator(radius=4){

	var geometry=new THREE.CylinderGeometry(radius/1.5,radius/1.5,2, 500, false);
        var material=new THREE.MeshPhongMaterial({wireframe: false, color: "red",transparent:true,opacity:1});
        pulley=new THREE.Mesh(geometry,material);
        
        pulley.disc1=new THREE.Mesh(new THREE.CylinderGeometry(radius,radius,0.3, 500, false),new THREE.MeshPhongMaterial({wireframe: false, color: "yellow",transparent:true,opacity:1}));
        pulley.disc1.position.set(0,0.6,0);
        pulley.add(pulley.disc1);
        
        pulley.disc2=new THREE.Mesh(new THREE.CylinderGeometry(radius,radius,0.3, 500, false),new THREE.MeshPhongMaterial({wireframe: false, color: "yellow",transparent:true,opacity:1}));
        pulley.disc2.position.set(0,-0.6,0);
        pulley.add(pulley.disc2);
        
        pulley.rod=new THREE.Mesh(new THREE.BoxGeometry(0.5,2.5,radius),new THREE.MeshPhongMaterial({wireframe: false, color: "blue",transparent:true,opacity:1}));
        pulley.rod.position.set(0,0,radius/2);
        pulley.add(pulley.rod);
        pulley.rotation.x=Math.PI/2;
        
        scene.add(pulley);
        
        pulley.index = count;
    pulley.name = "objects["+count+"]";
    pulley.attr = "name,radius,color,opacity,visible,material,rotate";
    objects.push(pulley);
    count+=1;
    dragElements.push(pulley);
    
    pulley.parameters = 
    {
        name : pulley.name,
        radius: 5,
        color: "#ff0000", // color (change "#" to "0x")
        opacity: 1, 
        visible: true,
        material: "Phong",
        rotate:0,
        reset: function() { resetObject(pulley) }

    };
    pulley.gui=function (pulley)
    {

        var pulleyName = gui.add( pulley.parameters, 'name' ).name('Variable Name').listen();

        var pulleyColor = gui.addColor( pulley.parameters, 'color' ).name('Color').listen();
        pulleyColor.onChange(function(value) // onFinishChange
        {   pulley.material.color.setHex( value.replace("#", "0x") );   
        });

        var pulleyLength = gui.add( pulley.parameters, 'radius' ).min(0).max(50).step(1).name('Radius').listen();
        pulleyLength.onChange(function(value)
        {   pulley.geometry = new THREE.CylinderGeometry(value/2,value/2,2, 500, false);
            pulley.geometry.needVerticesUpdate = true;
            
            pulley.disc1.geometry=new THREE.CylinderGeometry(value,value,0.3, 500, false);
            pulley.disc1.geometry.needVerticesUpdate = true;
            
            pulley.disc2.geometry=new THREE.CylinderGeometry(value,value,0.3, 500, false);
            pulley.disc2.geometry.needVerticesUpdate = true;
            
            pulley.rod.geometry=new THREE.BoxGeometry(0.5,2.5,value);
            pulley.rod.geometry.needVerticesUpdate = true;
            pulley.rod.position.set(0,0,value/2);
         });

        var pulleyOpacity = gui.add( pulley.parameters, 'opacity' ).min(0).max(1).step(0.01).name('Opacity').listen();
        pulleyOpacity.onChange(function(value)
        {   console.log("opacity changing");
            pulley.material.opacity = value;   
        //    render();
        });
        console.log("before");
        var pulleyMaterial = gui.add( pulley.parameters, 'material', [ "Basic", "Lambert", "Phong", "Wireframe" ] ).name('material').listen();
        pulleyMaterial.onChange(function(value) 
        {   updateMaterial(pulley,value); 
          });
          var pulleyRotate=gui.add(pulley.parameters,'rotate').min(-Math.PI/2).max(Math.PI/2).step(Math.PI/10).name('Rotate').listen();
          pulleyRotate.onChange(function(value){
              pulley.rotation.y=value;
          });
        console.log("after");
            var pulleyVisible = gui.add( pulley.parameters, 'visible' ).name('Visible?').listen();
        pulleyVisible.onChange(function(value) 
        {   
            pulley.visible = value;      
        });
        gui.add( pulley.parameters, 'rotate' ).name("Rotate");
        gui.add( pulley.parameters, 'reset' ).name("Reset Cube Parameters");
        gui.open();
    };
        
	return pulley;

}
