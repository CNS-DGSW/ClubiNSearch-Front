import React, { Dispatch, SetStateAction } from "react";
import * as S from "./Sidebar.style";
import { Logo, AnnounceIcon, EditButton } from "./useSideBar";
import { IRecruitment } from "@/types/IRecruitment";

interface ISidebarProps {
  stateValue: IRecruitment[];
  setStateValue: Dispatch<SetStateAction<IRecruitment[]>>;
}

const Sidebar = (props: ISidebarProps) => {
  return (
    <S.MainContainer>
      <S.TitleContainer>
        <S.TitleImage src={Logo} alt="dd" />
        <S.TitleContext>Care And Service</S.TitleContext>
      </S.TitleContainer>
      <S.ContentsContainer>
        <S.AnnounceContentsContainer>
          <S.AnnounceTitleContainer>
            <S.AnnounceIcon src={AnnounceIcon} alt="announceIcon" />
            <p>공고 리스트</p>
          </S.AnnounceTitleContainer>
          <S.AnnounceEditContainer>
            <S.AnnounceImage src={EditButton} alt="editBtn" />
          </S.AnnounceEditContainer>
        </S.AnnounceContentsContainer>
        <S.SubContentsContainer>
          {props.stateValue.map((value) => {
            return (
              <S.PositionMainContainer>
                <S.PositionTitleContaiver isActive={value.isActive}>
                  <S.PositionTitle>{value.title}</S.PositionTitle>
                </S.PositionTitleContaiver>
              </S.PositionMainContainer>
            );
          })}
        </S.SubContentsContainer>
      </S.ContentsContainer>
      <S.InquiryBox></S.InquiryBox>
    </S.MainContainer>
  );
};

export default Sidebar;
