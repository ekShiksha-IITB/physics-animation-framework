var weigh;
function weigh_creator(unit){
	
	var geometry = new THREE.BoxGeometry(4,4,0);
	var material = new THREE.MeshBasicMaterial( { color: "white"} );
	weigh = new THREE.Mesh(geometry,material);
	var edges = new THREE.EdgesGeometry( geometry );
	var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: "red",linewidth: 1 } ) );
	weigh.add(line);
	
	geometry = new THREE.SphereGeometry(0.1,32,32);
	material = new THREE.MeshBasicMaterial( { color: "red"} );
	var dialc=new THREE.Mesh(geometry,material);
	dialc.position.set(0,0,0);
	weigh.add(dialc);
	
	geometry = new THREE.BoxGeometry(0.03,1,0);
	weigh.dial=new THREE.Mesh(geometry,material);
	weigh.dial.position.set(0,0.5,0.1);
	weigh.add(weigh.dial);
	
	geometry = new THREE.BoxGeometry(0.1,3.5,0);
	var read = new Array();
	for(var i=0;i<8;i++)
	{
		read[i]=new THREE.Mesh(geometry,material);
		read[i].position.set(0,0,0);
		weigh.add(read[i]);
		read[i].rotation.z=i*Math.PI/8;
	}
	
	geometry = new THREE.CircleGeometry(1,32);
	material = new THREE.MeshBasicMaterial( { color: "white"} );
	screen = new THREE.Mesh(geometry,material);
	screen.position.set(0,0,0.01);
	
	weigh.add(screen);
	
	geometry = new THREE.BoxGeometry(1,1,0);
	material = new THREE.MeshBasicMaterial( { color: "grey"} );
	var supp = new THREE.Mesh(geometry,material);
	supp.position.set(0,2.5,0);
	weigh.add(supp);
	
	geometry = new THREE.CylinderGeometry(3,2,1,500,false);
	material = new THREE.MeshBasicMaterial( { color: 0xa67643} );
	supp = new THREE.Mesh(geometry,material);
	supp.position.set(0,3.5,0);
	weigh.add(supp);
	
        weigh.dialMark=function(value){
            weigh.dial.position.set(0.5*Math.sin(value*Math.PI/8),0.5*Math.cos(value*Math.PI/8),0.1);
            weigh.dial.rotation.z=-value*Math.PI/8;
        }
        
	scene.add(weigh);
        
        weigh.index = count;
        weigh.name = "objects["+count+"]";
        weigh.attr = "name,scale,dial";
        objects.push(weigh);
        count+=1;
        dragElements.push(weigh);

        weigh.parameters = 
        {
            name : weigh.name,
            scale:1,
            dial:0

        };
        weigh.gui=function (weigh)
        {

            var weighName = gui.add( weigh.parameters, 'name' ).name('Variable Name').listen();
            
            var weighScale = gui.add( weigh.parameters, 'scale' ).min(0.1).max(10).step(0.1).name('Scale').listen();
            weighScale.onChange(function(value){
                weigh.scale.set(value,value,value);
            });
            var weighDial = gui.add( weigh.parameters, 'dial' ).min(0).max(16).step(1).name('Dial').listen();
            weighDial.onChange(function(value){
                weigh.dial.position.set(0.5*Math.sin(value*Math.PI/8),0.5*Math.cos(value*Math.PI/8),0.1);
                weigh.dial.rotation.z=-value*Math.PI/8;
            });
            gui.open();

        };
	return weigh;
        
}