import React from "react";

import { HomePage } from "../../routes/Homepage";
import {  Route, Routes } from "react-router";
import { Menu } from "../../routes/Menu";
import { Reservation } from "../../routes/Reservation";

export const RootLayout = () => {
  return (
    <main>
      
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<Reservation />} />
        </Routes>

    </main>
  );
};
