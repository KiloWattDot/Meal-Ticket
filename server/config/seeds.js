const db = require('./connection');
const { User, Item } = require('../models');

db.once('open', async () => {

    await Item.deleteMany();
    const products = await Product.insertMany([
        {
            name: 'Tin of Cookies',
            description:
              'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            image: 'cookie-tin.jpg', 
            
            price: 2.99,
            quantity: 500
          },
          {
            name: 'Canned Coffee',
            description:
              'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
            image: 'canned-coffee.jpg',
            
            price: 1.99,
            quantity: 500
          },
          {
            name: 'Toilet Paper',
           
            description:
              'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
            image: 'toilet-paper.jpg',
            price: 7.99,
            quantity: 20
          },
          {
            name: 'Handmade Soap',
  
            description:
              'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
            image: 'soap.jpg',
            price: 3.99,
            quantity: 50
          }

    ]);


    console.log('-------------------products seeded--------------------------------------------------------');

    await User.deleteMany();

    await User.create({
      firstName: 'Pauka',
      lastName: 'Leverret',
      email: 'paulaLev@testmail.com',
      password: 'password12345',
      orders: [
        {
          products: [items[0]._id, items[0]._id, items[1]._id]
        }
      ]
    });
  
    await User.create({
      firstName: 'Reginald',
      lastName: 'Johnson',
      email: 'ReggieB@testmail.com',
      password: 'password12345'
    });
  
    console.log('-------------------users seeded--------------------------------------------------');
  
    process.exit();


})