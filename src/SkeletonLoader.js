import React from 'react';
import './skeleton.css';

export default function SkeletonLoader({
    style, // Används för att sätta unika stil
    className, // Används för att sätta ett eller flera klassnamn
}) {
    // Sätt default css klass
    if (!className || className === '') {
        className = 'skeleton-loader';
    } else {
        className = `skeleton-loader ${className}`;
    }

    return <div style={style} className={className} />
}