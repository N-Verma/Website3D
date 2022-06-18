import React,{useEffect} from 'react';
import * as th from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
export const Demo=()=>{
    useEffect(()=>{
        const camera = new th.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
    const scene = new th.Scene();
    
    var renderer = new th.WebGLRenderer({
        canvas:document.querySelector('#bg')
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth,window.innerHeight);
    camera.position.setZ(30);
    const geometry = new th.TorusGeometry(10,3,16,100);
    const material = new th.MeshStandardMaterial({color: 0xFF6347});
    const torus = new th.Mesh(geometry,material);
    const p1 = new th.PointLight('yellow');
    const p2 = new th.PointLight('red');
    p1.position.set(20,0,0);
    p2.position.set(-20,10,5);
    const lh1 = new th.PointLightHelper(p1);
    const lh2 = new th.PointLightHelper(p2);
    const gridHelper = new th.GridHelper(200,50);
    scene.add(p1,p2);
    scene.add(lh1,lh2,gridHelper);
    scene.add(torus);

    
    const controls = new OrbitControls(camera, renderer.domElement);
    //renderer.render(scene,camera);
    var addStar=()=>{
        const sphere = new th.SphereGeometry(0.25,24,24);
        const smaterial = new th.MeshStandardMaterial({color: 0xffffff});
        const star = new th.Mesh(sphere,smaterial);
        const [x,y,z] = Array(3).fill().map(()=>th.MathUtils.randFloatSpread(100));
        star.position.set(x,y,z);
        scene.add(star);
    }
    
    var animate = function () {
        requestAnimationFrame( animate );
        torus.rotation.x += 0.01;
        torus.rotation.y += 0.01;
        controls.update();
        renderer.render( scene, camera );
        
    }
    animate();
    Array(10).fill().forEach(addStar);
    
    })
    return(
        <div></div>
    )
}