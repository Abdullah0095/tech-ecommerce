import React from 'react';

const Laptop = () => {
    const laptopfakeData = [
        {
            title: 'Asus Zenbook',
            image: 'https://i.ibb.co/vs3bH0Q/asus.jpg',
            price: '99999'
        },
        {
            title: 'Apple Macbook',
            image: 'https://i.ibb.co/Xyzvv7g/tuf.webp',
            price: '145999'
        },
        {
            title: 'Lenovo ThinkPad',
            image: 'https://i.ibb.co/vs3bH0Q/asus.jpg',
            price: '55999'
        },
        
        {
            title: 'HP Probook 450 G10',
            image: 'https://i.ibb.co/Hxw2z7y/HP-Elite-Book-840-G5.jpg',
            price: '98999'
        },
        {
            title: 'Asus Rog & TUF',
            image: 'https://i.ibb.co/Xyzvv7g/tuf.webp',
            price: '129999'
        },
    ]
    return (
        <div className='py-6 bg-white min-h-screen'>
            <div>
                <h1 className='text-center text-black text-4xl font-bold'>Laptop Zone</h1>
                <p className='text-center text-black text-xl py-3'>We Have {laptopfakeData.length} Laptop in our stock</p>
            </div>
            <div className='grid grid-cols-4 mx-6'>
                {
                    laptopfakeData.map(laptop => <LaptopDisplay laptop={laptop} key={laptop.title}></LaptopDisplay>)
                }

            </div>
        </div>
    );
};

const LaptopDisplay = ({laptop}) => {
    const {title, image, price} = laptop;
    return (
        <div>
            <div className='border-2 border-gray-500 m-2 py-6'>
                <img className='h-40 mx-auto' src={image} alt="" />
                <div className='text-black text-center'>
                    <h1 className='text-2xl '>{title}</h1>
                    <p className='text-lg font-semibold'>Price : {price} BDT</p>
                    <button className="btn btn-success my-3 hover:text-orange-400 w-40 hover:animate-pulse">Buy Now</button>
                </div>
                
            </div>
        </div>
    )
}

export default Laptop;