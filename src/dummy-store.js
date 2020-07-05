export default {
    "owners": [
        {  "oId": 1,
            "oName": "Not Assigned",
            "oUsername": "user123", },
        {  "oId": 2,
            "oName": "John Doe",
            "oUsername": "jd12345", },
        {  "oId": 3,
            "oName": "Jane Doe",
            "oUsername": "jd67890", },
    ],    

    "users": [
        {  "uId": 1,
            "uName": "John Smith",
            "uUsername": "js12345",  },
        {  "uId": 2,
            "uName": "Average Jane",
            "uUsername": "aj12345",  }, 
    ],

    "restaurant": [
        {  "rId": 1,
            "rOwner": 1,
            "rImage": "filler image",
            "rType": "Fast Food",
            "rName": "Shake Shack",
            "rAddress": "610 Commons Way",
            "rCity": "Bridgewater",
            "rState": "NJ",
            "rZip": "08807",
            "rPhone": "(732) 347-8820",
            "rHours": [
                {   "suOpen": "11:00AM",
                    "suClose": "9:00PM",
                    "mOpen": "11:00AM",
                    "mClose": "9:00PM",
                    "tuOpen": "11:00AM",
                    "tuClose": "9:00PM",
                    "wOpen": "11:00AM",
                    "wClose": "9:00PM",
                    "thOpen": "11:00AM",
                    "thClose": "9:00PM",
                    "fOpen": "11:00AM",
                    "fClose": "9:00PM",
                    "saOpen": "11:00AM",
                    "saClose": "9:00PM",
                }
            ],
            "menu": [
                {
                    "mId": 1,
                    "itemName": "Single ShackBurger", 
                    "catId": 2, 
                    "price": "5.89", 
                    "options": "yes", 
                }, 
                {
                    "mId": 2,
                    "itemName": "Single SmokeShack", 
                    "catId": 2, 
                    "price": "7.39", 
                    "options": "yes", 
                }, 
                {
                    "mId": 3,
                    "itemName": "Chick'n Shack", 
                    "catId": 3, 
                    "price": "7.19", 
                    "options": "yes", 
                }, 
                {
                    "mId": 4,
                    "itemName": "Cheese Fries", 
                    "catId": 4, 
                    "price": "4.09", 
                    "options": "yes", 
                }, 
                {
                    "mId": 5,
                    "itemName": "S'mores Shake", 
                    "catId": 5, 
                    "price": "5.99", 
                    "options": "yes", 
                }, 
                {
                    "mId": 6,
                    "itemName": "Small Pink Lemonade", 
                    "catId": 6, 
                    "price": "3.09", 
                    "options": "no", 
                }, 


                

            ],
        },
        {  "rId": 2,
            "rOwner": 2,
            "rImage": "filler image",
            "rType": "Fast Food",
            "rName": "Chick-fil-A",
            "rAddress": "3710 U.S. 9 Ste 2314",
            "rCity": "Freehold",
            "rState": "NJ",
            "rZip": "07728", 
            "rPhone": "(732) 308-3402",
            "hours": [
                {   "suOpen": "Closed",
                    "suClose": "Closed",
                    "mOpen": "11:00AM",
                    "mClose": "7:00PM",
                    "tuOpen": "11:00AM",
                    "tuClose": "7:00PM",
                    "wOpen": "11:00AM",
                    "wClose": "7:00PM",
                    "thOpen": "11:00AM",
                    "thClose": "7:00PM",
                    "fOpen": "11:00AM",
                    "fClose": "7:00PM",
                    "saOpen": "11:00AM",
                    "saClose": "5:00PM",
                }
            ],
            "menu": [
                {
                    "mId": 1,
                    "itemName": "Chick-fil-A Chicken Sandwich", 
                    "catId": 3, 
                    "price": "4.19", 
                    "options": "yes", 
                }, 
                {
                    "mId": 2,
                    "itemName": "Chick-fil-A Nuggets", 
                    "catId": 3, 
                    "price": "4.29", 
                    "options": "yes", 
                }, 
                {
                    "mId": 3,
                    "itemName": "Chick-fil-A Cobb Salad", 
                    "catId": 7, 
                    "price": "Currently Not Available", 
                    "options": "yes", 
                }, 
                {
                    "mId": 4,
                    "itemName": "Mac & Cheese", 
                    "catId": 4, 
                    "price": "3.55", 
                    "options": "yes", 
                }, 
                {
                    "mId": 5,
                    "itemName": "Chocolate Chunk Cookie", 
                    "catId": 5, 
                    "price": "1.45", 
                    "options": "yes", 
                }, 
                {
                    "mId": 6,
                    "itemName": "Mango Passion Tea Lemonade", 
                    "catId": 6, 
                    "price": "2.29", 
                    "options": "no", 
                }, 
            ]
        },
    ], 

    "categories": [
        {   "catId": 1, 
            "catName": "General", },
        {   "catId": 2, 
            "catName": "Burgers",     },
        {   "catId": 3, 
            "catName": "Chicken", },
        {   "catId": 4, 
            "catName": "Sides", },
        {   "catId": 5, 
            "catName": "Desserts", },
        {   "catId": 6, 
            "catName": "Drinks", },
        {   "catId": 7, 
            "catName": "Salads", },
        {   "catId": 8, 
            "catName": "Drinks", },
    ],

    





};