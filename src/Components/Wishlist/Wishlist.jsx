import { useCart } from '../../context/CartContext';

const Wishlist = () => {
    const { wishlistItems = [] } = useCart(); // Default to an empty array

    return (
        <div>
            <h1>Wishlist</h1>
            {wishlistItems.length === 0 ? (
                <p>Your wishlist is empty.</p>
            ) : (
                wishlistItems.map((item) => (
                    <div key={item.id}>
                        <h2>{item.bagTitle}</h2>
                        <p>${item.bagPrice}</p>
                        <img src={item.bagImage} alt={item.bagTitle} />
                    </div>
                ))
            )}
        </div>
    );
};

export default Wishlist;
