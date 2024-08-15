import React from 'react'
import '../hero.css'
function Hero() {
    return (
        <div className='heroic'>
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-image">
                        <img
                            src="https://media.istockphoto.com/id/1301178557/photo/raw-broccoli-in-hand-vegeterian-food-or-diet-concept.webp?b=1&s=612x612&w=0&k=20&c=AOpHjcHYH5-Be6fTAxtGxSFjODf_beYeAax1qTlMlKk="
                            alt="broccoli"
                        />
                    </div>
                    <div className="hero-text">
                        <h1>Shop On The Go !!!</h1>
                        <button>SHOP NOW</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero