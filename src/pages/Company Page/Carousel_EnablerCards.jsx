import React from "react";
import CardContainer from "./Carousel_Circle";

function EnablerCards() {

  const imageUrls = [
    'https://scontent.fmnl13-2.fna.fbcdn.net/v/t39.30808-6/425583603_122093575856217851_9014177664702479946_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFb4_a9zYQBomcJ4tpmnA0fR4wojDJTJ1VHjCiMMlMnVf1ZM3kiruukXXKTIV-4ykNJRfFz_Xy2u8zHNu2NdatB&_nc_ohc=xZHaxb9stdIAX-TXTgx&_nc_zt=23&_nc_ht=scontent.fmnl13-2.fna&oh=00_AfAvOveq1QK5aEbMsVqR1UZJuUb4nOJgJtGj1nNTW6Il8w&oe=65F321C4',
    'https://scontent.fmnl13-2.fna.fbcdn.net/v/t39.30808-6/302527558_133800466031334_5692781953885510024_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGWNtqpvViYk3DasGupVvlYty39DgkDkn63Lf0OCQOSflSSyH9LrkYMXuSzyRBtZCca925JWU3GIoPrFCC6zt9s&_nc_ohc=HIST6W4QK3MAX9pwj6I&_nc_zt=23&_nc_ht=scontent.fmnl13-2.fna&oh=00_AfCze52PtVET0HBb04pNNXlMh7Zz-QzIxExtMchBwHzTJA&oe=65F3E12D',
    'https://scontent.fmnl13-2.fna.fbcdn.net/v/t39.30808-6/400399109_122093037962119503_6847513787062490006_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH-iGRTJTDPhnnpbgWI0Lr4x1xTmsjNRFDHXFOayM1EUJKaYZyiui5iBct-G0Mdo-2R3J4W2oS19euxZ_xAdCQc&_nc_ohc=nZi5WUVF9cAAX8LCFng&_nc_zt=23&_nc_ht=scontent.fmnl13-2.fna&oh=00_AfB8GtejtQrbf7hJnUDi7wA33f188F0i1wnqK1kCW8fLcg&oe=65F39F90',
    'https://scontent.fmnl13-1.fna.fbcdn.net/v/t39.30808-1/370043411_699180475575048_7955692706773132256_n.png?stp=dst-png_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEP9Tc2NVzqJntn8naworx3N8Iy00ZQLBA3wjLTRlAsEB6-CcSJ3vieQD8FvMVqcMVfnxUlyIJsolxgnTKxCtmQ&_nc_ohc=8z9N0Ogz44IAX9lMWl4&_nc_ht=scontent.fmnl13-1.fna&oh=00_AfBZA0WSdqRyGm3XwwxO0OPFbZvOaNrAto_0pAs2e30zKQ&oe=65F3D40C',
    'https://scontent.fmnl13-1.fna.fbcdn.net/v/t39.30808-6/239363438_10161278832391754_3124586202588104528_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE7PwNyT8stSO6M2tjLHUuGINuwYsYm6Kkg27BixiboqWVk0Ljfvb6L0ceCXuw_3M20bCzksCH2Mjh05qhayfn8&_nc_ohc=1UcRJ2fD_h8AX9g1plU&_nc_zt=23&_nc_ht=scontent.fmnl13-1.fna&oh=00_AfD0gXHQRKaq1C_JURbajRsU74CyWWmP5Cdj4n48_gWJeg&oe=65F430FD',
    'https://scontent.fmnl13-2.fna.fbcdn.net/v/t39.30808-6/330260500_654655776488197_1680566696933626898_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEY1WO_nH2myS06dKkXNdo4jy3GZpiRlO2PLcZmmJGU7eGFClI2oyRq_-L1oXtvo06p7Iw-6Ga1vbe8-XW0voR5&_nc_ohc=fgMqrFNNVukAX-k51v6&_nc_zt=23&_nc_ht=scontent.fmnl13-2.fna&oh=00_AfD6a85QAQO9TDEyw-itrIUO40HA83n5gQ20P2OznVJuIQ&oe=65F405AB',
  ];

  return (

    <div>
      <div className="App mb-5">
        <CardContainer imageUrls={imageUrls} />
      </div>
    </div>
  );
}

export default EnablerCards;
