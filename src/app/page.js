import Image from "next/image";
import styles from "./page.module.css";
import { UserButton } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <div>
        <h1>Hello, Next.js!</h1>
        <UserButton />
      </div>
    </>
  );
}
