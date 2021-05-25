const mongoose = require("mongoose");
const db = require("../models");

// This file empties the database and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactcms");

const bookSeed = [
    {
        title: "Coraline",
        author: "Neil Gaiman",
        description: "When a young girl ventures through a hidden door, she finds another life with shocking similarities to her own. Coraline has moved to a new house with her parents and she is fascinated by the fact that their 'house' is in fact only half a house! Divided into flats years before, there is a brick wall behind a door where once there was a corridor. One day it is a corridor again and the intrepid Coraline wanders down it. And so a nightmare-ish mystery begins that takes Coraline into the arms of counterfeit parents and a life that isn't quite right. Can Coraline get out? Can she find her real parents? Will life ever be the same again?",
        image: "http://books.google.com/books/content?id=C8NVhWNU_uIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        link: "http://books.google.com/books?id=C8NVhWNU_uIC&dq=coraline&hl=&source=gbs_api"
    },
    {
        title: "Coraline",
        author: "Neil Gaiman",
        description: "Tenth anniversary edition of Neil Gaiman's modern classic, brilliantly illustrated by Chris Riddell, with a new foreword by the author",
        image: "http://books.google.com/books/content?id=3niiEQjRbocC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        link: "http://books.google.com/books?id=3niiEQjRbocC&dq=coraline&hl=&source=gbs_api"
    },
    {
        title: "Coraline",
        author: "Neil Gaiman",
        description: "In Coraline's family's new flat there's a locked door. On the other side is a brick wall—until Coraline unlocks the door . . . and finds a passage to another flat in another house just like her own. Only different. The food is better there. Books have pictures that writhe and crawl and shimmer. And there's another mother and father there who want Coraline to be their little girl. They want to change her and keep her with them. . . . Forever. Coraline is an extraordinary fairy tale/nightmare from the uniquely skewed imagination of #1 New York Times bestselling author Neil Gaiman.",
        image: "http://books.google.com/books/content?id=pXlAY0XnrQUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        link: "http://books.google.com/books?id=pXlAY0XnrQUC&dq=coraline&hl=&source=gbs_api"
    },
    {
        title: "Coraline",
        author: "Neil Gaiman",
        description: "This book will send a shiver down your spine, out through your shoes and into a taxi to the airport.\" Terry Pratchett'The message is this. Don't go through the door.'Coraline finds a secret corridor that takes her into a different house - a terrifyin",
        image: "http://books.google.com/books/content?id=zONpPwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        link: "http://books.google.com/books?id=zONpPwAACAAJ&dq=coraline&hl=&source=gbs_api"
    }
];

db.Book.remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });