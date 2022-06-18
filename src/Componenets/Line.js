import React,{useEffect} from 'react';
import * as th from 'three';

export const Line=()=>{
    const renderer = th.WebGLRenderer();
    renderer.setSize(window.innerWidth,window.innerHeight);
    document.body.appendChild(renderer.domElement);
    const camera = th.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
    camera.position(0,0,100);
    camera.lookAt(0,0,0);
    const scene = new th.Scene();
    const material=new th.LineBasicMaterial( { color: 0x0000ff } );
    const points = [];
    points.push( new th.Vector3( - 10, 0, 0 ) );
    points.push( new th.Vector3( 0, 10, 0 ) );
    points.push( new th.Vector3( 10, 0, 0 ) );

    const geometry = new th.BufferGeometry().setFromPoints( points );
    const line = new th.Line(geometry,material);
    scene.add(line);
    renderer.render(scene,camera);
    
    return(
        <div></div>
    )
}