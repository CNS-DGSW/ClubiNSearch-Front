import FileInput from "@/components/common/input/FileInput";
import Footer from "@/components/common/footer/Footer";
import InfoInput from "@/components/common/input/InfoInput";
import ErrorHandler from "@/util/ErrorHandler";
import { useEffect, useState } from "react";
import cnsComputer from "../../asset/cnsComputer.svg";
import * as S from "./apply.style";
import { IContentsValue } from "@/types/IContentsValue";
import { IErrorValue } from "@/types/IErrorValue";
import { useRouter } from "next/router";

//Pick을 써서 portfolio를 골라냄
type GetObjectPickType<T, U extends keyof T> = T[U];
//Partial을 써서 portfolio의 속성에 null을 추가함
type ApplyAllNull<T> = { [t in keyof T]: T[t] | null };

//위의 과정을 IPortfolioValue에 넣어서 새 타입을 만듬
type IPortfolioValue = ApplyAllNull<GetObjectPickType<IContentsValue, "file">>; //IContentsValue라는 타입과 "portfolio"의 유니온 타입을 넘겨줌

const ApplyForm = () => {
  const router = useRouter();
  const [pageId, setPageId] = useState<number | null>(null);
  const [contentsValue, setContentsValue] = useState<IContentsValue>({
    name: "",
    schoolNumber: "",
    phoneNumber: "",
    introduce: "",
    file: null,
    link: "",
  });

  const [name, setName] = useState<string>("");
  const [schoolNumber, setSchoolNumber] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [introduce, setIntroduce] = useState<string>("");
  const [portfolio, setPortfolio] = useState<any>();

  const [link, setLink] = useState<string>("https://");
  const [check, setCheck] = useState<boolean>();
  const [errorCheckHandler, setErrorCheckHandler] =
    useState<IErrorValue | null>(null);

  useEffect(() => {
    setContentsValue({
      name: name,
      schoolNumber: schoolNumber,
      phoneNumber: phoneNumber,
      introduce: introduce,
      link: link,
    });
  }, [name, schoolNumber, phoneNumber, introduce, link]);

  useEffect(() => {
    const { id } = router.query;
    setPageId(Number(id));
  }, [router]);

  const ServerHandler = () => {
    console.log(pageId);

    if (check) {
      alert("제출하시겠습니까?");
      const initError: IErrorValue = ErrorHandler(contentsValue);
      console.log(initError);
      setErrorCheckHandler({ ...initError });
      if (
        initError.introduce.isError ||
        initError.name.isError ||
        initError.phoneNumber.isError ||
        initError.schoolNumber.isError
      )
        alert("형식에 맞게 써주세요.");
    } else {
      alert("개인정보 수집 동의에 동의해주세요.");
    }
  };

  return (
    <>
      <S.MainWrapDiv>
        <nav>
          <S.title>지원서 작성하기</S.title>
          <S.subTitle>CNS 프론트 엔드 ( 아이다 신개발 론칭 )</S.subTitle>
        </nav>
        <form onSubmit={ServerHandler}>
          <InfoInput
            value={name}
            setValue={setName}
            title="이름"
            isEssential
            placehorderContext="이름을 입력해주세요."
            errorAlertContext={
              errorCheckHandler
                ? errorCheckHandler.name.isError
                  ? errorCheckHandler.name.context
                  : "None Error"
                : "None Error"
            }
            isError={errorCheckHandler?.name.isError}
          />
          <InfoInput
            value={schoolNumber}
            setValue={setSchoolNumber}
            title="학번"
            isEssential={true}
            placehorderContext="학번을 입력해주세요."
            errorAlertContext={
              errorCheckHandler
                ? errorCheckHandler.schoolNumber.isError
                  ? errorCheckHandler.schoolNumber.context
                  : "None Error"
                : "None Error"
            }
            isError={errorCheckHandler?.schoolNumber.isError}
          />
          <InfoInput
            value={phoneNumber}
            setValue={setPhoneNumber}
            title="연락처"
            isEssential={true}
            placehorderContext='"-"를 제외한 연락처를 입력해주세요.'
            errorAlertContext={
              errorCheckHandler
                ? errorCheckHandler.phoneNumber.isError
                  ? errorCheckHandler.phoneNumber.context
                  : "None Error"
                : "None Error"
            }
            isError={errorCheckHandler?.phoneNumber.isError}
          />
          <InfoInput
            value={introduce}
            setValue={setIntroduce}
            title="한줄 자기소개"
            isEssential={true}
            placehorderContext="자유롭게 입력해주세요."
            errorAlertContext={
              errorCheckHandler
                ? errorCheckHandler.introduce.isError
                  ? errorCheckHandler.introduce.context
                  : "None Error"
                : "None Error"
            }
            isError={errorCheckHandler?.introduce.isError}
          />
          <FileInput
            value={portfolio}
            setValue={setPortfolio}
            title="포트폴리오 (선택사항)"
            isEssential={false}
            placehorderContext="pdf형식을 권장합니다."
            errorAlertContext="ErrorAlert"
            isExplane={true}
            explaneContent={[
              "포트폴리오는 필수가 아닌 선택사항입니다.",
              "파일은 pdf형식을 권장하며 최대 50mb까지 업로드 하실 수 있습니다.",
              "파일은 면접이 끝나는 즉시 삭제될 예정이며 외부 공유를 금지합니다.",
            ]}
          />
          <InfoInput
            value={link}
            setValue={setLink}
            title="링크 (선택사항)"
            isEssential={false}
            placehorderContext="https://"
            errorAlertContext="ErrorAlert"
            isExplane={true}
            explaneContent={[
              "링크 또한 필수가 아닌 선택사항입니다.",
              "자신을 드러낼 수 있는 깃허브, 개인 블로그 등 자유롭게 입력해주세요.",
            ]}
          />

          <S.CNSComputer
            src={cnsComputer}
            alt="CNS 저거 무슨 사진이야 (컴퓨터)"
            width={10}
            height={10}
          />
          <S.PrivacyCheckBoxWrap>
            <S.PrivacyCheckBox
              type="checkbox"
              onChange={() => setCheck(!check)}
            />
            <S.PrivacyCheckContext>
              개인정보 수집 및 이용에 동의합니다.
            </S.PrivacyCheckContext>
          </S.PrivacyCheckBoxWrap>
          <p>
            <S.ButtonStyle type="submit">제출하기</S.ButtonStyle>
          </p>
        </form>
      </S.MainWrapDiv>
      <Footer></Footer>
    </>
  );
};

export default ApplyForm;
