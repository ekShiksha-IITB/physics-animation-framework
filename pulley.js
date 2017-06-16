function pulley_creator(radius){

	var geometry = new THREE.CylinderGeometry(radius,radius,0.2,500,false);
	var material = new THREE.MeshBasicMaterial( {color:0xffffff} );
	var pulley2 = new THREE.Mesh( geometry, material );
	pulley2.position.set(0,0,0);
	pulley2.rotation.x=Math.PI/2;

	var geometry = new THREE.CylinderGeometry(radius+0.4,radius+0.4,0.19,500,false);
	var material = new THREE.MeshBasicMaterial( {color:0xa67643} );
	var pulley1 = new THREE.Mesh( geometry, material );
	pulley1.position.set(0,0,0);
	pulley2.add(pulley1);

	geometry = new THREE.BoxGeometry(0.5,radius*Math.sqrt(2),0.4);
	material = new THREE.MeshBasicMaterial( {color:0x654321} );
	var rod2 = new THREE.Mesh( geometry, material );
	rod2.position.set(radius/2,0,radius/2);
	rod2.rotation.z=-Math.PI/4;
	rod2.rotation.x=Math.PI/2;
	pulley2.add(rod2);


	var pbar1 = new Array();

	for(var i=0;i<8;i++)
	{
            geometry = new THREE.BoxGeometry(0.2,radius*2,0.3);
            material = new THREE.MeshBasicMaterial({ color: 0xa67643});
            pbar1[i] = new THREE.Mesh(geometry,material);
            pbar1[i].position.set(0,0,0);
            pbar1[i].rotation.z=i*Math.PI/8;
            pbar1[i].rotation.x=Math.PI/2;
            pulley2.add(pbar1[i]);
	}
	scene.add(pulley2);
	console.log("hello");
	return pulley2;

}
