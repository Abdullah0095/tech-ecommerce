import React from 'react';

const Mobile = () => {
    const mobilefakeData = [
        {
            title: 'Google Pixel',
            image: 'https://i.ibb.co/PDqNFC0/pixel.jpg',
            price: '45999'
        },
        {
            title: 'One Plus',
            image: 'https://i.ibb.co/GnDmCMD/oneplus.webp',
            price: '55999'
        },
        {
            title: 'IQOO 7',
            image: 'https://i.ibb.co/Hz7v7CL/iqoo.jpg',
            price: '39999'
        },
        {
            title: 'Infinix Hot',
            image: 'https://i.ibb.co/ThXRJWQ/infinix.png',
            price: '19999'
        },
        {
            title: 'Oppo F21 pro',
            image: 'https://i.ibb.co/FBZFChq/oppo.webp',
            price: '29999'
        },
        {
            title: 'Samsung s23',
            image: 'https://i.ibb.co/52fCwvj/samsung.webp',
            price: '57999'
        },
        {
            title: 'XIAOMI MI 12',
            image: 'https://i.ibb.co/vZ8tB92/xiaomi.png',
            price: '23999'
        }
    ]
    return (
        <div className='py-6 bg-white'>
            <div>
                <h1 className='text-center text-black text-4xl font-bold'>Mobile Zone</h1>
                <p className='text-center text-black text-xl py-3'>We Have {mobilefakeData.length} mobile in our stock</p>
            </div>
            <div className='grid grid-cols-4 mx-6'>
                {
                    mobilefakeData.map(mobile => <MobileDisplay mobile={mobile} key={mobile.title}></MobileDisplay>)
                }
            </div>
        </div>
    );
};

const MobileDisplay = ({ mobile }) => {
    const { title, image, price } = mobile;
    return (
        <div>
            <div className='border-2 border-gray-500 m-2 py-6 rounded-md min-h-96'>
                <img className='h-40 mx-auto' src={image} alt="" />
                <div className='text-black text-center'>
                    <h1 className='text-2xl '>{title}</h1>
                    <p className='text-lg font-semibold'>Price : {price} BDT</p>
                    <button className="btn btn-success my-8 hover:text-orange-400 w-40 hover:animate-pulse">Buy Now</button>
                </div>
                
            </div>
        </div>
    )
}

export default Mobile;