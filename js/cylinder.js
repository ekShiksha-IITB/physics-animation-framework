var cylinder;
function cylinder_creator(radius=5,height=5){
    var cylindergeometry = new THREE.CylinderGeometry(radius,radius,height, 0, false);
    var cylindermaterial = new THREE.MeshBasicMaterial({wireframe: false, color: "red",transparent:true,opacity:1});
    cylinder = new THREE.Mesh(cylindergeometry, cylindermaterial);
    scene.add(cylinder);
   
    
    cylinder.index = count;
    cylinder.name = "objects["+count+"]";
    cylinder.attr = "name,radius,height,color,opacity,visible,material,rotateX,rotateY,rotateZ";
    objects.push(cylinder);
    count+=1;
    dragElements.push(cylinder);
    cylinder.objname="cylinder";
    cylinder.parameters = 
    {
        name : cylinder.name,
        radius: 5,
        height:5,
        color: "#ff0000", // color (change "#" to "0x")
        opacity: 1, 
        visible: true,
        material: "Phong",
        rotateX:0,
        rotateY:0,
        rotateZ:0,
        reset: function() { resetObject(cylinder) }

    };
    cylinder.gui=function(cylinder)
  {
    
    var cylinderName = gui.add( cylinder.parameters, 'name' ).name('Variable Name').listen();
    
    var cylinderColor = gui.addColor( cylinder.parameters, 'color' ).name('Color').listen();
    cylinderColor.onChange(function(value) // onFinishChange
    {   cylinder.material.color.setHex( value.replace("#", "0x") );   
    });
    var cylinderRadius = gui.add( cylinder.parameters, 'radius' ).min(0).max(50).step(1).name('Radius').listen();
    cylinderRadius.onChange(function(value)
    {   cylinder.geometry = new THREE.CylinderGeometry(value,value,cylinder.parameters.height, 500, false);
        cylinder.geometry.needVerticesUpdate = true;
     });
     var cylinderHeight = gui.add( cylinder.parameters, 'height' ).min(0).max(50).step(1).name('Height').listen();
    cylinderHeight.onChange(function(value)
    {   cylinder.geometry = new THREE.CylinderGeometry(cylinder.parameters.radius,cylinder.parameters.radius,value, 500, false);
        cylinder.geometry.needVerticesUpdate = true;
     });
    
    var cylinderOpacity = gui.add( cylinder.parameters, 'opacity' ).min(0).max(1).step(0.01).name('Opacity').listen();
    cylinderOpacity.onChange(function(value)
    {   console.log("opacity changing");
        cylinder.material.opacity = value;   
        render();
    });
    console.log("before");
    var cylinderMaterial = gui.add( cylinder.parameters, 'material', [ "Basic", "Lambert", "Phong", "Wireframe" ] ).name('material').listen();
    cylinderMaterial.onChange(function(value) 
    {   updateMaterial(cylinder,value); 
      });
    console.log("after");
        var cylinderVisible = gui.add( cylinder.parameters, 'visible' ).name('Visible?').listen();
    cylinderVisible.onChange(function(value) 
    {   cylinder.visible = value;      });
    var rotateX=gui.add(cylinder.parameters,'rotateX').min(-Math.PI/2).max(Math.PI/2).step(Math.PI/10).name('rotateX').listen();
    rotateX.onChange(function(value){
        cylinder.rotation.x=value;
    });
    var rotateY=gui.add(cylinder.parameters,'rotateY').min(-Math.PI/2).max(Math.PI/2).step(Math.PI/10).name('rotateY').listen();
    rotateY.onChange(function(value){
        cylinder.rotation.y=value;
    });
    var rotateZ=gui.add(cylinder.parameters,'rotateZ').min(-Math.PI/2).max(Math.PI/2).step(Math.PI/10).name('rotateZ').listen();
    rotateZ.onChange(function(value){
        cylinder.rotation.z=value;
    });
    /*gui.add( cylinder.parameters, 'reset' ).name("Reset Cube Parameters");
    gui.add( cylinder.parameters, 'rotateX' ).name("Rotate in X");
    gui.add( cylinder.parameters, 'rotateY' ).name("Rotate in Y");
    gui.add( cylinder.parameters, 'rotateZ' ).name("Rotate in Z");*/
    gui.open();

  }
    return cylinder;
}



