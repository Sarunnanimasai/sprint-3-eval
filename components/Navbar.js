import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar({ users }) {
  return (
    <div id="navbar_container">
      <div id="buttons">
        <Link href="/">
          <h1>{users.login}</h1>
        </Link>
        <button>Projects</button>
        <button>Experience</button>
      </div>
      <div>
        <Image src={users.avatar_url} alt="error"></Image>
      </div>
    </div>
  );
}
