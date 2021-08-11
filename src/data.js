const data = [
    {
        id: "1",
        restaurant_name: "Плов и самса на Ивлиева",
        restaurant_logo: '../images/res1/res_logo.jpg',
        restaurant_img: '../images/res1/res_img.jpg',
        sections: [
            {
                id: "1",
                section_name: "Плов",
                meals: [
                    {
                        id: "1",
                        meal_name: "Плов свадебный",
                        meal_img: '../images/res1/meal_plov.jpg',
                        meal_price: "25000",
                        meal_description: "Говяжье мясо, морковь желтая, рис лазер, масло хлопковое, лук репчатый, зира, нохат, изюм для плова, специи",
                    },
                    {
                        id: "2",
                        meal_name: "Чойхона палов (Плов по-чайхански)",
                        meal_img: '../images/res1/meal_plov2.jpg',
                        meal_price: "27000",
                        meal_description: "Вкуснейшее блюдо узбекской национальной кухни. Баранина, морковь, лук, рис, бараний жир.",
                    }
                ]
            },
            {
                id: "2",
                section_name: "Шашлыки",
                meals: [
                    {
                        id: "1",
                        meal_name: "Жаз (Кусковой баранина)",
                        meal_img: '../images/res1/meal_kabob.jpg',
                        meal_price: "16000",
                        meal_description: "Баранья мясо, курдюк, специи, лук репчатый.",
                    },
                    {
                        id: "2",
                        meal_name: "Жаз (Кусковой говядина)",
                        meal_img: '../images/res1/meal_kabob.jpg',
                        meal_price: "16000",
                        meal_description: "Баранья мясо, курдюк, специи, лук репчатый.",
                    },
                    {
                        id: "3",
                        meal_name: "Молотый",
                        meal_img: '../images/res1/meal_kabob4.jpg',
                        meal_price: "13000",
                        meal_description: "Баранья мясо, курдюк, специи, лук репчатый.",
                    },
                    {
                        id: "4",
                        meal_name: "Печень баранины",
                        meal_img: '../images/res1/meal_kabob2.jpg',
                        meal_price: "13000",
                        meal_description: "Печень баранины, курдюк, лук репчатый, специи.",
                    },
                    {
                        id: "5",
                        meal_name: "Куриный",
                        meal_img: '../images/res1/meal_kabob3.jpg',
                        meal_price: "13000",
                        meal_description: "Мякоть бедренной части курицы, замаринованная в специях и поджаренная на гриле.",
                    },
                ]
            },
            {
                id: "3",
                section_name: "Салаты",
                meals: [
                    {
                        id: "1",
                        meal_name: "Аччик-чучук (Ачичук)",
                        meal_img: '../images/res1/meal_salat1.jpg',
                        meal_price: "8000",
                        meal_description: "Помидоры, огурцы, лук, специи.",
                    },
                    {
                        id: "2",
                        meal_name: "Весенний",
                        meal_img: '../images/res1/meal_salat2.jpg',
                        meal_price: "8000",
                        meal_description: "Кислое молоко, зелень, специи.",
                    },
                    {
                        id: "3",
                        meal_name: "Сузьма",
                        meal_img: '../images/res1/meal_salat3.jpg',
                        meal_price: "8000",
                        meal_description: "Сузьма, специи.",
                    },
                    {
                        id: "4",
                        meal_name: "Салат Айсберг",
                        meal_img: '../images/res1/meal_salat4.jpg',
                        meal_price: "24000",
                        meal_description: "Черри, огурец, айсберг, апельсин, фетакса, куриная грудка, орех.",
                    },
                    {
                        id: "5",
                        meal_name: "Салат с руккола",
                        meal_img: '../images/res1/meal_salat5.jpg',
                        meal_price: "24000",
                        meal_description: "Руккола, черри, болгарский перец, огурец, ананас, куриная грудка, лимон.",
                    },
                ]
            },
            {
                id: "4",
                section_name: "Первые блюда",
                meals: [
                    {
                        id: "1",
                        meal_name: "Кайнатма шурва",
                        meal_img: '../images/res1/meal_blyuda1.jpg',
                        meal_price: "26000",
                        meal_description: "Традиционный узбекский суп, который готовиться из баранины и овощей.",
                    },
                    {
                        id: "2",
                        meal_name: "Мампар",
                        meal_img: '../images/res1/meal_blyuda2.jpg',
                        meal_price: "22000",
                        meal_description: "Мясо, мука (тесто), перец сладкий, помидоры, луковица, чеснок, перец острый, яйцо, масло растительное, специи, соль.",
                    },
                    {
                        id: "3",
                        meal_name: "Мастава",
                        meal_img: '../images/res1/meal_blyuda3.jpg',
                        meal_price: "19000",
                        meal_description: "Мясо, морковь, рис, болгарский перец, лук, сливочное масло, специальная приправа.",
                    },
                    {
                        id: "4",
                        meal_name: "Окрошка",
                        meal_img: '../images/res1/meal_blyuda4.jpg',
                        meal_price: "18000",
                        meal_description: "Окро́шка — традиционное блюдо национальной русской кухни, холодный суп.",
                    },
                    {
                        id: "5",
                        meal_name: "Кук-си",
                        meal_img: '../images/res1/meal_blyuda5.jpg',
                        meal_price: "27000",
                        meal_description: "Говядина, куриные яйца, огурцы, чеснок, белокочанная капуста, кинза, лапша, растительное масло, вода, соевый соус, уксус, молотый черный перец, сахар, соль.",
                    },
                ]
            },
        ]
    },
    {
        id: "2",
        restaurant_name: "Afiyet Doner Kebab",
        restaurant_logo: '../images/res2/res_logo.jpg',
        restaurant_img: '../images/res2/res_img.jpg',
        sections: [
            {
                id: "1",
                section_name: "Завтраки",
                meals: [
                    {
                        id: "1",
                        meal_name: "Sigara boregi",
                        meal_img: '../images/res2/meal_sigara.jpg',
                        meal_price: "20000",
                        meal_description: "Sigara boregi - это нежно-хрустящие легкие рулетики из тонкого теста. Сандартная начинка - брынза",
                    },
                    {
                        id: "2",
                        meal_name: "Kahvalti tabagi",
                        meal_img: '../images/res2/meal_2.jpg',
                        meal_price: "35000",
                        meal_description: "Помидоры и огурцы, несколько видов сыра, оливки, зелень, яйца, бореки, каймак (kaymak), мед, варенье.",
                    },
                    {
                        id: "3",
                        meal_name: "Menemen турецкий омлет",
                        meal_img: '../images/res2/meal_3.jpg',
                        meal_price: "20000",
                        meal_description: "Помидоры, болгарский перец, яйца, репчатый лук, зелень, оливковое масло, специи, соль.",
                    }
                ]
            },
            {
                id: "2",
                section_name: "Супы",
                meals: [
                    {
                        id: "1",
                        meal_name: "Mercimek sorba",
                        meal_img: '../images/res2/meal_sup1.jpg',
                        meal_price: "18000",
                        meal_description: "Бульон, красная чечевица, луковица, картошка, лимон, морковь, томатной пасты, растительное масло, черный или красный перец, специи, соль.",
                    },
                    {
                        id: "2",
                        meal_name: "Dil sorba",
                        meal_img: '../images/res2/meal_sup2.jpg',
                        meal_price: "26000",
                        meal_description: "Говяжий язык, лук, вода, морковь, стебли сельдерея, соль и перец.",
                    },
                    {
                        id: "3",
                        meal_name: "Ezogelin sorba",
                        meal_img: '../images/res2/meal_sup3.jpg',
                        meal_price: "13000",
                        meal_description: "Красная чечевица, бульон, рис, растительное масло, масло сливочное, лук репчатый, чеснок, специи, соль.",
                    }
                ]
            },
            {
                id: "3",
                section_name: "Фастфуд",
                meals: [
                    {
                        id: "1",
                        meal_name: "Мясной донар (Et donar)",
                        meal_img: '../images/res2/meal_fast1.jpg',
                        meal_price: "59000",
                        meal_description: "Говядина, чипсы, помидоры, огурцы, соус, кутчуп, майонез, специи.",
                    },
                    {
                        id: "2",
                        meal_name: "Лаваш",
                        meal_img: '../images/res2/meal_fast2.jpg',
                        meal_price: "33000",
                        meal_description: "Лаваш, растительное масло, петрушка (зелень), базилик, кинза, зеленый лук, укроп, соль.",
                    },
                    {
                        id: "3",
                        meal_name: "Пиде с сыром",
                        meal_img: '../images/res2/meal_fast3.jpg',
                        meal_price: "41000",
                        meal_description: "Мука пшеничная, молоко, сливочное масло, сахар, брынза, полутвердый сыр, яйцо, специи, соль.",
                    },
                    {
                        id: "4",
                        meal_name: "Пиде с фаршем",
                        meal_img: '../images/res2/meal_fast4.jpg',
                        meal_price: "24000",
                        meal_description: "Мука пшеничная, говядина (фарш), помидоры, огурцы, молоко, сливочное масло, сахар, яйцо, зелень, специи, соль.",
                    }
                ]
            },
            {
                id: "4",
                section_name: "Гриль меню",
                meals: [
                    {
                        id: "1",
                        meal_name: "Кузу чоп шиш",
                        meal_img: '../images/res2/meal_gril1.jpg',
                        meal_price: "60000",
                        meal_description: "Мелко нарезанный шашлык из маринованной баранины. Подается вместе с булгуром, луком, жареными на гриле помидорами",
                    },
                    {
                        id: "2",
                        meal_name: "Дана бифтек",
                        meal_img: '../images/res2/meal_gril2.jpg',
                        meal_price: "66000",
                        meal_description: "Фарш мясной, сухари, яйцо куриное, лук репчатый, перец красный, чеснок, паприка сладкая, перец черный, орегано, соль, петрушка, мята.",
                    },
                    {
                        id: "3",
                        meal_name: "Izgara karishik",
                        meal_img: '../images/res2/meal_gril3.jpg',
                        meal_price: "80000",
                        meal_description: "Фарш мясной, яйцо куриное, лук репчатый, масло оливковое, перец красный, чеснок, зелень, паприка сладкая, перец черный, орегано, соль.",
                    },
                    {
                        id: "4",
                        meal_name: "Tavuklu pirzola",
                        meal_img: '../images/res2/meal_gril4.jpg',
                        meal_price: "44000",
                        meal_description: "Куриное мясо, помидоры, перец болгарский, масло растительное, лук репчатый (крупный), соевый соус, чеснок, зелень, соль, перец черный, перец красный.",
                    },
                    {
                        id: "5",
                        meal_name: "Куриный бифтек",
                        meal_img: '../images/res2/meal_gril5.jpg',
                        meal_price: "44000",
                        meal_description: "Куриное мясо, яйцо куриное, помидоры, лук репчатый, перец красный, чеснок, паприка сладкая, перец черный, орегано, соль, петрушка, мята.",
                    },
                ]
            },
        ]
    },
    {
        id: "3",
        restaurant_name: "Somsa House",
        restaurant_logo: '../images/res3/res_logo.jpg',
        restaurant_img: '../images/res3/res_img.jpg',
        sections: [
            {
                id: "1",
                section_name: "Самса",
                meals: [
                    {
                        id: "1",
                        meal_name: "Сет 22 - Самса мясная",
                        meal_img: '../images/res3/meal1.jpg',
                        meal_price: "87000",
                        meal_description: "Аутентичное, хрустящее, слоённое, тонкое тесто (ручная раскатка), прям из печи. Говяжья вырезка, лук, специи. (Без думбы и животных жиров)",
                    },
                    {
                        id: "2",
                        meal_name: "Сет 11 - Самса куриная",
                        meal_img: '../images/res3/meal2.jpg',
                        meal_price: "87000",
                        meal_description: "Аутентичное, хрустящее, слоённое, тонкое тесто (ручная раскатка), прям из печи. Сочное куриное филе, лук, специи. (Без думбы и животных жиров)",
                    },
                    {
                        id: "3",
                        meal_name: "Сет Гигант Мясной",
                        meal_img: '../images/res3/meal1.jpg',
                        meal_price: "87000",
                        meal_description: "Аутентичное, хрустящее, слоённое, тонкое тесто (ручная раскатка), прям из печи. Говяжья вырезка, лук, специи. (Без думбы и животных жиров).",
                    }
                ]
            },
            {
                id: "2",
                section_name: "Супы",
                meals: [
                    {
                        id: "1",
                        meal_name: "Mercimek sorba",
                        meal_img: '../images/res3/meal_sup1.jpg',
                        meal_price: "18000",
                        meal_description: "Бульон, красная чечевица, луковица, картошка, лимон, морковь, томатной пасты, растительное масло, черный или красный перец, специи, соль.",
                    },
                    {
                        id: "2",
                        meal_name: "Dil sorba",
                        meal_img: '../images/res2/meal_sup2.jpg',
                        meal_price: "26000",
                        meal_description: "Говяжий язык, лук, вода, морковь, стебли сельдерея, соль и перец.",
                    },
                    {
                        id: "3",
                        meal_name: "Ezogelin sorba",
                        meal_img: '../images/res2/meal_sup3.jpg',
                        meal_price: "13000",
                        meal_description: "Красная чечевица, бульон, рис, растительное масло, масло сливочное, лук репчатый, чеснок, специи, соль.",
                    }
                ]
            },
            {
                id: "3",
                section_name: "Фастфуд",
                meals: [
                    {
                        id: "1",
                        meal_name: "Мясной донар (Et donar)",
                        meal_img: '../images/res2/meal_fast1.jpg',
                        meal_price: "59000",
                        meal_description: "Говядина, чипсы, помидоры, огурцы, соус, кутчуп, майонез, специи.",
                    },
                    {
                        id: "2",
                        meal_name: "Лаваш",
                        meal_img: '../images/res2/meal_fast2.jpg',
                        meal_price: "33000",
                        meal_description: "Лаваш, растительное масло, петрушка (зелень), базилик, кинза, зеленый лук, укроп, соль.",
                    },
                    {
                        id: "3",
                        meal_name: "Пиде с сыром",
                        meal_img: '../images/res2/meal_fast3.jpg',
                        meal_price: "41000",
                        meal_description: "Мука пшеничная, молоко, сливочное масло, сахар, брынза, полутвердый сыр, яйцо, специи, соль.",
                    },
                    {
                        id: "4",
                        meal_name: "Пиде с фаршем",
                        meal_img: '../images/res2/meal_fast4.jpg',
                        meal_price: "24000",
                        meal_description: "Мука пшеничная, говядина (фарш), помидоры, огурцы, молоко, сливочное масло, сахар, яйцо, зелень, специи, соль.",
                    }
                ]
            },
            {
                id: "4",
                section_name: "Гриль меню",
                meals: [
                    {
                        id: "1",
                        meal_name: "Кузу чоп шиш",
                        meal_img: '../images/res2/meal_gril1.jpg',
                        meal_price: "60000",
                        meal_description: "Мелко нарезанный шашлык из маринованной баранины. Подается вместе с булгуром, луком, жареными на гриле помидорами",
                    },
                    {
                        id: "2",
                        meal_name: "Дана бифтек",
                        meal_img: '../images/res2/meal_gril2.jpg',
                        meal_price: "66000",
                        meal_description: "Фарш мясной, сухари, яйцо куриное, лук репчатый, перец красный, чеснок, паприка сладкая, перец черный, орегано, соль, петрушка, мята.",
                    },
                    {
                        id: "3",
                        meal_name: "Izgara karishik",
                        meal_img: '../images/res2/meal_gril3.jpg',
                        meal_price: "80000",
                        meal_description: "Фарш мясной, яйцо куриное, лук репчатый, масло оливковое, перец красный, чеснок, зелень, паприка сладкая, перец черный, орегано, соль.",
                    },
                    {
                        id: "4",
                        meal_name: "Tavuklu pirzola",
                        meal_img: '../images/res2/meal_gril4.jpg',
                        meal_price: "44000",
                        meal_description: "Куриное мясо, помидоры, перец болгарский, масло растительное, лук репчатый (крупный), соевый соус, чеснок, зелень, соль, перец черный, перец красный.",
                    },
                    {
                        id: "5",
                        meal_name: "Куриный бифтек",
                        meal_img: '../images/res2/meal_gril5.jpg',
                        meal_price: "44000",
                        meal_description: "Куриное мясо, яйцо куриное, помидоры, лук репчатый, перец красный, чеснок, паприка сладкая, перец черный, орегано, соль, петрушка, мята.",
                    },
                ]
            },
        ]
    },
    {
        id: "4",
        restaurant_name: "Плов и самса на Ивлиева",
        restaurant_logo: '../images/res1/res_logo.jpg',
        restaurant_img: '../images/res1/res_img.jpg',
        sections: [
            {
                id: "1",
                section_name: "Плов",
                meals: [
                    {
                        id: "1",
                        meal_name: "Плов свадебный",
                        meal_img: '../images/res1/meal_plov.jpg',
                        meal_price: "25000",
                        meal_description: "Говяжье мясо, морковь желтая, рис лазер, масло хлопковое, лук репчатый, зира, нохат, изюм для плова, специи",
                    },
                    {
                        id: "2",
                        meal_name: "Чойхона палов (Плов по-чайхански)",
                        meal_img: '../images/res1/meal_plov2.jpg',
                        meal_price: "27000",
                        meal_description: "Вкуснейшее блюдо узбекской национальной кухни. Баранина, морковь, лук, рис, бараний жир.",
                    }
                ]
            },
            {
                id: "2",
                section_name: "Шашлыки",
                meals: [
                    {
                        id: "1",
                        meal_name: "Жаз (Кусковой баранина)",
                        meal_img: '../images/res1/meal_kabob.jpg',
                        meal_price: "16000",
                        meal_description: "Баранья мясо, курдюк, специи, лук репчатый.",
                    },
                    {
                        id: "2",
                        meal_name: "Жаз (Кусковой говядина)",
                        meal_img: '../images/res1/meal_kabob.jpg',
                        meal_price: "16000",
                        meal_description: "Баранья мясо, курдюк, специи, лук репчатый.",
                    },
                    {
                        id: "3",
                        meal_name: "Молотый",
                        meal_img: '../images/res1/meal_kabob4.jpg',
                        meal_price: "13000",
                        meal_description: "Баранья мясо, курдюк, специи, лук репчатый.",
                    },
                    {
                        id: "4",
                        meal_name: "Печень баранины",
                        meal_img: '../images/res1/meal_kabob2.jpg',
                        meal_price: "13000",
                        meal_description: "Печень баранины, курдюк, лук репчатый, специи.",
                    },
                    {
                        id: "5",
                        meal_name: "Куриный",
                        meal_img: '../images/res1/meal_kabob3.jpg',
                        meal_price: "13000",
                        meal_description: "Мякоть бедренной части курицы, замаринованная в специях и поджаренная на гриле.",
                    },
                ]
            },
            {
                id: "3",
                section_name: "Салаты",
                meals: [
                    {
                        id: "1",
                        meal_name: "Аччик-чучук (Ачичук)",
                        meal_img: '../images/res1/meal_salat1.jpg',
                        meal_price: "8000",
                        meal_description: "Помидоры, огурцы, лук, специи.",
                    },
                    {
                        id: "2",
                        meal_name: "Весенний",
                        meal_img: '../images/res1/meal_salat2.jpg',
                        meal_price: "8000",
                        meal_description: "Кислое молоко, зелень, специи.",
                    },
                    {
                        id: "3",
                        meal_name: "Сузьма",
                        meal_img: '../images/res1/meal_salat3.jpg',
                        meal_price: "8000",
                        meal_description: "Сузьма, специи.",
                    },
                    {
                        id: "4",
                        meal_name: "Салат Айсберг",
                        meal_img: '../images/res1/meal_salat4.jpg',
                        meal_price: "24000",
                        meal_description: "Черри, огурец, айсберг, апельсин, фетакса, куриная грудка, орех.",
                    },
                    {
                        id: "5",
                        meal_name: "Салат с руккола",
                        meal_img: '../images/res1/meal_salat5.jpg',
                        meal_price: "24000",
                        meal_description: "Руккола, черри, болгарский перец, огурец, ананас, куриная грудка, лимон.",
                    },
                ]
            },
            {
                id: "4",
                section_name: "Первые блюда",
                meals: [
                    {
                        id: "1",
                        meal_name: "Кайнатма шурва",
                        meal_img: '../images/res1/meal_blyuda1.jpg',
                        meal_price: "26000",
                        meal_description: "Традиционный узбекский суп, который готовиться из баранины и овощей.",
                    },
                    {
                        id: "2",
                        meal_name: "Мампар",
                        meal_img: '../images/res1/meal_blyuda2.jpg',
                        meal_price: "22000",
                        meal_description: "Мясо, мука (тесто), перец сладкий, помидоры, луковица, чеснок, перец острый, яйцо, масло растительное, специи, соль.",
                    },
                    {
                        id: "3",
                        meal_name: "Мастава",
                        meal_img: '../images/res1/meal_blyuda3.jpg',
                        meal_price: "19000",
                        meal_description: "Мясо, морковь, рис, болгарский перец, лук, сливочное масло, специальная приправа.",
                    },
                    {
                        id: "4",
                        meal_name: "Окрошка",
                        meal_img: '../images/res1/meal_blyuda4.jpg',
                        meal_price: "18000",
                        meal_description: "Окро́шка — традиционное блюдо национальной русской кухни, холодный суп.",
                    },
                    {
                        id: "5",
                        meal_name: "Кук-си",
                        meal_img: '../images/res1/meal_blyuda5.jpg',
                        meal_price: "27000",
                        meal_description: "Говядина, куриные яйца, огурцы, чеснок, белокочанная капуста, кинза, лапша, растительное масло, вода, соевый соус, уксус, молотый черный перец, сахар, соль.",
                    },
                ]
            },
        ]
    },
    {
        id: "5",
        restaurant_name: "Afiyet Doner Kebab",
        restaurant_logo: '../images/res2/res_logo.jpg',
        restaurant_img: '../images/res2/res_img.jpg',
        sections: [
            {
                id: "1",
                section_name: "Завтраки",
                meals: [
                    {
                        id: "1",
                        meal_name: "Sigara boregi",
                        meal_img: '../images/res2/meal_sigara.jpg',
                        meal_price: "20000",
                        meal_description: "Sigara boregi - это нежно-хрустящие легкие рулетики из тонкого теста. Сандартная начинка - брынза",
                    },
                    {
                        id: "2",
                        meal_name: "Kahvalti tabagi",
                        meal_img: '../images/res2/meal_2.jpg',
                        meal_price: "35000",
                        meal_description: "Помидоры и огурцы, несколько видов сыра, оливки, зелень, яйца, бореки, каймак (kaymak), мед, варенье.",
                    },
                    {
                        id: "3",
                        meal_name: "Menemen турецкий омлет",
                        meal_img: '../images/res2/meal_3.jpg',
                        meal_price: "20000",
                        meal_description: "Помидоры, болгарский перец, яйца, репчатый лук, зелень, оливковое масло, специи, соль.",
                    }
                ]
            },
            {
                id: "2",
                section_name: "Супы",
                meals: [
                    {
                        id: "1",
                        meal_name: "Mercimek sorba",
                        meal_img: '../images/res2/meal_sup1.jpg',
                        meal_price: "18000",
                        meal_description: "Бульон, красная чечевица, луковица, картошка, лимон, морковь, томатной пасты, растительное масло, черный или красный перец, специи, соль.",
                    },
                    {
                        id: "2",
                        meal_name: "Dil sorba",
                        meal_img: '../images/res2/meal_sup2.jpg',
                        meal_price: "26000",
                        meal_description: "Говяжий язык, лук, вода, морковь, стебли сельдерея, соль и перец.",
                    },
                    {
                        id: "3",
                        meal_name: "Ezogelin sorba",
                        meal_img: '../images/res2/meal_sup3.jpg',
                        meal_price: "13000",
                        meal_description: "Красная чечевица, бульон, рис, растительное масло, масло сливочное, лук репчатый, чеснок, специи, соль.",
                    }
                ]
            },
            {
                id: "3",
                section_name: "Фастфуд",
                meals: [
                    {
                        id: "1",
                        meal_name: "Мясной донар (Et donar)",
                        meal_img: '../images/res2/meal_fast1.jpg',
                        meal_price: "59000",
                        meal_description: "Говядина, чипсы, помидоры, огурцы, соус, кутчуп, майонез, специи.",
                    },
                    {
                        id: "2",
                        meal_name: "Лаваш",
                        meal_img: '../images/res2/meal_fast2.jpg',
                        meal_price: "33000",
                        meal_description: "Лаваш, растительное масло, петрушка (зелень), базилик, кинза, зеленый лук, укроп, соль.",
                    },
                    {
                        id: "3",
                        meal_name: "Пиде с сыром",
                        meal_img: '../images/res2/meal_fast3.jpg',
                        meal_price: "41000",
                        meal_description: "Мука пшеничная, молоко, сливочное масло, сахар, брынза, полутвердый сыр, яйцо, специи, соль.",
                    },
                    {
                        id: "4",
                        meal_name: "Пиде с фаршем",
                        meal_img: '../images/res2/meal_fast4.jpg',
                        meal_price: "24000",
                        meal_description: "Мука пшеничная, говядина (фарш), помидоры, огурцы, молоко, сливочное масло, сахар, яйцо, зелень, специи, соль.",
                    }
                ]
            },
            {
                id: "4",
                section_name: "Гриль меню",
                meals: [
                    {
                        id: "1",
                        meal_name: "Кузу чоп шиш",
                        meal_img: '../images/res2/meal_gril1.jpg',
                        meal_price: "60000",
                        meal_description: "Мелко нарезанный шашлык из маринованной баранины. Подается вместе с булгуром, луком, жареными на гриле помидорами",
                    },
                    {
                        id: "2",
                        meal_name: "Дана бифтек",
                        meal_img: '../images/res2/meal_gril2.jpg',
                        meal_price: "66000",
                        meal_description: "Фарш мясной, сухари, яйцо куриное, лук репчатый, перец красный, чеснок, паприка сладкая, перец черный, орегано, соль, петрушка, мята.",
                    },
                    {
                        id: "3",
                        meal_name: "Izgara karishik",
                        meal_img: '../images/res2/meal_gril3.jpg',
                        meal_price: "80000",
                        meal_description: "Фарш мясной, яйцо куриное, лук репчатый, масло оливковое, перец красный, чеснок, зелень, паприка сладкая, перец черный, орегано, соль.",
                    },
                    {
                        id: "4",
                        meal_name: "Tavuklu pirzola",
                        meal_img: '../images/res2/meal_gril4.jpg',
                        meal_price: "44000",
                        meal_description: "Куриное мясо, помидоры, перец болгарский, масло растительное, лук репчатый (крупный), соевый соус, чеснок, зелень, соль, перец черный, перец красный.",
                    },
                    {
                        id: "5",
                        meal_name: "Куриный бифтек",
                        meal_img: '../images/res2/meal_gril5.jpg',
                        meal_price: "44000",
                        meal_description: "Куриное мясо, яйцо куриное, помидоры, лук репчатый, перец красный, чеснок, паприка сладкая, перец черный, орегано, соль, петрушка, мята.",
                    },
                ]
            },
        ]
    },
    {
        id: "6",
        restaurant_name: "Somsa House",
        restaurant_logo: '../images/res3/res_logo.jpg',
        restaurant_img: '../images/res3/res_img.jpg',
        sections: [
            {
                id: "1",
                section_name: "Самса",
                meals: [
                    {
                        id: "1",
                        meal_name: "Сет 22 - Самса мясная",
                        meal_img: '../images/res3/meal1.jpg',
                        meal_price: "87 000",
                        meal_description: "Аутентичное, хрустящее, слоённое, тонкое тесто (ручная раскатка), прям из печи. Говяжья вырезка, лук, специи. (Без думбы и животных жиров)",
                    },
                    {
                        id: "2",
                        meal_name: "Сет 11 - Самса куриная",
                        meal_img: '../images/res3/meal2.jpg',
                        meal_price: "87000",
                        meal_description: "Аутентичное, хрустящее, слоённое, тонкое тесто (ручная раскатка), прям из печи. Сочное куриное филе, лук, специи. (Без думбы и животных жиров)",
                    },
                    {
                        id: "3",
                        meal_name: "Сет Гигант Мясной",
                        meal_img: '../images/res3/meal1.jpg',
                        meal_price: "87000",
                        meal_description: "Аутентичное, хрустящее, слоённое, тонкое тесто (ручная раскатка), прям из печи. Говяжья вырезка, лук, специи. (Без думбы и животных жиров).",
                    }
                ]
            },
            {
                id: "2",
                section_name: "Супы",
                meals: [
                    {
                        id: "1",
                        meal_name: "Mercimek sorba",
                        meal_img: '../images/res3/meal_sup1.jpg',
                        meal_price: "18000",
                        meal_description: "Бульон, красная чечевица, луковица, картошка, лимон, морковь, томатной пасты, растительное масло, черный или красный перец, специи, соль.",
                    },
                    {
                        id: "2",
                        meal_name: "Dil sorba",
                        meal_img: '../images/res2/meal_sup2.jpg',
                        meal_price: "26000",
                        meal_description: "Говяжий язык, лук, вода, морковь, стебли сельдерея, соль и перец.",
                    },
                    {
                        id: "3",
                        meal_name: "Ezogelin sorba",
                        meal_img: '../images/res2/meal_sup3.jpg',
                        meal_price: "13000",
                        meal_description: "Красная чечевица, бульон, рис, растительное масло, масло сливочное, лук репчатый, чеснок, специи, соль.",
                    }
                ]
            },
            {
                id: "3",
                section_name: "Фастфуд",
                meals: [
                    {
                        id: "1",
                        meal_name: "Мясной донар (Et donar)",
                        meal_img: '../images/res2/meal_fast1.jpg',
                        meal_price: "59000",
                        meal_description: "Говядина, чипсы, помидоры, огурцы, соус, кутчуп, майонез, специи.",
                    },
                    {
                        id: "2",
                        meal_name: "Лаваш",
                        meal_img: '../images/res2/meal_fast2.jpg',
                        meal_price: "33000",
                        meal_description: "Лаваш, растительное масло, петрушка (зелень), базилик, кинза, зеленый лук, укроп, соль.",
                    },
                    {
                        id: "3",
                        meal_name: "Пиде с сыром",
                        meal_img: '../images/res2/meal_fast3.jpg',
                        meal_price: "41000",
                        meal_description: "Мука пшеничная, молоко, сливочное масло, сахар, брынза, полутвердый сыр, яйцо, специи, соль.",
                    },
                    {
                        id: "4",
                        meal_name: "Пиде с фаршем",
                        meal_img: '../images/res2/meal_fast4.jpg',
                        meal_price: "24000",
                        meal_description: "Мука пшеничная, говядина (фарш), помидоры, огурцы, молоко, сливочное масло, сахар, яйцо, зелень, специи, соль.",
                    }
                ]
            },
            {
                id: "4",
                section_name: "Гриль меню",
                meals: [
                    {
                        id: "1",
                        meal_name: "Кузу чоп шиш",
                        meal_img: '../images/res2/meal_gril1.jpg',
                        meal_price: "60000",
                        meal_description: "Мелко нарезанный шашлык из маринованной баранины. Подается вместе с булгуром, луком, жареными на гриле помидорами",
                    },
                    {
                        id: "2",
                        meal_name: "Дана бифтек",
                        meal_img: '../images/res2/meal_gril2.jpg',
                        meal_price: "66000",
                        meal_description: "Фарш мясной, сухари, яйцо куриное, лук репчатый, перец красный, чеснок, паприка сладкая, перец черный, орегано, соль, петрушка, мята.",
                    },
                    {
                        id: "3",
                        meal_name: "Izgara karishik",
                        meal_img: '../images/res2/meal_gril3.jpg',
                        meal_price: "80000",
                        meal_description: "Фарш мясной, яйцо куриное, лук репчатый, масло оливковое, перец красный, чеснок, зелень, паприка сладкая, перец черный, орегано, соль.",
                    },
                    {
                        id: "4",
                        meal_name: "Tavuklu pirzola",
                        meal_img: '../images/res2/meal_gril4.jpg',
                        meal_price: "44000",
                        meal_description: "Куриное мясо, помидоры, перец болгарский, масло растительное, лук репчатый (крупный), соевый соус, чеснок, зелень, соль, перец черный, перец красный.",
                    },
                    {
                        id: "5",
                        meal_name: "Куриный бифтек",
                        meal_img: '../images/res2/meal_gril5.jpg',
                        meal_price: "44000",
                        meal_description: "Куриное мясо, яйцо куриное, помидоры, лук репчатый, перец красный, чеснок, паприка сладкая, перец черный, орегано, соль, петрушка, мята.",
                    },
                ]
            },
        ]
    }
];

export default data;