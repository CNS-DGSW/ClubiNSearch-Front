import headerLogo from "../../../asset/headerLogo.svg";
import Image from "next/image";
import * as S from "./Header.style";
import Link from "next/link";
import API from "@/util/api";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  // const [isActive, setIsActive] = useState<boolean>(false);
  // useEffect(() => {
  //   const Token: string | null = localStorage.getItem("accessToken");
  //   if (Token) {
  //     API.get(`api/resume/admin/list/9`, {
  //       headers: { Authorization: `Bearer ${Token}` },
  //     })
  //       .then((e) => {
  //         console.log(e);

  //         setIsActive(true);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //         setIsActive(false);
  //       });
  //   }
  // }, [router]);

  // const LogOutMethod = () => {
  //   if (window.confirm("로그아웃 하시겠습니까?")) {
  //     setIsActive(false);
  //     localStorage.removeItem("accessToken");
  //     localStorage.removeItem("refreshToken");
  //   }
  // };
  return (
    <header>
      <S.Nav>
        <S.headerLogo>
          <Link href="/">
            <Image src={headerLogo} alt="logo" width={179} height={35} />
          </Link>
        </S.headerLogo>
        {}
      </S.Nav>
    </header>
  );
}
