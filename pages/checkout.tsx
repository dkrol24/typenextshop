import Head from "next/head";
import Header from "../components/Header";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Currency from "react-currency-formatter";
import { useSelector } from "react-redux";
//import Stripe from "stripe";
import Button from "../components/Button";
// import CheckoutProduct from "../components/CheckoutProduct";
import { selectBasketItems, selectBasketTotal } from "../redux/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
//import CheckoutProduct from "../components/CheckoutProduct";
//import { fetchPostJSON } from "../utils/api-helpers";
//import getStripe from "../utils/get-stripejs";
function Checkout  ()  {
    const items = useSelector(selectBasketItems);
    const basketTotal = useSelector(selectBasketTotal);
    const router = useRouter();
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState({}as {[key:string]:Product[]});
    useEffect(()=>{
        const groupedItems = items.reduce((results,item)=>{
            (results[item._id]=results[item._id] || []).push(item)
            return results
        },{}as{[key:string]:Product[]});
        setGroupedItemsInBasket(groupedItems)
    },[items])
  return (
    <div>
        <Head>
            <title>Bag - Apple</title>
            <link rel='icon' href='/favicon.ico'></link>
        </Head>
        <Header/>
        <main>
            <div>
                <h1>{items.length > 0 ? "Review your bag." : "Your bag is empty"}</h1>
                <p>Free delivery and returns.</p>
                {items.length === 0 && (
                    <Button title="Continue Shopping"
                    onClick={()=>router.push("/")}/>
                )}
            </div>
            {items.length > 0 && (
                <div>
                    {Object.entries(groupedItemsInBasket).map(([key,items])=>(
                        <CheckoutProduct key={key} items={items} id={key}/>
                    ))}
                    <div>
                        <div>
                            <div>
                                <div>
                                    <p>Subtotal</p>
                                    <p><Currency quantity={basketTotal} currency="PLN"/></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    </div>
  )
}

export default Checkout