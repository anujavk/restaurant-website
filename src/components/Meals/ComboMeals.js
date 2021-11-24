import classes from './ComboMeals.module.css';
import { useRef, useEffect, useState } from 'react';
import Card from '../UI/Card';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import ComboItem from './ComboItem';

const ComboMeals = () => {
    const scrollSize = useRef();

    const scrollLeftHandler = () => {
        scrollSize.current.scrollLeft = scrollSize.current.scrollLeft - 251;
        console.log(scrollSize.current.scrollLeft);
    };

    const scrollRightHandler = () => {
        scrollSize.current.scrollLeft = scrollSize.current.scrollLeft + 251;
        console.log(scrollSize.current.scrollLeft);
    };

    const [data, setdata] = useState([]);

    useEffect(() => {
        const fetchMenu = async () => {
            const response = await fetch('https://restro-app0-default-rtdb.europe-west1.firebasedatabase.app/combo-meal.json');
            const responseData = await response.json();

            const items = [];
            for (const key in responseData) {
                items.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price,
                    quantity: 0,
                });
            }

            setdata(items);
        };
        fetchMenu();
    }, []);

    return (
        <div className={classes.outerDiv}>
            <div className={classes.title}>______ Speical Combo ______</div>
            <section className={classes.main}>
                <button className={classes.arrowBtn} onClick={scrollLeftHandler}>
                    <IoIosArrowDropleftCircle />
                </button>
                <div className={classes.container} ref={scrollSize}>
                    {data.map((item) => {
                        return (
                            <Card key={item.id}>
                                <ComboItem key={item.id} name={item.name} description={item.description} price={item.price} quantity={item.quantity}/>
                            </Card>
                        );
                    })}
                </div>
                <button className={classes.arrowBtn} onClick={scrollRightHandler}>
                    <IoIosArrowDroprightCircle />
                </button>
            </section>
        </div>
    );
};

export default ComboMeals;
