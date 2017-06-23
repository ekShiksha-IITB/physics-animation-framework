
var cube;
function cube_creator(side=5){
    cube = new THREE.Mesh(new THREE.BoxGeometry(side,side,side),new THREE.MeshBasicMaterial({color:"red",transparent:true,opacity:1}));
    scene.add(cube);
    cube.index = count;
    cube.obj="cube";
    cube.name = "objects["+count+"]";
    cube.attr = "name,length,color,opacity,visible,material";
    objects.push(cube);
    count+=1;
    dragElements.push(cube);
    
    cube.parameters = 
    {
        name : cube.name,
        length: 5,
        color: "#ff0000", // color (change "#" to "0x")
        opacity: 1, 
        visible: true,
        material: "Phong",
        reset: function() { resetObject(cube) }

    };
    cube.gui=function (cube)
    {

        var cubeName = gui.add( cube.parameters, 'name' ).name('Variable Name').listen();

        var cubeColor = gui.addColor( cube.parameters, 'color' ).name('Color').listen();
        cubeColor.onChange(function(value) // onFinishChange
        {   cube.material.color.setHex( value.replace("#", "0x") );   
        });

        var cubeLength = gui.add( cube.parameters, 'length' ).min(0).max(50).step(1).name('Length').listen();
        cubeLength.onChange(function(value)
        {   cube.geometry = new THREE.BoxGeometry(value,value,value);
            cube.geometry.needVerticesUpdate = true;
         });

        var cubeOpacity = gui.add( cube.parameters, 'opacity' ).min(0).max(1).step(0.01).name('Opacity').listen();
        cubeOpacity.onChange(function(value)
        {   console.log("opacity changing");
            cube.material.opacity = value;   
        //    render();
        });
        console.log("before");
        var cubeMaterial = gui.add( cube.parameters, 'material', [ "Basic", "Lambert", "Phong", "Wireframe" ] ).name('material').listen();
        cubeMaterial.onChange(function(value) 
        {   updateMaterial(cube,value); 
          });
        console.log("after");
            var cubeVisible = gui.add( cube.parameters, 'visible' ).name('Visible?').listen();
        cubeVisible.onChange(function(value) 
        {   
            cube.visible = value;      
        });
        gui.add( cube.parameters, 'reset' ).name("Reset Cube Parameters");
        gui.open();

    };
      return cube;
            
}

  
