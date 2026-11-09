import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeOrganicSphere: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const scene = new THREE.Scene();

    const width = mount.clientWidth || 320;
    const height = mount.clientHeight || 260;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.z = 5.2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Group for rotation
    const group = new THREE.Group();
    scene.add(group);

    // TorusKnot creates the exact glossy coiled ribbed spiral organic look from the screenshot!
    const geometry = new THREE.TorusKnotGeometry(1.25, 0.42, 128, 32, 2, 3);

    const material = new THREE.MeshPhysicalMaterial({
      color: 0x15803d,
      emissive: 0x052e16,
      emissiveIntensity: 0.35,
      roughness: 0.15,
      metalness: 0.88,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      reflectivity: 0.95,
      sheen: 1.0,
      sheenColor: new THREE.Color(0x4ade80),
    });

    const mesh = new THREE.Mesh(geometry, material);
    group.add(mesh);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const topGreenLight = new THREE.DirectionalLight(0x4ade80, 3.5);
    topGreenLight.position.set(4, 5, 4);
    scene.add(topGreenLight);

    const rimLight = new THREE.DirectionalLight(0x22c55e, 2.0);
    rimLight.position.set(-4, -2, -2);
    scene.add(rimLight);

    const specularPoint = new THREE.PointLight(0x86efac, 2, 8);
    specularPoint.position.set(2, 2, 3);
    scene.add(specularPoint);

    // Mouse movement
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetY = x * 0.5;
      targetX = -y * 0.5;
    };

    mount.addEventListener('mousemove', handleMouseMove);

    // Resize
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newW, height: newH } = entry.contentRect;
        if (newW > 0 && newH > 0) {
          camera.aspect = newW / newH;
          camera.updateProjectionMatrix();
          renderer.setSize(newW, newH);
        }
      }
    });
    resizeObserver.observe(mount);

    // Animation loop
    let animationFrameId: number;
    let isVisible = true;

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    intersectionObserver.observe(mount);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      if (!prefersReducedMotion) {
        group.rotation.y += 0.005;
        group.rotation.x += 0.003;
      }

      group.rotation.y += (targetY - group.rotation.y) * 0.04;
      group.rotation.x += (targetX - group.rotation.x) * 0.04;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      mount.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full min-h-[220px] max-h-[300px] flex items-center justify-center cursor-grab active:cursor-grabbing"
      title="Interactive 3D Glossy Organic Ribbed Sphere"
    />
  );
};

