var spring;
function spring_creator(coilR=2,coilHeight=10)
{
	function CoilCurve(scale) {

	  this.scale = (scale === undefined) ? 1 : scale;

	}
	var coilC=0.5;

	
	
	CoilCurve.prototype = Object.create(THREE.Curve.prototype);
	CoilCurve.prototype.constructor = CoilCurve;

	CoilCurve.prototype.getPoint = function(t){

	 
	  var tx = coilR*Math.cos( 2 * Math.PI * t );
		var ty = coilR*Math.sin( 2 * Math.PI * t );
		var tz = coilC*2 * Math.PI * t / 2 ;
	  return new THREE.Vector3(tx, tz, ty).multiplyScalar(this.scale);

	};

	 Coilpath = new CoilCurve(1);
    var material = new THREE.MeshPhongMaterial( {color: "red",transparent:true,opacity:1} );
	//var coil = new THREE.Group();
         spring = new THREE.Mesh(new THREE.TubeGeometry(Coilpath, 100, .2, 8, false),material);
	  spring.position.x = 0;
	  spring.position.y = i * coilC * Math.PI ;
          spring.spring2=[];
	for(var i=0;i<coilHeight-1;i++){
	  spring.spring2[i] = new THREE.Mesh(new THREE.TubeGeometry(Coilpath, 100, .2, 8, false),material);
	  spring.spring2[i].position.x = 0;
	  spring.spring2[i].position.y = i * coilC * Math.PI ;
	  spring.add(spring.spring2[i]);   
	}
        
        spring.Coilpath=Coilpath;
	scene.add(spring);
	
	spring.rotation.z=Math.PI/2;
	
        spring.index = count;
    spring.name = "objects["+count+"]";
    spring.attr = "side";
    objects.push(spring);
    count+=1;
    dragElements.push(spring);
    
    spring.parameters = 
    {
        name : spring.name,
        radius:2,
        height:10,
        color: "#ff0000", // color (change "#" to "0x")
        opacity: 1, 
        visible: true,
        material: "Phong",
        reset: function() { resetObject(spring) }

    };
    spring.gui=function (spring)
    {

        var springName = gui.add( spring.parameters, 'name' ).name('Variable Name').listen();

        var springColor = gui.addColor( spring.parameters, 'color' ).name('Color').listen();
        springColor.onChange(function(value) // onFinishChange
        {   spring.material.color.setHex( value.replace("#", "0x") );   
        });

        var springLength = gui.add( spring.parameters, 'height' ).min(1).max(50).step(1).name('Height').listen();
        springLength.onChange(function(value){   
            if(spring.spring2.length>value)
            {
                for(var i=spring.spring2.length-1;i>=value;i--)
                {
                    spring.remove(spring.spring2[i]);
                    spring.spring2.pop();
                }
                console.log(spring.spring2);
            }
            else if(spring.spring2.length<value)
            {
                for(var i=spring.spring2.length;i<value;i++)
                {
                    spring.spring2[i] = new THREE.Mesh(new THREE.TubeGeometry(Coilpath, 100, .2, 8, false),material);
                    spring.spring2[i].position.x = 0;
                    spring.spring2[i].position.y = i * coilC * Math.PI ;
                    spring.add(spring.spring2[i]); 
                }
                console.log(value);
            }
            console.log(spring.parameters.height);
         });

        var springOpacity = gui.add( spring.parameters, 'opacity' ).min(0).max(1).step(0.01).name('Opacity').listen();
        springOpacity.onChange(function(value)
        {   console.log("opacity changing");
            spring.material.opacity = value;   
        //    render();
        });
        console.log("before");
        var springMaterial = gui.add( spring.parameters, 'material', [ "Basic", "Lambert", "Phong", "Wireframe" ] ).name('material').listen();
        springMaterial.onChange(function(value) 
        {   updateMaterial(spring,value); 
          });
        console.log("after");
            var springVisible = gui.add( spring.parameters, 'visible' ).name('Visible?').listen();
        springVisible.onChange(function(value) 
        {   
            spring.visible = value;      
        });
        gui.add( spring.parameters, 'reset' ).name("Reset Cube Parameters");
        gui.open();

    }
	
	return spring;
}