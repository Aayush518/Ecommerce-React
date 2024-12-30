import { useState } from 'react';
import './Hero.css';
import heroBag from '../../assets/luxury-woman-handbag.png';
import testBag from '../../assets/bags/pngwing.com (1).png';
import downArrow from '../../assets/icons/arrow-up-right-svgrepo-com.svg';
import rightArrow from '../../assets/icons/arrow-right-svgrepo-com.svg';

const Hero = () => {
    const slides = [
        {
            title: ['Best Leather Bag', 'Collection For You'],
            image: heroBag,
            backText: 'Prayush',
            description: 'Discover the epitome of style and craftsmanship with our curated bag collection.'
        },
        {
            title: ['Luxurious Design', 'Premium Quality'],
            image: testBag,
            backText: 'Premium',
            description: 'Experience the perfect blend of style and functionality with our signature collection.'
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleNextSlide = () => {
        if (isAnimating || currentSlide >= slides.length - 1) return;
        setIsAnimating(true);
        setCurrentSlide(prev => prev + 1);
        setTimeout(() => setIsAnimating(false), 500);
    };

    const handlePrevSlide = () => {
        if (isAnimating || currentSlide === 0) return;
        setIsAnimating(true);
        setCurrentSlide(prev => prev - 1);
        setTimeout(() => setIsAnimating(false), 500);
    };

    const handleDotClick = (index) => {
        if (isAnimating || currentSlide === index) return;
        setIsAnimating(true);
        setCurrentSlide(index);
        setTimeout(() => setIsAnimating(false), 500);
    };

    return (
        <div className="Hero">
            <div className="hero-container">
                <div className="hero-content">
                    <div className="left-content">
                        <div 
                            className="bag-header"
                            key={`header-${currentSlide}`}
                            style={{ animation: 'fadeIn 0.5s forwards' }}
                        >
                            <h1>{slides[currentSlide].title[0]}</h1>
                            <h1>{slides[currentSlide].title[1]}</h1>
                        </div>
                    </div>

                    <div className="center-content">
                        <div 
                            className="bag-container"
                            key={`bag-${currentSlide}`}
                            style={{ animation: 'fadeIn 0.5s forwards' }}
                        >
                            <img src={slides[currentSlide].image} alt="Leather bag" />
                        </div>

                        <div 
                            className="back-text"
                            key={`backtext-${currentSlide}`}
                            style={{ animation: 'fadeIn 0.8s forwards' }}
                        >
                            {slides[currentSlide].backText}
                        </div>
                    </div>

                    <div className="right-content">
                        <div 
                            className="top-link"
                            key={`toplink-${currentSlide}`}
                            style={{ animation: 'slideInRight 0.5s forwards' }}
                        >
                            <div className="top-desc">
                                <img src={downArrow} alt="Arrow" />
                                <p>{slides[currentSlide].description}</p>
                            </div>
                            <button className="btn button-primary">
                                <span>Start Shopping</span>
                                <img src={rightArrow} alt="Arrow" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="controls">
                    <button 
                        className={`btn prev-btn ${currentSlide === 0 ? 'disabled' : ''}`}
                        onClick={handlePrevSlide}
                        disabled={isAnimating || currentSlide === 0}
                    >
                        <img src={rightArrow} alt="Previous" />
                    </button>
                    <button 
                        className={`btn next-btn ${currentSlide === slides.length - 1 ? 'disabled' : ''}`}
                        onClick={handleNextSlide}
                        disabled={isAnimating || currentSlide === slides.length - 1}
                    >
                        <img src={rightArrow} alt="Next" />
                    </button>
                </div>

                <div className="slider-dots">
                    {slides.map((_, index) => (
                        <span 
                            key={`dot-${index}`}
                            className={`dot ${currentSlide === index ? 'active' : ''}`}
                            onClick={() => handleDotClick(index)}
                            role="button"
                            tabIndex={0}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;