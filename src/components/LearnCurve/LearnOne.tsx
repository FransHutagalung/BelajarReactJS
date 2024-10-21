import React from 'react'
import { Header } from "../header"
import Profile from "../User/userProfile"
import { Index as Product } from "../Product/Index"
import Card from "../Card/Card"
import IsPremium from "../User/isPremium"
import Cart from "../Cart/Cart"
import Weather from "../Weather/weather"
import IsAdmin from "../User/isAdmin"
import StyleCart from "../Cart/StyleCart"
import SpecialCart from "../Cart/SpecialCart"
import Copy from "../Weather/copy"


const LearnOne = () => {

    const friendLists = [
        {
           name: "Hutagalung",
           age: 21
        },
        {
           name: "Fransiskus",
           age: 21
        },
        {
           name: "Adhi",
           age: 20
        }
     ]
  const date = new Date()

  return (
    <div className="p-3">
         <Header />
         <div className=" p-3 flex justify-between">
            <div className="flex ">
               <div className="flex flex-col gap-2 ">
                  <Profile />
                  <IsPremium isValid={false} />
               </div>
               <div className="bg-gray-200 h-32 p-3  m-2">
                  <p className="text-sm mb-3">My Friend List : </p>
                  <ul>
                     {friendLists.sort((a, b) => a.age - b.age).reverse().map(({ name, age }) => (
                        <li key={name}>{name} - {age}</li>
                     ))}
                  </ul>
               </div>
            </div>
            <div>
            <p className="text-xl">Date now {(date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear()}</p>
            </div>


         </div>
         <div className="p-3">
            <p className="text-3xl">Learning React 1</p>
            <p>React is Javascript framewrok to build a frontend website</p>
         </div>

         <Product />
         <Card class="bg-red-500" >
            <h2>Card</h2>
          
         </Card>

         <Cart />
         <Weather temperature={19}/>
         <IsAdmin isAdmin={true} loggedIn={true}/>
         <StyleCart />
         <SpecialCart />
         <Copy />

      </div>
  )
}

export default LearnOne