// src/components/Footer.js
"use client"; // 声明为客户端组件，因为使用了 useState 和 useEffect

import React, { useEffect, useState } from "react";
import WakaTimeStats from './WakaTimeStats';

export default function Footer() {
  return (
    <footer className="border-t p-4">
      <div className="container mx-auto text-center">
        <WakaTimeStats />
        <p className="mt-2">© 2025 我的应用</p>
      </div>
    </footer>
  );
}