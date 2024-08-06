import React from 'react';
import recipes from '../recipes';
import Swal from 'sweetalert2'
function Home() {
const handleOrder = () => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Ordered!",
            text: "Your order has been processed.",
            icon: "success"
          });
        }
      });
}

    return (
        <div className='menu-container'>
            <div className='menu-header'>
                <h2>
                    This week's specials!
                </h2>
                <button>Order Menu</button>
            </div>

            <div className='menu-item-card'>
                {recipes.map(recipe => <div key={recipe.id} className='menu-item'>
                    <img src={recipe.image} alt={recipe.description} />
                    <div className='menu-content'>
                        <div className='menu-item-heading'>
                            <h5>{recipe.title}</h5>
                            <p>{recipe.price}</p>
                        </div>
                        <p>{recipe.description}</p>
                        <button className='menu-order-button' onClick={() => handleOrder(recipe.id)}>Order Now</button>
                    </div>

                </div>)

                }
            </div>

        </div>
    );
}

export default Home;
