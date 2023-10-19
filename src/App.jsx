import './App.css'
import Card from './Card'
import Loader from './loader'
import CardPicOne from "./assets/photoOne.jpg"
import { FaBeer } from 'react-icons/fa';
import CardPicTwo from "./assets/photoTwo.jpg"
function App() {
  const isloading = true;

  const myData = [
    {
      name: "Shoe",
      image: "https://images.pexels.com/photos/18791598/pexels-photo-18791598/free-photo-of-a-girl-sitting-on-a-concrete-ledge-with-her-legs-crossed.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      price: 233,
      des: "Nice Shoe",
      id: 1,
      icon: <FaBeer />
    },
    {
      name: "Sunglasses",
      image: "https://images.pexels.com/photos/17719366/pexels-photo-17719366/free-photo-of-portrait-of-woman-on-street.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      price: 49.99,
      des: "Stylish sunglasses for sunny days",
      id: 2
    },
    {
      name: "Laptop",
      image: CardPicOne,
      price: 899.99,
      des: "Powerful laptop for work and play",
      id: 3
    },
    {
      name: "T-shirt",
      image: "tshirt.jpg",
      price: 19.99,
      des: "Comfortable cotton t-shirt in various colors",
      id: 4
    },
    {
      name: "Coffee Mug",
      image: "mug.png",
      price: 9.99,
      des: "Enjoy your morning coffee with this mug",
      id: 5
    },
    {
      name: "Headphones",
      image: "headphones.jpg",
      price: 69.99,
      des: "High-quality headphones with noise cancellation",
      id: 6
    },
    {
      name: "Backpack",
      image: "backpack.png",
      price: 39.99,
      des: "Spacious backpack for your daily adventures",
      id: 7
    },
    {
      name: "Smartphone",
      image: "phone.jpg",
      price: 599.99,
      des: "Cutting-edge smartphone with great camera",
      id: 8
    },
    {
      name: "Watch",
      image: "watch.jpg",
      price: 129.99,
      des: "Elegant wristwatch for any occasion",
      id: 9
    },
    {
      name: "Book",
      image: "book.jpg",
      price: 14.99,
      des: "Bestseller novel for your reading pleasure",
      id: 10
    },
    {
      name: "Pen",
      image: "pen.jpg",
      price: 10.99,
      des: "Bestseller novel for your reading pleasure",
      id: 11
    }
  ]
  return (
    <>
      <div className='flex justify-center'>
        {
          isloading && <Loader />
        }
      </div>

      <div className='flex flex-wrap gap-3'>
        {
          myData.map((eachData, index) => <Card key={eachData.id} cardData={eachData} />)
        }
      </div>
    </>
  )
}


export default App
