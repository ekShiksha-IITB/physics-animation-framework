var ammeter;
function ammeter_creator()
{

var ammeter = new THREE.Mesh(new THREE.CylinderGeometry(5.5,5.5,4,32),new THREE.MeshPhongMaterial({color:"black"}));


	ammeter.rotation.x = Math.PI/2;
	ammeter.position.set(-2,0.2,-0.13);
	
        var a1 = new THREE.Mesh(new THREE.CylinderGeometry(1.4,1.4,1.1,32),new THREE.MeshPhongMaterial({color:"grey"}));

	//a1.rotation.x = Math.PI/12;
	a1.position.set(-1.89,-5.6,-0.13);
	ammeter.add(a1);


	var ammeterbody1 = new THREE.Mesh(new THREE.CylinderGeometry(5,5,3.8,32),new THREE.MeshPhongMaterial({color:"white"}));

	ammeterbody1.rotation.x = Math.PI/2;
	ammeterbody1.position.set(-2,0,0);
	ammeter.add(ammeterbody1);

	var ammeterbody2 = new THREE.Mesh(new THREE.RingGeometry(5.1,5.3,32,9,7.9,Math.PI*2/2.8,Math.PI*2/2.7),new THREE.MeshPhongMaterial({color:"black"}));

	//ammeterbody.rotation.x = Math.PI/2;
	ammeterbody2.position.set(-2.1,-1.6,2.2);
	ammeterbody2.rotation.z = -Math.PI*77/198;
	ammeter.add(ammeterbody2);

	var Geom = new THREE.SphereGeometry(1.5, 32, 24);
   	var one = new Array(12);
	 one[0] =  new THREE.Mesh( new THREE.RingGeometry(0.1,0.2,32,8,0,1.4*Math.PI),new THREE.MeshBasicMaterial({color: "black",side:THREE.DoubleSide}));
	one[0].position.set(-2-0.3,3.9,2.1);

	one[0].rotation.z = -Math.PI/1.45;

	 one[1] =  new THREE.Mesh( new THREE.CubeGeometry( 0.1, 0.3, 0.1, 4, 4, 1 ),new THREE.MeshBasicMaterial({color: "black"}));
	one[1].position.set(-2.1-0.3,4.3-2+1.9,2.1);


 one[2] =  new THREE.Mesh( new THREE.CubeGeometry( 0.4, 0.1, 0.1, 4, 4, 1 ),new THREE.MeshBasicMaterial({color: "black"}));
	one[2].position.set(-1.96-0.3,4.5-2+1.9,2.1);
	//one.rotation.z = Math.PI/2;


 one[3] =  new THREE.Mesh( new THREE.RingGeometry( 0.2, 0.3, 32, 8, 0, Math.PI*2 ),new THREE.MeshBasicMaterial({color: "black"}));
	one[3].position.set(-1.5-0.3,4.1-2+1.9,2.1);
	//one.rotation.z = Math.PI/2;

	//ammeterbody.rotation.z = -Math.PI/14;

 one[4] =  new THREE.Mesh( new THREE.RingGeometry( 0.2, 0.3, 32, 8, 0, Math.PI*2 ),new THREE.MeshBasicMaterial({color: "black"}));
	one[4].position.set(1+0.8,0.9,2.1);
	//one.rotation.z = Math.PI/2;


var l=1;var ll=0.4;
	one[5] =  new THREE.Mesh( new THREE.RingGeometry( 0.2, 0.3, 32, 8, 0, Math.PI*2 ),new THREE.MeshBasicMaterial({color: "black"}));
	one[5].position.set(-15.5-l,0.5+ll,2.1);
	//one.rotation.z = Math.PI/2;

	one[6] =  new THREE.Mesh( new THREE.RingGeometry( 0.2, 0.3, 32, 8, 0, Math.PI*2 ),new THREE.MeshBasicMaterial({color: "black"}));
	one[6].position.set(2.2-l,0.5+ll,2.1);
	//one.rotation.z = Math.PI/2;


 	one[7] =  new THREE.Mesh( new THREE.CubeGeometry( 0.1, 0.6, 0.1, 4, 4, 1 ),new THREE.MeshBasicMaterial({color: "black"}));
	one[7].position.set(1.7-l,0.5+ll,2.1);
	//one.rotation.z = Math.PI/2;



	one[8] =  new THREE.Mesh( new THREE.RingGeometry(0.25,0.35,32,8,0,1.4*Math.PI),new THREE.MeshBasicMaterial({color: "red",side:THREE.DoubleSide}));
	one[8].position.set(5-0.7,0,2.2);

	one[8].rotation.z = -Math.PI/6;

	one[8] =  new THREE.Mesh( new THREE.RingGeometry(0.25,0.35,32,8,0,1.4*Math.PI),new THREE.MeshBasicMaterial({color: "black",side:THREE.DoubleSide}));
	one[8].position.set(-2-0.15,0,2.2);

	one[8].rotation.z = -Math.PI/6;


 	one[9] =  new THREE.Mesh( new THREE.CubeGeometry( 0.1, 0.6, 0.1, 4, 4, 1 ),new THREE.MeshBasicMaterial({color: "black"}));
	one[9].position.set(-2-1,0.1,2.2);
	//one.rotation.z = Math.PI/2;



 	one[10] =  new THREE.Mesh( new THREE.CubeGeometry( 0.1, 1, 0.1, 4, 4, 1 ),new THREE.MeshBasicMaterial({color: "black"}));
	one[10].position.set(-19.3,0.3,2.2);
	//one.rotation.z = Math.PI/2;

	one[10].rotation.z = -Math.PI/10;


 	one[11] =  new THREE.Mesh( new THREE.CubeGeometry( 0.1, 1, 0.1, 4, 4, 1 ),new THREE.MeshBasicMaterial({color: "black"}));
	one[11].position.set(-19.3,0.3,2.2);
	//one.rotation.z = Math.PI/2;

	one[11].rotation.z = -Math.PI/10;


 	one[12] =  new THREE.Mesh( new THREE.CubeGeometry( 0.1, 1, 0.1, 4, 4, 1 ),new THREE.MeshBasicMaterial({color: "black"}));
	one[12].position.set(-19,0.3,2.2);
	//one.rotation.z = Math.PI/2;

	one[12].rotation.z = -9*Math.PI/10;


 	one[12] =  new THREE.Mesh( new THREE.CubeGeometry( 0.3, 0.1, 0.1, 4, 4, 1 ),new THREE.MeshBasicMaterial({color: "black"}));
	one[12].position.set(-19.2,0.3,2.2);
	//one.rotation.z = Math.PI/2;

var loader = new THREE.FontLoader();
	loader.load( 'helvetiker_regular.typeface.json', function ( font ) {

  	var gtextGeometry = new THREE.TextGeometry( "50", { font: font, size: 0.8, height: 0.1, curveSegments: 7});

  	var gtextMaterial = new THREE.MeshBasicMaterial( { color: "black" });

  	var gmesh = new THREE.Mesh( gtextGeometry, gtextMaterial );
	gmesh.position.set(-2.4, 3.7, 2.5) ;
	ammeter.add(gmesh);

	var gtextGeometry = new THREE.TextGeometry( "mA", { font: font, size: 0.8, height: 0.1, curveSegments: 7});

  	var gtextMaterial = new THREE.MeshBasicMaterial( { color: "black" });

  	var gmesh111 = new THREE.Mesh( gtextGeometry, gtextMaterial );
	gmesh111.position.set(-2.4, 0, 2.5) ;
	ammeter.add(gmesh111);

	var gtextGeometry23 = new THREE.TextGeometry( "100", { font: font, size: 0.8, height: 0.1, curveSegments: 7});

  	var gtextMaterial23 = new THREE.MeshBasicMaterial( { color: "black" });

  	var gmesh2 = new THREE.Mesh( gtextGeometry23, gtextMaterial23 );
	gmesh2.position.set(0.3, 1.8, 2.5) ;
	gmesh2.rotation.z-=0.8;
	ammeter.add(gmesh2);

	var gtextGeometry23 = new THREE.TextGeometry( "0", { font: font, size: 0.8, height: 0.1, curveSegments: 7});

  	var gtextMaterial23 = new THREE.MeshBasicMaterial( { color: "black" });

  	var gmesh3 = new THREE.Mesh( gtextGeometry23, gtextMaterial23 );
	gmesh3.position.set(-5.4, 0.6, 2.5) ;
	gmesh3.rotation.z+=0.8;
	ammeter.add(gmesh3);
  	;});

     ammetersphere = new THREE.Mesh(new THREE.SphereGeometry(0.3,32,28),new THREE.MeshPhongMaterial({color:"green"}));
//	ammeterneedle.rotation.x = Math.PI/2;
	ammetersphere.position.set(-20,-2,2.1);
	var ammeterneedle2 = new THREE.Mesh(new THREE.CylinderGeometry(0.05,0.2,4.3,32),new THREE.MeshPhongMaterial({color:"red"}));
	ammeterneedle2.rotation.x = 0;
	ammeterneedle2.position.set(0,2.4,0);

	ammetersphere.add(ammeterneedle2);

		ammetersphere.position.set(-2,-1.5,2);

	ammetersphere.rotation.z = Math.PI/3;


	var ammeter1 = new THREE.Mesh(new THREE.CylinderGeometry(0.05,0.05,0.8,32),new THREE.MeshPhongMaterial({color:"black"}));
	ammeter1.position.set(-6.45,0.73,2.1);
	ammeter1.rotation.z = Math.PI/3;


	var ammeter2 = new THREE.Mesh(new THREE.CylinderGeometry(0.05,0.05,0.8,32),new THREE.MeshPhongMaterial({color:"black"}));
	ammeter2.position.set(2.5,0.2,2.1);
	ammeter2.rotation.z = -Math.PI/3;


	var ammeter3 = new THREE.Mesh(new THREE.CylinderGeometry(0.05,0.05,0.8,32),new THREE.MeshPhongMaterial({color:"black"}));
	ammeter3.position.set(-1.8,3.1,2.2);
	ammeter3.rotation.z =0;

//var geometry = new THREE.CylinderGeometry( 5.5, 4.7, 200 );
//var material = new THREE.MeshBasicMaterial( { color: "grey", side: THREE.DoubleSide } );
//var mesh = new THREE.Mesh( geometry, material );
//mesh.position.set(-2,0,2);
//ammeter.add( mesh );

BeakerGroup=new THREE.Group();
topg = new THREE.CylinderGeometry(5.05,5.05,3.5,50,50, true);
topm= new THREE.MeshPhysicalMaterial({color: 'red', side:THREE.DoubleSide,opacity:100});
cone = new THREE.Mesh(topg,topm);
cone.position.z=0.3;
cone.position.x=-2;
cone.position.y=0;
cone.scale.z=2;
cone.rotation.x=Math.PI/2;

    ammeter.add(ammeter1);
     ammeter.add(ammeter2);
      ammeter.add(ammeter3);
      ammeter.add(ammetersphere);


    scene.add(ammeter);

    ammeter.index = count;
    ammeter.name = "objects["+count+"]";
    ammeter.attr = "side";
    objects.push(ammeter);
    count+=1;
    dragElements.push(ammeter);

    ammeter.parameters =
    {
        name : ammeter.name,
        length: 5,
        color: "#ff0000", // color (change "#" to "0x")
        opacity: 1,
        visible: true,
        material: "Phong",
        reset: function() { resetObject(ammeter) }

    };
    ammeter.gui=function (ammeter)
    {

        var ammeterName = gui.add( ammeter.parameters, 'name' ).name('Variable Name').listen();
        var ammeterVisible = gui.add( ammeter.parameters, 'visible' ).name('Visible?').listen();
        ammeterVisible.onChange(function(value)
        {
            ammeter.visible = value;
        });
				var ammeterScale = gui.add(ammeter.parameters,'scale').min(0.1).max(10).step(0.1).name('Scale').listen();
				weighScale.onChange(function(value){
					weigh.scale.set(value,value,value);
				});
				gui.add( ammeter.parameters, 'reset' ).name("Reset Cube Parameters");
        gui.open();
    };
return ammeter;
}
