import { useState, useEffect, useRef, useCallback } from "react";
import "../assets/menu.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

import everest06 from "../assets/images/everest-06.webp";
import everest07 from "../assets/images/everest-07.webp";
import everest11 from "../assets/images/everest-11.webp";
import everest79 from "../assets/images/everest-79.jpg";
import everest76 from "../assets/images/everest-76.jpg";
import everest75 from "../assets/images/everest-75.jpg";
import everest74 from "../assets/images/everest-74.jpg";
import everest77 from "../assets/images/everest-77.jpg";
import everest72 from "../assets/images/everest-72.jpg";
import everest73 from "../assets/images/everest-73.jpg";
import everest68 from "../assets/images/everest-68.jpg";
import everest59 from "../assets/images/everest-59.jpg";
import everest70 from "../assets/images/everest-70.jpg";
import everest69 from "../assets/images/everest-69.jpg";
import everest27 from "../assets/images/everest-27.jpg";
import everest31 from "../assets/images/everest-31.jpg";
import everest33 from "../assets/images/everest-33.jpg";
import everest34 from "../assets/images/everest-34.jpg";
import everest38 from "../assets/images/everest-38.jpg";
import everest42 from "../assets/images/everest-42.jpg";
import everest43 from "../assets/images/everest-43.jpg";
import everest45 from "../assets/images/everest-45.jpg";
import everest46 from "../assets/images/everest-46.jpg";
import everest47 from "../assets/images/everest-47.jpg";
import everest50 from "../assets/images/everest-50.jpg";
import everest51 from "../assets/images/everest-51.jpg";
import everest52 from "../assets/images/everest-52.jpg";
import everest53 from "../assets/images/everest-53.jpg";
import everest55 from "../assets/images/everest-55.jpg";
import everest56 from "../assets/images/everest-56.jpg";
import everest57 from "../assets/images/everest-57.jpg";
import everest58 from "../assets/images/everest-58.jpg";
import everest61 from "../assets/images/everest-61.jpg";
import everest62 from "../assets/images/everest-62.jpg";
import everest64 from "../assets/images/everest-64.jpg";
import everest65 from "../assets/images/everest-65.jpg";
import everest80 from "../assets/images/everest-80.jpg";
import everest88 from "../assets/images/everest-88.jpg";
import palak    from "../assets/images/palak.jpeg";
import vegan04  from "../assets/images/vegan04.jpeg";
import vegan05  from "../assets/images/vegan05.jpeg";
import vegan06  from "../assets/images/vegan06.jpeg";
import kozel from "../assets/images/kozel.webp";
import pilsner from "../assets/images/pilsner.jpg";
import gambrinus from "../assets/images/gambrinus.png";
import fangalo from "../assets/images/fangalo.jpg";

