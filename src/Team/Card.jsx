import './card-style.css';
import React from 'react';

export default function Card({ imgsrc, name, title, className }) {
    const cardClass = `card text-center ${className || ''}`; // merge classes

    if (!imgsrc) {
        return (
            <div className={cardClass}>
                <div className="overflow">
                    <img
                        src={imgsrc}
                        alt="team member"
                        className="enlarge-hover.card-img-top"
                        style={{ display: 'none' }}
                    />
                </div>
                <div className="card-body text-dark" style={{ display: 'none' }}>
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text text-secondary">{title}</p>
                </div>
            </div>
        );
    }

    return (
        <div className={cardClass}>
            <div className="overflow">
                <img src={imgsrc} alt="team member" className="card-img-top" />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{name}</h4>
                <p className="card-text text-secondary">{title}</p>
            </div>
        </div>
    );
}
