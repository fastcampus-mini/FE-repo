import React from 'react';
import COLORS from '@/styles/colors';
import styled from '@emotion/styled';
import { Player } from '@lottiefiles/react-lottie-player';
import Input from '@/components/common/Input';

const Home = () => {
  return (
    <StyledHome>
      <Player
        className="welcome"
        autoplay
        src="https://lottie.host/a8eaabb9-8b3e-4593-a292-691432650b13/erB13ry72Q.json"
        style={{ margin: 0 }}
      ></Player>
      <div className="bannerBg">
        <Player
          autoplay
          loop
          src="https://assets2.lottiefiles.com/packages/lf20_kK73MQ.json"
        ></Player>
      </div>
      <p>
        방문자님,
        <br />
        오늘도 즐거운 하루 보내세요!
      </p>
      <div className="panel">
        <Input inputType="text" placeholder="검색" classType="text-search" />
      </div>
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled.div`
  position: relative;
  height: 100%;
  padding: 50px 0 0 10px;

  .welcome {
    width: 157px;
    position: absolute;
    top: -40px;
  }

  p {
    position: absolute;
    top: 100px;
    left: 32%;
    transform: translate(-50%, -50%);
    color: ${COLORS.white};
    font-size: 13px;
    line-height: 20px;
  }

  .bannerBg {
    display: flex;
    justify-content: end;
    margin-top: 30px;

    #lottie {
      width: 230px;
    }
    position: relative;
  }

  .panel {
    position: absolute;
    width: 100%;
    height: calc(100% - 182px);
    left: 0;
    border-radius: 15px 15px 0 0;
    box-shadow: 0 -5px 5px rgba(0, 0, 0, 0.5);
    background: ${COLORS.background};
    padding: 20px 10px;
    overflow-y: auto;
  }
`;
