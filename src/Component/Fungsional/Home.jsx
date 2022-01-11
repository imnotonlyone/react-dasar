import React from "react";
import Produk from "../Class/Produk";

const Home = () => {
  return (
    <div>
      {<Produk nama="Mackbook pro 2020" stock="10" harga="33.000.000" />}
      {<Produk nama="Mackbook pro 2021" stock="10" harga="23.000.000" />}
      {<Produk nama="Mackbook pro 2022" stock="10" harga="13.000.000" />}
      {<Produk nama="Mackbook pro 2023" stock="10" harga="43.000.000" />}
      {<Produk nama="Mackbook pro 2020" stock="10" harga="33.000.000" />}
      {<Produk nama="Mackbook pro 2020" stock="10" harga="33.000.000" />}
    </div>
  );
};

export default Home;
