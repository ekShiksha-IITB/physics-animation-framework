
function prism_creator(Base,Height,Depth){

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
        var A = new THREE.Vector2( -Base/2,0 );
        var B = new THREE.Vector2( Base/2, 0 );
        var C = new THREE.Vector2( 0, Height );
                        
        var geometry = new PrismGeometry( [ A, B, C ], Depth ); 

        var material = new THREE.MeshPhongMaterial( { color: "white", /*specular: 0x00ffff, shininess: 20*/ } );

        var prism1 = new THREE.Mesh( geometry, material );

        scene.add( prism1 );
        return prism1;
}