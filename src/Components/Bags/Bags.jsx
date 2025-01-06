import { useState } from 'react';
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
            bagTitle: 'Hobo Small',
            bagPrice: 195.00,
            bagImage: bag1,
            collection: 'all'
        },
        {
            bagTitle: 'Hobo Medium',
            bagPrice: 225.00,
            bagImage: bag2,
            collection: 'new'
        },
        {
            bagTitle: 'Hobo Large',
            bagPrice: 250.00,
            bagImage: bag3,
            collection: 'popular'
        },
        {
            bagTitle: 'Hobo Small',
            bagPrice: 195.00,
            bagImage: bag4,
            collection: 'new'
        },
        {
            bagTitle: 'Hobo Medium',
            bagPrice: 225.00,
            bagImage: bag5,
            collection: 'popular'
        },
        {
            bagTitle: 'Hobo Large',
            bagPrice: 250.00,
            bagImage: bag6,
            collection: 'all'
        }
    ];

    const [selectedCollection, setSelectedCollection] = useState('all');
    const [filteredBags, setFilteredBags] = useState(allBags);

    const handleCollectionChange = (collection) => {
        setSelectedCollection(collection);
        if (collection === 'all') {
            setFilteredBags(allBags);
        } else {
            setFilteredBags(allBags.filter(bag => bag.collection === collection));
        }
    };

    return (
        <>
            <form className='bagCategory'>
                <div className="option">
                    <input 
                        type="radio" 
                        name="collection" 
                        id="all_collection"
                        checked={selectedCollection === 'all'}
                        onChange={() => handleCollectionChange('all')}
                    />
                    <label htmlFor="all_collection">All Collection</label>
                </div>
                <div className="option">
                    <input 
                        type="radio" 
                        name="collection" 
                        id="new_collection"
                        checked={selectedCollection === 'new'}
                        onChange={() => handleCollectionChange('new')}
                    />
                    <label htmlFor="new_collection">New Collection</label>
                </div>
                <div className="option">
                    <input 
                        type="radio" 
                        name="collection" 
                        id="popular_collection"
                        checked={selectedCollection === 'popular'}
                        onChange={() => handleCollectionChange('popular')}
                    />
                    <label htmlFor="popular_collection">Popular Collection</label>
                </div>
            </form>
            <div className='bags'>
                {filteredBags.map((bag, index) => (
                    <BagCard 
                        key={index} 
                        bagImage={bag.bagImage} 
                        bagTitle={bag.bagTitle} 
                        bagPrice={bag.bagPrice} 
                    />
                ))}
            </div>
        </>
    );
};

export default Bags;