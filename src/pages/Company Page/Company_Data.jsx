import React from "react";

const CarouselData = [
  {
    profilePic:
      "https://scontent.fmnl13-2.fna.fbcdn.net/v/t39.30808-1/425583603_122093575856217851_9014177664702479946_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFEYh--2bswbv6-pt7kLpQDR4wojDJTJ1VHjCiMMlMnVSO_glfiiLH9aiGrH47w7zs4VfwFf3BS_yWTPfI1pFEQ&_nc_ohc=tpP2TKhDGOYAX-omWQM&_nc_ht=scontent.fmnl13-2.fna&oh=00_AfDWiEtCT8XFWBTq1tQ394uLx3nEXS6vwtOfSMrQaxDmZw&oe=65F590E7",
    username: "Roompal",
    companyDesc: "Helping you find a place to call home",
    profileCover:
      "https://scontent.fmnl13-2.fna.fbcdn.net/v/t39.30808-1/425583603_122093575856217851_9014177664702479946_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFEYh--2bswbv6-pt7kLpQDR4wojDJTJ1VHjCiMMlMnVSO_glfiiLH9aiGrH47w7zs4VfwFf3BS_yWTPfI1pFEQ&_nc_ohc=tpP2TKhDGOYAX-omWQM&_nc_ht=scontent.fmnl13-2.fna&oh=00_AfDWiEtCT8XFWBTq1tQ394uLx3nEXS6vwtOfSMrQaxDmZw&oe=65F590E7",
  },
  {
    profilePic:
    'https://scontent.fmnl13-2.fna.fbcdn.net/v/t39.30808-6/330260500_654655776488197_1680566696933626898_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEY1WO_nH2myS06dKkXNdo4jy3GZpiRlO2PLcZmmJGU7eGFClI2oyRq_-L1oXtvo06p7Iw-6Ga1vbe8-XW0voR5&_nc_ohc=fgMqrFNNVukAX-k51v6&_nc_zt=23&_nc_ht=scontent.fmnl13-2.fna&oh=00_AfD6a85QAQO9TDEyw-itrIUO40HA83n5gQ20P2OznVJuIQ&oe=65F405AB',

       username: "Trent Startup",
    companyDesc: "Let the world know my name",
    profileCover:
    "https://scontent.fmnl13-2.fna.fbcdn.net/v/t39.30808-6/330260500_654655776488197_1680566696933626898_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEY1WO_nH2myS06dKkXNdo4jy3GZpiRlO2PLcZmmJGU7eGFClI2oyRq_-L1oXtvo06p7Iw-6Ga1vbe8-XW0voR5&_nc_ohc=fgMqrFNNVukAX-k51v6&_nc_zt=23&_nc_ht=scontent.fmnl13-2.fna&oh=00_AfD6a85QAQO9TDEyw-itrIUO40HA83n5gQ20P2OznVJuIQ&oe=65F405AB",
    
  },
  {
    profilePic:
      "https://scontent.fmnl13-2.fna.fbcdn.net/v/t39.30808-6/400399109_122093037962119503_6847513787062490006_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHTnJbS_Ev2J98WxDrooKiEx1xTmsjNRFDHXFOayM1EUKaa2vExzAG958ac2EL5G-G2GJufDPiuVegoJJ7BZ0pY&_nc_ohc=nZi5WUVF9cAAX8EIrYy&_nc_zt=23&_nc_ht=scontent.fmnl13-2.fna&oh=00_AfDuqxYTg2ThCxuu4UvhcNjjEs0J6Rnsltx1fQnd2fwieg&oe=65F599D0",
    username: "CushyRental",
    companyDesc: "Helping you find a place to call home",
    profileCover:
      "https://scontent.fmnl13-2.fna.fbcdn.net/v/t39.30808-6/399503042_3494095387520724_6132673427187573603_n.jpg?stp=dst-jpg_s960x960&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHdAmBQMs5O8UemSwEaDYMWkBQ9kJkNE6eQFD2QmQ0Tp6WKEfEvI1J6rIoCvS5olsljXKUzSTXtbVHjfioVr6P_&_nc_ohc=jpPylVAJFKEAX_rUWZ6&_nc_zt=23&_nc_ht=scontent.fmnl13-2.fna&oh=00_AfAOFdKXdPjCZAcwud0l5bgiVU5mKzlfJFVNfLiy0vcDbw&oe=65F527F0",
  },
  {
    profilePic:
      "https://scontent.fmnl13-2.fna.fbcdn.net/v/t39.30808-6/302527558_133800466031334_5692781953885510024_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFtLvZX3y1fXT-abogqvRWJty39DgkDkn63Lf0OCQOSfoXsa2ZqKnb_Rm5sn-_eTeN-4ueAmh__13xqLTLlDfSP&_nc_ohc=HIST6W4QK3MAX_s6SeX&_nc_zt=23&_nc_ht=scontent.fmnl13-2.fna&oh=00_AfDYZIW4lDy2s8v2fFc0wuBGbZ718XCfakPB3m7aq8QRZw&oe=65F5DB6D",
    username: "Andale",
    companyDesc: "Helping you find a place to call home",
    profileCover:
      "https://scontent.fmnl13-1.fna.fbcdn.net/v/t39.30808-6/302342074_133805246030856_9160381266866913176_n.png?stp=dst-png_s960x960&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHoyWv0qofUvHbL3__53lnxBNV1HPNYoAUE1XUc81igBeHYVKIIL4wo7B4GsiNhvSzps6ewpVFcNqwtiEHBf0H2&_nc_ohc=egCPVqw2VAwAX8TXkpr&_nc_zt=23&_nc_ht=scontent.fmnl13-1.fna&oh=00_AfAk5FOuIk7Q6_3mKRiCCP5kIbjRuI9m8Wkupf8jnHlUsg&oe=65F4D1B1",
  },
  
];
export default CarouselData;