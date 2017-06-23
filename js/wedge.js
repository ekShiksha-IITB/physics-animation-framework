var wedge;
function wedge_creator(height=2,base=2,width=2){
PrismGeometry = function ( vertices, height ) {

    var Shape = new THREE.Shape();

    ( function f( ctx ) {

        ctx.moveTo( vertices[0].x, vertices[0].y );
        for (var i=1; i < vertices.length; i++) {
            ctx.lineTo( vertices[i].x, vertices[i].y );
        }
        ctx.lineTo( vertices[0].x, vertices[0].y );

    } )( Shape );

    var settings = { };
    settings.amount = height;
    settings.bevelEnabled = false;
    THREE.ExtrudeGeometry.call( this, Shape, settings );

};

PrismGeometry.prototype = Object.create( THREE.ExtrudeGeometry.prototype );
var A = new THREE.Vector2( 0, 0 );
var B = new THREE.Vector2( base, 0 );
var C = new THREE.Vector2( base, height );

                
var geometry = new PrismGeometry( [ A, B, C ], width ); 

var material = new THREE.MeshPhongMaterial( { color: 0x00b2fc, specular: 0x00ffff, shininess: 20 } );

wedge = new THREE.Mesh( geometry, material );
//wedge.rotation.x = -Math.PI  /  2;


scene.add(wedge); 

    wedge.index = count;
    wedge.name = "objects["+count+"]";
    wedge.attr = "name,length,breadth,width,color,opacity,visible,material,rotate";
    objects.push(wedge);
    count+=1;
    dragElements.push(wedge);
    
    wedge.parameters = 
    {
        name : wedge.name,
        length: 5,
        breadth:5,
        width:5,
        color: "#ff0000", // color (change "#" to "0x")
        opacity: 1, 
        visible: true,
        material: "Phong",
        rotate:0
    };
    wedge.gui=function (wedge)
    {

        var wedgeName = gui.add( wedge.parameters, 'name' ).name('Variable Name').listen();

        var wedgeColor = gui.addColor( wedge.parameters, 'color' ).name('Color').listen();
        wedgeColor.onChange(function(value) // onFinishChange
        {   wedge.material.color.setHex( value.replace("#", "0x") );   
        });

        var wedgeLength = gui.add( wedge.parameters, 'length' ).min(0).max(50).step(1).name('Length').listen();
        wedgeLength.onChange(function(value)
        {   
            var A = new THREE.Vector2( 0, 0 );
            var B = new THREE.Vector2( wedge.parameters.breadth, 0 );
            var C = new THREE.Vector2( wedge.parameters.breadth, value);

            wedge.geometry=new PrismGeometry( [ A, B, C ], wedge.parameters.width ); 
            wedge.geometry.needVerticesUpdate = true;
         });
         
         var wedgeBreadth = gui.add( wedge.parameters, 'breadth' ).min(0).max(50).step(1).name('Breadth').listen();
        wedgeBreadth.onChange(function(value)
        {   
            var A = new THREE.Vector2( 0, 0 );
            var B = new THREE.Vector2( value, 0 );
            var C = new THREE.Vector2( value, wedge.parameters.length);

            wedge.geometry=new PrismGeometry( [ A, B, C ], wedge.parameters.width ); 
            wedge.geometry.needVerticesUpdate = true;
         });
         
         var wedgeHeight = gui.add( wedge.parameters, 'width' ).min(0).max(50).step(1).name('Width').listen();
        wedgeHeight.onChange(function(value)
        {   
            var A = new THREE.Vector2( 0, 0 );
            var B = new THREE.Vector2( wedge.parameters.breadth, 0 );
            var C = new THREE.Vector2( wedge.parameters.breadth, wedge.parameters.length);

            wedge.geometry=new PrismGeometry( [ A, B, C ], value); 
            wedge.geometry.needVerticesUpdate = true;
         });
        
        var wedgeRotate=gui.add(wedge.parameters,'rotate').min(-Math.PI).max(Math.PI).step(Math.PI).name('Rotate').listen();
          wedgeRotate.onChange(function(value){
              wedge.rotation.y=value;
          });
        
        var wedgeOpacity = gui.add( wedge.parameters, 'opacity' ).min(0).max(1).step(0.01).name('Opacity').listen();
        wedgeOpacity.onChange(function(value)
        {   console.log("opacity changing");
            wedge.material.opacity = value;   
        //    render();
        });
        console.log("before");
        var wedgeMaterial = gui.add( wedge.parameters, 'material', [ "Basic", "Lambert", "Phong", "Wireframe" ] ).name('material').listen();
        wedgeMaterial.onChange(function(value) 
        {   updateMaterial(wedge,value); 
          });
        console.log("after");
            var wedgeVisible = gui.add( wedge.parameters, 'visible' ).name('Visible?').listen();
        wedgeVisible.onChange(function(value) 
        {   
            wedge.visible = value;      
        });
        gui.add( wedge.parameters, 'reset' ).name("Reset Cube Parameters");
        gui.add( wedge.parameters, 'rotate' ).name("Rotate");
        gui.open();

    };


return wedge;
}