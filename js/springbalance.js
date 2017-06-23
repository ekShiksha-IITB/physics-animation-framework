function springbalance_creator()
{
	var geometry = new THREE.BoxGeometry(10,20,5);
	var material = new THREE.MeshBasicMaterial({color:0xaaaaaa});
	var springB = new THREE.Mesh(geometry,material);
	var springBalanceY = 0;
	springB.position.set(1,springBalanceY,0);

					
	geometry = new THREE.PlaneGeometry(5,0.5);
	material = new THREE.MeshBasicMaterial({color:0xff0000});
	springB.side1 = new THREE.Mesh(geometry,material);
	var diffside1 = 7.5;
	springB.side1.position.set(0,springBalanceY+diffside1,6);
	
					
	geometry = new THREE.PlaneGeometry(5,15);
	material = new THREE.MeshBasicMaterial({color:0xffff00});
	var side2 = new THREE.Mesh(geometry,material);
	springB.add(side2);
	var diffside2 = 0;
	side2.position.set(0,springBalanceY,5);
	
	
	geometry = new THREE.BoxGeometry(0.5,10,0,5);
	material = new THREE.MeshBasicMaterial({color:0x000000});
	var string = new THREE.Mesh(geometry,material);
	var diffstring = -10;
	string.position.set(0,springBalanceY + diffstring,0);
	
	geometry = new THREE.BoxGeometry(1.5,0.5,0.5);
	material = new THREE.MeshBasicMaterial({color:0x0000aa});
	pointer = new THREE.Mesh(geometry,material);
	pointer.position.set(3,springBalanceY,5);
	
	geometry = new THREE.BoxGeometry(10,6,5);
	material = new THREE.MeshBasicMaterial({color:0xaaaaaa});
	var dis = new THREE.Mesh(geometry, material);
	dis.position.set(0,springBalanceY+26,0);

	
	//var springB = new THREE.Object3D();
	//springB.add(springBalance);
	springB.add(springB.side1);
	springB.add(side2);
	springB.add(string);
	springB.add(pointer);
	//springB.add(dis);
	scene.add(springB);
        
        
        springB.setReading=function(value)
        {
            springB.side1.position.set(0,springBalanceY+7.5-value,6);
        }
        
    springB.index = count;
    springB.obj="springB";
    springB.name = "objects["+count+"]";
    springB.attr = "name,scale,visible,reading";
    objects.push(springB);
    count+=1;
    dragElements.push(springB);
    
    springB.parameters = 
    {
        name : springB.name,
        scale:1,
        visible: true,
        reading:0
        //reset: function() { resetObject(springB) }

    };
    springB.gui=function (springB)
    {

        var springBName = gui.add( springB.parameters, 'name' ).name('Variable Name').listen();

        var springBscale=gui.add(springB.parameters, 'scale' ).min(0.1).max(5).step(0.1).name('Scale').listen();
        springBscale.onChange(function(value){
           springB.scale.set(value,value,value); 
        });
        
        var springBreading=gui.add(springB.parameters, 'reading' ).min(0).max(15).step(0.1).name('Reading').listen();
       springBreading.onChange(function(value){
           springB.side1.position.set(0,springBalanceY+7.5-value,6);
       });
        
        var springBVisible = gui.add( springB.parameters, 'visible' ).name('Visible?').listen();
        springBVisible.onChange(function(value) 
        {   
            springB.visible = value;      
        });
        
        gui.open();

    };
        
	return springB;
    
}