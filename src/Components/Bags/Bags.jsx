import { useState, useEffect } from 'react';
import bag1 from '../../assets/bags/pngwing.com.png';
import bag2 from '../../assets/bags/pngwing.com (1).png';
import bag3 from '../../assets/bags/pngwing.com (2).png';
import bag4 from '../../assets/bags/pngwing.com (3).png';
import bag5 from '../../assets/bags/pngwing.com (4).png';
import bag6 from '../../assets/bags/pngwing.com (5).png';
import BagCard from '../BagCard/BagCard';
import './Bags.css';

const Bags = () => {
    const allBags = [
        {
            id: 'bag1',
            bagTitle: 'Hobo Small',
            bagPrice: 195.00,
            bagImage: bag1,
            collection: 'all'
        },
        {
            id: 'bag2',
            bagTitle: 'Hobo Medium',
            bagPrice: 225.00,
            bagImage: bag2,
            collection: 'new'
        },
        {
            id: 'bag3',
            bagTitle: 'Hobo Large',
            bagPrice: 250.00,
            bagImage: bag3,
            collection: 'popular'
        },
        {
            id: 'bag4',
            bagTitle: 'Hobo Small',
            bagPrice: 195.00,
            bagImage: bag4,
            collection: 'new'
        },
        {
            id: 'bag5',
            bagTitle: 'Hobo Medium',
            bagPrice: 225.00,
            bagImage: bag5,
            collection: 'popular'
        },
        {
            id: 'bag6',
            bagTitle: 'Hobo Large',
            bagPrice: 250.00,
            bagImage: bag6,
            collection: 'all'
        }
    ];

    const [selectedCollection, setSelectedCollection] = useState('all');
    const [filteredBags, setFilteredBags] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading
        setIsLoading(true);
        setTimeout(() => {
            handleCollectionChange(selectedCollection);
            setIsLoading(false);
        }, 300);
    }, []);

    const handleCollectionChange = (collection) => {
        setSelectedCollection(collection);
        if (collection === 'all') {
            setFilteredBags(allBags);
        } else {
            setFilteredBags(allBags.filter(bag => bag.collection === collection));
        }
    };

    const collections = [
        { id: 'all', label: 'All Collection' },
        { id: 'new', label: 'New Collection' },
        { id: 'popular', label: 'Popular Collection' },
    ];

    return (
        <section className="bags-section">
            <div className="bags-header">
                <h2 className="section-title">Our Collection</h2>
                <p className="section-subtitle">Discover our carefully curated bag selection</p>
            </div>

            <div className="filter-container">
                <form className='bagCategory'>
                    {collections.map(collection => (
                        <div className="option" key={collection.id}>
                            <input 
                                type="radio" 
                                name="collection" 
                                id={`${collection.id}_collection`}
                                checked={selectedCollection === collection.id}
                                onChange={() => handleCollectionChange(collection.id)}
                            />
                            <label htmlFor={`${collection.id}_collection`}>{collection.label}</label>
                        </div>
                    ))}
                </form>
            </div>
            
            {isLoading ? (
                <div className="loading-container">
                    <div className="loading-spinner"></div>
                </div>
            ) : (
                <div className='bags'>
                    {filteredBags.length > 0 ? (
                        filteredBags.map((bag) => (
                            <BagCard 
                                key={bag.id} 
                                bagImage={bag.bagImage} 
                                bagTitle={bag.bagTitle} 
                                bagPrice={bag.bagPrice}
                                id={bag.id}
                            />
                        ))
                    ) : (
                        <div className="no-results">No bags found in this collection.</div>
                    )}
                </div>
            )}
        </section>
    );
};

export default Bags;