// ─── FULL DATASET ─────────────────────────────────────────────────────────────
const menuData = [
  {
    id: "soups", title: "Soups", cz: "POLÉVKY / SOUP",
    img: everest79,
    items: [
      { name: "Kuřecí polévka",                        en: "Chicken Soup",            price: "51",  desc: "Traditional chicken soup.",                                              allergy: "1,3,7,9,10", t: everest77 },
      { name: "Rajčatová polévka",                     en: "Tomato Soup",             price: "51",  desc: "Fresh tomato soup.",                                                     allergy: "1,7,9,10",   t: everest76 },
      { name: "Čočková polévka",                       en: "Dal Soup",                price: "51",  desc: "Lentil soup with spices.",                                               allergy: "1,7,9,10",   t: everest75 },
      { name: "Fazolová polévka",                      en: "Beans Soup",              price: "51",  desc: "Bean soup with Indian spices.",                                          allergy: "1,7,9,10",   t: everest79 },
      { name: "Kuřecí houbová polévka",                en: "Chicken Mushroom Soup",   price: "59",  desc: "Chicken and mushroom soup.",                                             allergy: "1,3,7,9,10", t: everest74 },
      { name: "Kuřecí krevetová polévka se žampiony",  en: "SPL. Spice Everest Soup", price: "75",  desc: "Special Everest soup with chicken, shrimp and mushrooms.",               allergy: "1,3,7,9,10", t: everest77 },
    ],
  },
  {
    id: "starters", title: "Starters", cz: "PŘEDKRMY / STARTERS",
    img: everest72,
    items: [
      { name: "Papadum",               en: "Crispy bread",                    price: "20",  desc: "Křupavé placky z cizrnové mouky a indického koření. Crispy bread.",                          allergy: "1,9,10",     t: everest59 },
      { name: "Vegetable mix Pakora",  en: "Mixed vegetable pakora",          price: "130", desc: "Mixed vegetable exotically spiced with carom seeds, battered in gram flour and deep-fried.", allergy: "1,9,10",     t: everest69 },
      { name: "Chicken Wings Pakora",  en: "Kuřecí křídla v cizrnové mouce", price: "145", desc: "Chicken wings delicately marinated with garlic and ginger in gram flour and deep-fried.",    allergy: "1,3,9,10",   t: everest73 },
      { name: "Onion Bhaji",           en: "Cibule Bhaji",                    price: "115", desc: "Sliced onions exotically spiced with carom seeds, battered in gram flour and deep-fried.",  allergy: "1,9,10",     t: everest70 },
      { name: "Kuřecí pakora",         en: "Chicken Pakora",                  price: "130", desc: "Chicken slices delicately marinated with garlic, coated in gram flour and deep-fried.",      allergy: "1,3,9,10",   t: everest73 },
      { name: "Shrimp pakora",         en: "Krevetí pakora",                  price: "165", desc: "Shrimps delicately marinated with garlic, coated in gram flour and deep-fried.",             allergy: "1,2,3,9,10", t: everest72 },
      { name: "Paneer pakora",         en: "Sýrová pakora",                   price: "165", desc: "Home-made cheese covered in gram flour and deep-fried.",                                     allergy: "1,7,10",     t: everest72 },
      { name: "Samosa",                en: "Plněné taštičky",                 price: "90",  desc: "Triangular pastry filled with spiced potatoes, green peas and cashews.",                    allergy: "1,9,10",     t: everest68 },
    ],
  },
  {
    id: "vegan", title: "Vegan", cz: "VEGANSKÉ POKRMY / VEGAN DISHES",
    img: everest38,
    items: [
      { name: "Plain Palak",        en: "Klasická špenátová omáčka", price: "179", desc: "Cooked with garlic-ginger paste, spices and delicious spinach.",                                            allergy: "7,8,9,10", t: palak    },
      { name: "Kmínové brambory",   en: "Jeera Aloo",                price: "169", desc: "Jeera Aloo with fresh onions, garlic, ginger and tomatoes.",                                               allergy: "7,8,9,10", t: everest38 },
      { name: "Míchaná zelenina",   en: "Mixed vegetable",           price: "179", desc: "Mixed vegetables with fresh onions, garlic, ginger and tomatoes.",                                         allergy: "7,8,9,10", t: vegan04  },
      { name: "Houbová Masala",     en: "Mushroom Masala",           price: "179", desc: "Mushroom Masala with medium spicy sauce.",                                                                  allergy: "7,8,9,10", t: vegan05  },
      { name: "Vegetable Vindaloo", en: "Zeleninové Vindaloo",       price: "195", desc: "Classic dish with potatoes cooked with spice blend, tomatoes, ginger, garlic and onion in very hot sauce.",allergy: "7,8,9,10", t: vegan06  },
      { name: "Soybean Madras",     en: "Sójové Madras",             price: "189", desc: "Classic Indian curry cooked with a blend of spices in traditional hot and sour sauce.",                    allergy: "7,8,9,10", t: everest31 },
    ],
  },
  {
    id: "tandoori", title: "Tandoori", cz: "TANDOORI PEC / TANDOORI OVEN",
    img: everest51,
    items: [
      { name: "Tandoori Mix Grill",       en: "Tandoori Směs",           price: "345", desc: "Mix of shrimp, lamb tikka, grilled chicken thighs and creamy Malai Kebab.",                                      allergy: "2,7,8,9,10", t: everest51 },
      { name: "Chicken Garlic Tikka",     en: "Kuřecí prsa s česnekem",  price: "229", desc: "Gently spicy chicken breast marinated in Indian spices with garlic, grilled in Tandoor.",                        allergy: "7,8,9,10",   t: everest43 },
      { name: "Chicken Malai Kebab",      en: "Smetanové kuře",          price: "225", desc: "Chicken breast marinated in a mild blend of Indian spices with cream and cashew nuts, grilled in Tandoor.",      allergy: "7,8,9,10",   t: everest43 },
      { name: "Tandoori Prawns",          en: "Grilované tygří krevety", price: "310", desc: "Grilled tiger prawns with Indian spices – garlic, ginger.",                                                       allergy: "2,7,8,9",    t: everest51 },
      { name: "Chicken Tikka",            en: "Kuřecí Tikka",            price: "215", desc: "Mildly spiced chicken breast marinated and grilled in Tandoor oven.",                                             allergy: "7,8,9,10",   t: everest55 },
      { name: "Chicken Green Tikka",      en: "Pálivé kuře s mátou",     price: "215", desc: "Chicken breast marinated with very spicy green chilli with fresh mint, grilled in Tandoor.",                     allergy: "7,8,10",     t: everest80 },
      { name: "Chicken Kali Mirch Tikka", en: "Pepřové kuře",            price: "229", desc: "Chicken breast marinated in creamy Indian spices with cream, cashew nuts and black pepper, grilled in Tandoor.", allergy: "7,8,9,10",   t: everest42 },
      { name: "Chicken Shashlik",         en: "Kuřecí špíz",             price: "239", desc: "Grilled chicken breast with Indian spices, garlic, ginger with fresh peppers, onions and tomatoes.",             allergy: "7,8,9,10",   t: everest58 },
      { name: "Tandoori Wings",           en: "Grilovaná křídla",        price: "195", desc: "Mildly spiced chicken wings marinated and grilled in Tandoor oven.",                                              allergy: "7,8,9,10",   t: everest51 },
      { name: "Tandoori Chicken",         en: "Grilovaná stehna",        price: "209", desc: "Mildly spiced chicken leg marinated and grilled in Tandoor oven.",                                                allergy: "7,8,9,10",   t: everest52 },
      { name: "Paneer Tikka Shashlik",    en: "Sýrový špíz",             price: "245", desc: "Grilled homemade cheese with Indian spices, garlic, ginger with fresh peppers, onions and tomatoes.",            allergy: "7,8,9,10",   t: everest58 },
    ],
  },
  {
    id: "spl", title: "Our Specials", cz: "NAŠE S. P. L.",
    img: everest51,
    items: [
      { name: "Family dish – 4 osoby", en: "Onion Bhaji, Chicken Mango, Pork Masala, Shrimp Madras + Rice, Naan, Garlic Naan, Butter Naan", price: "1189", desc: "Malai Kebab, Kuřecí Mango, Vepřová Masala, Krevetí Madras. Rýže, placky, česnekové placky, máslové placky.", allergy: "1,2,7,8,9,10", t: everest51 },
      { name: "Couple dish – 2 osoby", en: "Papadum · Tomato Soup · Butter Chicken · Shrimp Masala + Rice, Garlic Naan",                    price: "689",  desc: "Rajčatová polévka, Kuře na másle, Krevetí Masala. Rýže, česnekové placky.",                             allergy: "1,2,7,8,9,10", t: everest57 },
    ],
  },
  {
    id: "thali", title: "Thali", cz: "THALI DISHES",
    img: everest06,
    items: [
      { name: "Zeleninové Thali",  en: "Vegetable Thali",                               price: "199", desc: "Three different sauces with yogurt salad and a side of rice or pancakes.", allergy: "7,8,9,10",   t: everest07 },
      { name: "Sýrové Thali",      en: "Paneer Thali",                                  price: "219", desc: "Three different sauces with yogurt salad and rice or pancakes.",           allergy: "7,8,9,10",   t: everest07 },
      { name: "Kuřecí Thali",      en: "Chicken Thali",                                 price: "219", desc: "Three different sauces with yogurt salad and rice or pancakes.",           allergy: "7,8,9,10",   t: everest06 },
      { name: "Jehněčí Thali",     en: "Lamb Thali",                                    price: "259", desc: "Three different sauces with yogurt salad and rice or pancakes.",           allergy: "7,8,9,10",   t: everest06 },
      { name: "Krevetí Thali",     en: "Shrimps Thali",                                 price: "259", desc: "Three different sauces with yogurt salad and rice or pancakes.",           allergy: "2,7,8,9,10", t: everest07 },
      { name: "Máslový mix Thali", en: "Butter Mix Thali (chicken, lamb, shrimps, pork)",price: "259", desc: "Three different sauces with yogurt salad and rice or pancakes.",          allergy: "7,8,9,10",   t: everest06 },
    ],
  },
  {
    id: "biryani", title: "Biryani", cz: "BIRYANI DISHES",
    img: everest56,
    items: [
      { name: "Zeleninové Biryani", en: "Vegetable Biryani", price: "190", desc: "Specially prepared with cooked Basmati rice with mix of Indian spices.", allergy: "7,8,9,10",   t: everest56 },
      { name: "Kuřecí Biryani",     en: "Chicken Biryani",   price: "210", desc: "Specially prepared with cooked Basmati rice with mix of Indian spices.", allergy: "7,8,9,10",   t: everest56 },
      { name: "Vepřové Biryani",    en: "Pork Biryani",      price: "210", desc: "Specially prepared with cooked Basmati rice with mix of Indian spices.", allergy: "7,8,9,10",   t: everest56 },
      { name: "Krevetí Biryani",    en: "Shrimps Biryani",   price: "259", desc: "Specially prepared with cooked Basmati rice with mix of Indian spices.", allergy: "2,7,8,9,10", t: everest56 },
      { name: "Jehněčí Biryani",    en: "Lamb Biryani",      price: "259", desc: "Specially prepared with cooked Basmati rice with mix of Indian spices.", allergy: "7,8,9,10",   t: everest56 },
    ],
  },
  {
    id: "butter", title: "Butter", cz: "BUTTER DISHES",
    img: everest65,
    items: [
      { name: "Kuře na másle",       en: "Butter Chicken",   price: "199", desc: "Creamy tomato sauce with cashew nut paste, fenugreek, cardamom, butter and cream.", allergy: "7,8,9,10",   t: everest57 },
      { name: "Vepřové na másle",    en: "Butter Pork",      price: "195", desc: "Creamy tomato sauce with cashew nut paste, fenugreek, cardamom, butter and cream.", allergy: "7,8,9,10",   t: everest65 },
      { name: "Ryba na másle",       en: "Butter Fish",      price: "199", desc: "Creamy tomato sauce with cashew nut paste, fenugreek, cardamom, butter and cream.", allergy: "4,7,8,9,10", t: everest57 },
      { name: "Domácí sýr na másle", en: "Butter Paneer",    price: "199", desc: "Creamy tomato sauce with cashew nut paste, fenugreek, cardamom, butter and cream.", allergy: "7,8,9,10",   t: everest65 },
      { name: "Jehněčí na másle",    en: "Butter Lamb",      price: "239", desc: "Creamy tomato sauce with cashew nut paste, fenugreek, cardamom, butter and cream.", allergy: "7,8,9,10",   t: everest57 },
      { name: "Krevety na másle",    en: "Butter Shrimps",   price: "229", desc: "Creamy tomato sauce with cashew nut paste, fenugreek, cardamom, butter and cream.", allergy: "2,7,8,9,10", t: everest65 },
      { name: "Zelenina na másle",   en: "Butter Vegetable", price: "189", desc: "Creamy tomato sauce with cashew nut paste, fenugreek, cardamom, butter and cream.", allergy: "7,8,9,10",   t: everest57 },
      { name: "Sója na másle",       en: "Butter Soya",      price: "189", desc: "Creamy tomato sauce with cashew nut paste, fenugreek, cardamom, butter and cream.", allergy: "6,7,8,9,10", t: everest65 },
    ],
  },
  {
    id: "curry", title: "Curry", cz: "CURRY DISHES",
    img: everest27,
    items: [
      { name: "Kari mix",           en: "Curry Mix (chicken, lamb, shrimps, pork)", price: "255", desc: "Classic Indian curry cooked with spices, tomatoes, ginger, garlic and onion.", allergy: "2,7,8,9,10", t: everest27 },
      { name: "Kuře na kari",       en: "Curry Chicken",   price: "195", desc: "Classic Indian curry in traditional plain sauce.", allergy: "7,8,9,10",   t: everest27 },
      { name: "Vepřové na kari",    en: "Curry Pork",      price: "190", desc: "Classic Indian curry in traditional plain sauce.", allergy: "7,8,9,10",   t: everest27 },
      { name: "Ryba na kari",       en: "Curry Fish",      price: "195", desc: "Classic Indian curry in traditional plain sauce.", allergy: "4,7,8,9,10", t: everest27 },
      { name: "Jehněčí na kari",    en: "Curry Lamb",      price: "239", desc: "Classic Indian curry in traditional plain sauce.", allergy: "7,8,9,10",   t: everest27 },
      { name: "Krevety na kari",    en: "Curry Shrimps",   price: "229", desc: "Classic Indian curry in traditional plain sauce.", allergy: "7,8,9,10",   t: everest27 },
      { name: "Domácí sýr na kari", en: "Curry Paneer",    price: "199", desc: "Classic Indian curry in traditional plain sauce.", allergy: "2,7,8,9,10", t: everest27 },
      { name: "Zelenina na kari",   en: "Curry Vegetable", price: "189", desc: "Classic Indian curry in traditional plain sauce.", allergy: "7,8,9,10",   t: everest27 },
      { name: "Sója na kari",       en: "Curry Soya",      price: "189", desc: "Classic Indian curry in traditional plain sauce.", allergy: "6,7,8,9,10", t: everest27 },
    ],
  },
  {
    id: "korma", title: "Korma", cz: "KORMA DISHES",
    img: everest50,
    items: [
      { name: "Korma mix",        en: "Korma Mix (chicken, lamb, shrimp, pork)", price: "259", desc: "Sweet-taste mild creamy sauce made from onion, cashew nut paste and coconut cream.", allergy: "7,8,9,10",   t: everest50 },
      { name: "Kuřecí korma",     en: "Korma Chicken",   price: "199", desc: "Sweet-taste mild creamy sauce made from onion, cashew nut paste and coconut cream.", allergy: "7,8,9,10",   t: everest50 },
      { name: "Vepřová korma",    en: "Korma Pork",      price: "195", desc: "Sweet-taste mild creamy sauce made from onion, cashew nut paste and coconut cream.", allergy: "7,8,9,10",   t: everest50 },
      { name: "Rybí korma",       en: "Korma Fish",      price: "199", desc: "Sweet-taste mild creamy sauce made from onion, cashew nut paste and coconut cream.", allergy: "4,7,8,9,10", t: everest50 },
      { name: "Jehněčí korma",    en: "Korma Lamb",      price: "239", desc: "Sweet-taste mild creamy sauce made from onion, cashew nut paste and coconut cream.", allergy: "7,8,9,10",   t: everest50 },
      { name: "Krevetí korma",    en: "Korma Shrimps",   price: "229", desc: "Sweet-taste mild creamy sauce made from onion, cashew nut paste and coconut cream.", allergy: "7,8,9,10",   t: everest50 },
      { name: "Domácí sýr korma", en: "Korma Paneer",    price: "199", desc: "Sweet-taste mild creamy sauce made from onion, cashew nut paste and coconut cream.", allergy: "2,7,8,9,10", t: everest50 },
      { name: "Zeleninové korma", en: "Korma Vegetable", price: "189", desc: "Sweet-taste mild creamy sauce made from onion, cashew nut paste and coconut cream.", allergy: "7,8,9,10",   t: everest50 },
      { name: "Sójová korma",     en: "Korma Soya",      price: "189", desc: "Sweet-taste mild creamy sauce made from onion, cashew nut paste and coconut cream.", allergy: "6,7,8,9,10", t: everest50 },
    ],
  },
  {
    id: "masala", title: "Masala", cz: "MASALA DISHES",
    img: everest53,
    items: [
      { name: "Masala mix",        en: "Mix Masala (chicken, lamb, shrimp, pork)", price: "259", desc: "Medium hot sauce with bell pepper, tomatoes and onions, seasoned with cardamom, cloves, bay leaf and garam masala.", allergy: "4,7,8,9,10", t: everest53 },
      { name: "Kuře Masala",       en: "Chicken Masala",   price: "199", desc: "Medium spicy sauce with peppers, tomatoes and onions.", allergy: "7,8,9,10",   t: everest53 },
      { name: "Vepřová Masala",    en: "Pork Masala",      price: "199", desc: "Medium spicy sauce with peppers, tomatoes and onions.", allergy: "7,8,9,10",   t: everest53 },
      { name: "Keema Masala",      en: "Keema Masala",     price: "199", desc: "Medium spicy sauce with peppers, tomatoes and onions.", allergy: "7,8,9,10",   t: everest53 },
      { name: "Jehněčí Masala",    en: "Lamb Masala",      price: "239", desc: "Medium spicy sauce with peppers, tomatoes and onions.", allergy: "7,8,9,10",   t: everest53 },
      { name: "Krevetí Masala",    en: "Shrimps Masala",   price: "229", desc: "Medium spicy sauce with peppers, tomatoes and onions.", allergy: "7,8,9,10",   t: everest53 },
      { name: "Domácí sýr Masala", en: "Paneer Masala",    price: "199", desc: "Medium spicy sauce with peppers, tomatoes and onions.", allergy: "4,7,8,9,10", t: everest53 },
      { name: "Zeleninová Masala", en: "Vegetable Masala", price: "189", desc: "Medium spicy sauce with peppers, tomatoes and onions.", allergy: "7,8,9,10",   t: everest53 },
    ],
  },
  {
    id: "madras", title: "Madras", cz: "MADRAS DISHES",
    img: everest31,
    items: [
      { name: "Mix Madras",        en: "Mix Madras (chicken, lamb, shrimp, pork)", price: "259", desc: "Classic Indian curry in traditional hot and sour sauce.", allergy: "4,7,8,9,10", t: everest31 },
      { name: "Kuřecí Madras",     en: "Chicken Madras",   price: "199", desc: "Classic Indian curry in traditional hot and sour sauce.", allergy: "7,8,9,10",   t: everest31 },
      { name: "Vepřový Madras",    en: "Pork Madras",      price: "195", desc: "Classic Indian curry in traditional hot and sour sauce.", allergy: "7,8,9,10",   t: everest31 },
      { name: "Mletý Madras",      en: "Keema Madras",     price: "199", desc: "Classic Indian curry in traditional hot and sour sauce.", allergy: "7,8,9,10",   t: everest31 },
      { name: "Jehněčí Madras",    en: "Lamb Madras",      price: "239", desc: "Classic Indian curry in traditional hot and sour sauce.", allergy: "7,8,9,10",   t: everest31 },
      { name: "Krevetí Madras",    en: "Shrimps Madras",   price: "229", desc: "Classic Indian curry in traditional hot and sour sauce.", allergy: "7,8,9,10",   t: everest31 },
      { name: "Domácí sýr Madras", en: "Paneer Madras",    price: "199", desc: "Classic Indian curry in traditional hot and sour sauce.", allergy: "4,7,8,9,10", t: everest31 },
      { name: "Zeleninový Madras", en: "Vegetable Madras", price: "189", desc: "Classic Indian curry in traditional hot and sour sauce.", allergy: "7,8,9,10",   t: everest31 },
      { name: "Sójový Madras",     en: "Soya Madras",      price: "189", desc: "Classic Indian curry in traditional hot and sour sauce.", allergy: "7,8,9,10",   t: everest31 },
    ],
  },
  {
    id: "vindaloo", title: "Vindaloo", cz: "VINDALOO DISHES",
    img: everest33,
    items: [
      { name: "Mix Vindaloo",        en: "Mix Vindaloo (chicken, lamb, shrimp, pork)", price: "259", desc: "Classic thick dish with potatoes cooked in a very hot spice sauce.", allergy: "4,7,8,9,10", t: everest33 },
      { name: "Kuřecí Vindaloo",     en: "Chicken Vindaloo",   price: "199", desc: "Classic thick dish with potatoes in very hot sauce.", allergy: "7,8,9,10",   t: everest33 },
      { name: "Vepřové Vindaloo",    en: "Pork Vindaloo",      price: "199", desc: "Classic thick dish with potatoes in very hot sauce.", allergy: "7,8,9,10",   t: everest33 },
      { name: "Mleté Vindaloo",      en: "Keema Vindaloo",     price: "199", desc: "Classic thick dish with potatoes in very hot sauce.", allergy: "7,8,9,10",   t: everest33 },
      { name: "Jehněčí Vindaloo",    en: "Lamb Vindaloo",      price: "239", desc: "Classic thick dish with potatoes in very hot sauce.", allergy: "7,8,9,10",   t: everest33 },
      { name: "Krevetí Vindaloo",    en: "Shrimps Vindaloo",   price: "229", desc: "Classic thick dish with potatoes in very hot sauce.", allergy: "7,8,9,10",   t: everest33 },
      { name: "Domácí sýr Vindaloo", en: "Paneer Vindaloo",    price: "199", desc: "Classic thick dish with potatoes in very hot sauce.", allergy: "4,7,8,9,10", t: everest33 },
      { name: "Zeleninové Vindaloo", en: "Vegetable Vindaloo", price: "189", desc: "Classic thick dish with potatoes in very hot sauce.", allergy: "7,8,9,10",   t: everest33 },
      { name: "Sójové Vindaloo",     en: "Soya Vindaloo",      price: "189", desc: "Classic thick dish with potatoes in very hot sauce.", allergy: "7,8,9,10",   t: everest33 },
    ],
  },
  {
    id: "palak", title: "Palak", cz: "PALAK DISHES",
    img: everest38,
    items: [
      { name: "Mix Palak",        en: "Mix Palak (chicken, lamb, shrimp, pork)", price: "259", desc: "Cooked with garlic-ginger paste, butter, spices and delicious spinach.", allergy: "7,8,9,10",   t: everest38 },
      { name: "Kuřecí Palak",     en: "Chicken Palak",  price: "199", desc: "Cooked with garlic-ginger paste, butter, spices and spinach.", allergy: "7,8,9,10",   t: everest38 },
      { name: "Vepřové Palak",    en: "Pork Palak",     price: "199", desc: "Cooked with garlic-ginger paste, butter, spices and spinach.", allergy: "7,8,9,10",   t: everest38 },
      { name: "Keema Palak",      en: "Keema Palak",    price: "199", desc: "Cooked with garlic-ginger paste, butter, spices and spinach.", allergy: "7,8,9,10",   t: everest38 },
      { name: "Jehněčí Palak",    en: "Lamb Palak",     price: "239", desc: "Cooked with garlic-ginger paste, butter, spices and spinach.", allergy: "7,8,9,10",   t: everest38 },
      { name: "Krevety Palak",    en: "Shrimps Palak",  price: "229", desc: "Cooked with garlic-ginger paste, butter, spices and spinach.", allergy: "7,8,9,10",   t: everest38 },
      { name: "Sýr Palak",        en: "Paneer Palak",   price: "199", desc: "Cooked with garlic-ginger paste, butter, spices and spinach.", allergy: "4,7,8,9,10", t: everest38 },
      { name: "Sója Palak",       en: "Soya Palak",     price: "185", desc: "Cooked with garlic-ginger paste, butter, spices and spinach.", allergy: "7,8,9,10",   t: everest38 },
      { name: "Aloo Palak",       en: "Aloo Palak",     price: "181", desc: "Cooked with garlic-ginger paste, butter, spices and spinach.", allergy: "7,8,9,10",   t: everest38 },
    ],
  },
  {
    id: "dal", title: "Dal", cz: "DAL DISHES",
    img: everest75,
    items: [
      { name: "Dal Makhani",          en: "Dal Makhani",  price: "189", desc: "Lentil with garlic, ginger, onion and tomatoes.",             allergy: "7,8,9,10",   t: everest75 },
      { name: "Domácí sýr na čočce",  en: "Paneer Dal",   price: "199", desc: "Lentil with paneer, garlic, ginger, onion and tomatoes.",     allergy: "7,8,9,10",   t: everest75 },
      { name: "Kuře na čočce",        en: "Chicken Dal",  price: "199", desc: "Lentil with chicken, garlic, ginger, onion and tomatoes.",    allergy: "7,8,9,10",   t: everest75 },
      { name: "Vepřové na čočce",     en: "Keema Dal",    price: "199", desc: "Lentil with minced meat, garlic, ginger, onion and tomatoes.",allergy: "7,8,9,10",   t: everest75 },
      { name: "Jehněčí na čočce",     en: "Lamb Dal",     price: "239", desc: "Lentil with lamb, garlic, ginger, onion and tomatoes.",       allergy: "7,8,9,10",   t: everest75 },
      { name: "Krevety na čočce",     en: "Shrimp Dal",   price: "239", desc: "Lentil with shrimps, garlic, ginger, onion and tomatoes.",    allergy: "4,7,8,9,10", t: everest75 },
    ],
  },
  {
    id: "momo", title: "Momo", cz: "MOMO DISHES",
    img: everest88,
    items: [
      { name: "Zeleninové knedlíčky",         en: "Vegetable Momo",        price: "165", desc: "Special Indian-Nepalese stuffed dumplings.",            allergy: "1,9,10", t: everest88 },
      { name: "Kuřecí knedlíčky",             en: "Chicken Momo",          price: "189", desc: "Special Indian-Nepalese stuffed dumplings.",            allergy: "1,9,10", t: everest88 },
      { name: "Smažené zeleninové knedlíčky", en: "Fry Vegetable Momo",    price: "175", desc: "Special fried Indian-Nepalese dumplings.",              allergy: "1,9,10", t: everest88 },
      { name: "Chilli zeleninové knedlíčky",  en: "Chilli Vegetable Momo", price: "219", desc: "Special Indian-Nepalese stuffed dumplings with chilli.", allergy: "1,9,10", t: everest88 },
      { name: "Chilli kuřecí knedlíčky",      en: "Chilli Chicken Momo",   price: "209", desc: "Special Indian-Nepalese stuffed dumplings with chilli.", allergy: "1,9,10", t: everest88 },
    ],
  },
  {
    id: "sides", title: "Sides", cz: "PŘÍLOHY & CHLÉB",
    img: everest61,
    items: [
      { name: "Tandoori Naan",      en: "Indický chléb",         price: "45", desc: "Traditional Indian bread baked in Tandoor oven.",          allergy: "1,7",    t: everest62 },
      { name: "Butter Naan",        en: "Máslová placka",        price: "55", desc: "Two-layer butter bread baked in Tandoor oven.",             allergy: "1,7,10", t: everest47 },
      { name: "Garlic Naan",        en: "Česneková placka",      price: "55", desc: "Indian bread with garlic baked in Tandoor oven.",           allergy: "1,7,10", t: everest62 },
      { name: "Chilli Garlic Naan", en: "Pálivá česneková",      price: "60", desc: "Spicy garlic naan bread.",                                  allergy: "1,7",    t: everest55 },
      { name: "Lachha Paratha",     en: "Lachha Paratha",        price: "55", desc: "Multi-layered flat bread.",                                 allergy: "1,7",    t: everest62 },
      { name: "Aloo Paratha",       en: "Placka s bramborami",   price: "65", desc: "Bread stuffed with potatoes and Indian spices baked in Tandoor.", allergy: "1,7", t: everest62 },
      { name: "Plain Rice",         en: "Obyčejná rýže",         price: "49", desc: "Steamed basmati rice.",                                    allergy: "",       t: everest64 },
      { name: "Peas Rice",          en: "Rýže s hráškem",        price: "59", desc: "Spiced rice with peas.",                                   allergy: "",       t: everest34 },
      { name: "Jeera Rice",         en: "Rýže s kmínem",         price: "59", desc: "Basmati rice flavored with cumin.",                        allergy: "",       t: everest34 },
      { name: "Hranolky",           en: "French Fries",          price: "65", desc: "French fries.",                                            allergy: "1,7",    t: everest64 },
    ],
  },
  {
    id: "desserts", title: "Desserts", cz: "DEZERT",
    img: everest46,
    items: [
      { name: "Gulab Jamun", en: "Gulab Jamun", price: "70", desc: "Milk solids soaked in rose syrup.", allergy: "1,7", t: everest46 },
      { name: "Kulfi",       en: "Kulfi",       price: "60", desc: "Traditional Indian ice cream.",     allergy: "1,7", t: everest45 },
    ],
  },
  {
    id: "drinks", title: "Drinks", cz: "NÁPOJE / DRINKS",
    img: everest64,
    items: [
      { name: "Coca Cola",             en: "Coca Cola",             price: "49", desc: "0,33 l", allergy: "",    t: everest64 },
      { name: "Sprite",                en: "Sprite",                price: "49", desc: "0,33 l", allergy: "",    t: everest64 },
      { name: "Mango Lassi",           en: "Mango Lassi",           price: "45", desc: "0,33 l", allergy: "1,7", t: everest64 },
      { name: "Slaný Lassi",           en: "Salted Lassi",          price: "45", desc: "0,33 l", allergy: "1,7", t: everest64 },
      { name: "Indický mango džus",    en: "Indian Mango Juice",    price: "49", desc: "0,33 l", allergy: "",    t: everest64 },
      { name: "Indický čaj s mlékem",  en: "Indian Tea with Milk",  price: "55", desc: "0,33 l", allergy: "",    t: everest64 },
      { name: "Zázvorový čaj s medem", en: "Ginger Tea with Honey", price: "55", desc: "0,20 l", allergy: "",    t: everest64 },
      { name: "Expresso",              en: "Espresso",              price: "49", desc: "0,04 l", allergy: "",    t: everest64 },
    ],
  },
  {
    id: "alcohol", title: "Beer & Wine", cz: "PIVO / VÍNO",
    img: kozel,
    items: [
      { name: "Pilsner Urquell – točené 0,3 l", en: "Pilsner Urquell draught", price: "45", desc: "0,30 l draught.", allergy: "", t: pilsner },
      { name: "Pilsner Urquell – točené 0,5 l", en: "Pilsner Urquell draught", price: "59", desc: "0,50 l draught.", allergy: "", t: pilsner },
      { name: "Gambrinus 10° – lahev",           en: "Gambrinus 10° bottle",   price: "45", desc: "0,50 l bottle.",  allergy: "", t: gambrinus },
      { name: "Fangalo – bílé suché víno",       en: "Fangalo white dry wine", price: "60", desc: "0,20 l.",         allergy: "", t: fangalo },
      { name: "Fangalo – červené víno",          en: "Fangalo red wine",       price: "60", desc: "0,20 l.",         allergy: "", t: fangalo },
      { name: "Fangalo – růžové víno",           en: "Fangalo rosé wine",      price: "60", desc: "0,20 l.",         allergy: "", t: fangalo },
    ],
  },
];

