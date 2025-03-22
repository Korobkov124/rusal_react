import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import supabase from "../supabaseClient";

function Catalog() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCategories() {
            try {
                const { data, error } = await supabase.from("categories").select("*");
                if (error) {
                    console.error("Ошибка при получении категорий: ", error);
                }
                else {
                    setCategories(data);
                }
            }
            catch (err) {
                console.error("Произошла ошибка: ", err);
            }
            finally {
                setLoading(false);
            }
        }
        fetchCategories().catch((error) => {
            console.error("Необработанная ошибка: ", error);
        });
    }, []);
    if (loading) {
        return <div>Загрузка...</div>
    }
    return (
        <div>
            <h1>Каталог</h1>
            <ul>
                {categories.map((category) => (
                    <li key={category.id}>
                        <Link className="img_block_2" to={`/category/${category.id}`}>
                            <img src={category.category_img} alt="cartinka!" width="350px" height="350px" style={{borderRadius: 40}}/>
                            <h1 className="h1_for_button">{category.name}</h1>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Catalog;