// ─── PARTICLE CANVAS ──────────────────────────────────────────────────────────
const ParticleCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    const particles = [];

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 180; i++) {
      particles.push({
        x:     Math.random() * canvas.width,
        y:     Math.random() * canvas.height,
        r:     Math.random() * 1.2 + 0.3,
        dx:    (Math.random() - 0.5) * 0.18,
        dy:    (Math.random() - 0.5) * 0.18,
        alpha: Math.random() * 0.6 + 0.2,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,189,11,${p.alpha})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" />;
};

// ─── MENU ITEM ────────────────────────────────────────────────────────────────
const MenuItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);
  const descRef = useRef(null);
  const [clamped, setClamped] = useState(false);

  useEffect(() => {
    const el = descRef.current;
    if (el) setClamped(el.scrollHeight > el.clientHeight + 4);
  }, []);

  return (
    <div className="menu-item">
      <img
        src={item.t}
        alt={item.name}
        loading="lazy"
        className="menu-item__thumb"
      />
      <div className="menu-item__body">
        <div className="menu-item__top">
          <span className="menu-item__name">
            {item.name}{" "}
            <span className="menu-item__name-en">/ {item.en}</span>
          </span>
          <span className="menu-item__price">{item.price} Kč</span>
        </div>

        <p ref={descRef} className={`menu-item__desc${expanded ? " expanded" : ""}`}>
          {item.desc}
        </p>

        {(clamped || expanded) && (
          <button
            className="menu-item__see-more"
            onClick={() => setExpanded(x => !x)}
          >
            {expanded ? "See less" : "See more"}
          </button>
        )}

        {item.allergy && (
          <span className="menu-item__allergens">A: {item.allergy}</span>
        )}
      </div>
    </div>
  );
};

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function EverestMasalaMenu() {
  const [activeId,    setActiveId]    = useState(menuData[0].id);
  const [searchOpen,  setSearchOpen]  = useState(false);
  const [searchVal,   setSearchVal]   = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const sectionRefs    = useRef({});
  const navScrollRef   = useRef(null);
  const navBtnRefs     = useRef({});
  const searchInputRef = useRef(null);

  // Flat search index
  const allItems = menuData.flatMap(cat =>
    cat.items.map(i => ({ ...i, catId: cat.id }))
  );

  // Track active section via IntersectionObserver
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveId(e.target.id); }),
      { threshold: 0.2, rootMargin: "-10% 0px -50% 0px" }
    );
    Object.values(sectionRefs.current).forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Auto-scroll nav to the active button
  useEffect(() => {
    const btn  = navBtnRefs.current[activeId];
    const wrap = navScrollRef.current;
    if (btn && wrap) {
      wrap.scrollTo({
        left: btn.offsetLeft - wrap.offsetWidth / 2 + btn.offsetWidth / 2,
        behavior: "smooth",
      });
    }
  }, [activeId]);

  const scrollTo = useCallback((id) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  // Search
  const handleSearch = (val) => {
    setSearchVal(val);
    if (val.length < 2) { setSuggestions([]); return; }
    const q = val.toLowerCase();
    setSuggestions(
      allItems.filter(i =>
        i.name.toLowerCase().includes(q) || i.en.toLowerCase().includes(q)
      )
    );
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchVal("");
    setSuggestions([]);
  };

  const goToDish = (catId) => { closeSearch(); scrollTo(catId); };

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus();
  }, [searchOpen]);

  // ── RENDER ──────────────────────────────────────────────────────────────────
  return (
    <>
      <Navbar />
      {/* Atmospheric background */}
      <div className="bg-layer">
        <div className="bg-layer__gradient" />
      </div>
      <ParticleCanvas />

      {/* ── STICKY NAV ── */}
      <nav className="nav">
        <a href="https://everestmasala.cz/" className="nav__home-btn" aria-label="Home">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          </svg>
        </a>

        <div ref={navScrollRef} className="nav__scroll-wrap">
          <div className="nav__btn-row">
            {menuData.map(cat => (
              <button
                key={cat.id}
                ref={el => navBtnRefs.current[cat.id] = el}
                onClick={() => scrollTo(cat.id)}
                className={`nav__cat-btn${activeId === cat.id ? " active" : ""}`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        <button
          className="nav__search-btn"
          onClick={() => setSearchOpen(x => !x)}
          aria-label="Search"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
      </nav>

      {/* ── SEARCH OVERLAY ── */}
      <div className={`search-overlay${searchOpen ? " open" : ""}`}>
        <input
          ref={searchInputRef}
          value={searchVal}
          onChange={e => handleSearch(e.target.value)}
          placeholder="Search for dishes…"
          className="search-overlay__input"
        />
        <button className="search-overlay__close" onClick={closeSearch}>×</button>
      </div>

      {suggestions.length > 0 && (
        <div className="search-suggestions">
          {suggestions.map((m, i) => (
            <div
              key={i}
              className="search-suggestions__item"
              onClick={() => goToDish(m.catId)}
            >
              <span className="search-suggestions__name">{m.name}</span>
              <span className="search-suggestions__price">{m.price} Kč</span>
            </div>
          ))}
        </div>
      )}

      {/* ── HERO ── */}
      <header className="hero">
        <div className="hero__bg-image" style={{ backgroundImage: `url(${everest11})` }} />
        <div className="hero__bg-gradient" />
        <h1 className="hero__title">EVEREST MASALA</h1>
        <p className="hero__subtitle">Royal Taste of Himalayas</p>
        <div className="hero__btns">
          <a
            href="https://everestmasala.cz/reservation/index_reserve.php"
            className="btn btn--primary"
          >
            Book Table
          </a>
          <button
            className="btn btn--outline"
            onClick={() => scrollTo(menuData[0].id)}
          >
            View Menu
          </button>
        </div>
      </header>

      {/* ── MENU SECTIONS ── */}
      <main className="menu-main">
        {menuData.map((cat, i) => (
          <div
            key={cat.id}
            id={cat.id}
            ref={el => sectionRefs.current[cat.id] = el}
            className={`cat-section${i % 2 === 1 ? " cat-section--reverse" : ""}`}
          >
            {/* Image column */}
            <div className="cat-section__img-col">
              <img
                src={cat.img}
                alt={cat.title}
                loading="lazy"
                className="cat-section__img"
              />
              <div className="cat-section__img-overlay" />
            </div>

            {/* Content column */}
            <div className="cat-section__content">
              <div className="cat-header">
                <h2 className="cat-header__title">{cat.title}</h2>
                <span className="cat-header__subtitle">{cat.cz}</span>
                <span className="cat-header__ornament">✦</span>
              </div>

              <div className="menu-grid">
                {cat.items.map((item, j) => (
                  <MenuItem key={j} item={item} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </main>

      <Footer />
    </>
  );
}