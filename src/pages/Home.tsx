import React, { useState, useEffect } from 'react';
import COLORS from '@/styles/colors';
import styled from '@emotion/styled';
import Input from '@/components/common/Input';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/Product/ProductCard';
import { useDispatch } from 'react-redux';
import { hideLoading, showLoading } from '@/store/loadingSlice';
import { MESSAGES } from '@/constants/messages';
import { IProduct } from '@/interfaces/product';
import Lottie from 'lottie-react';
import WelcomeLottie from '@/lotties/welcome.json';
import BackgroundLottie from '@/lotties/background.json';
import { axiosInstance } from '@/apis/instance';
import { API_URLS } from '@/constants/apiUrls';
import { getCookie } from '@/utils/cookie';

const Home = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<IProduct>([] as never);
  const { productId } = products;
  const userName = getCookie('userName');

  useEffect(() => {
    async function getProducts() {
      try {
        dispatch(showLoading());
        const recommendedData: IProduct = (await axiosInstance.get(API_URLS.RECOMMEND)) as never;
        const randomData: IProduct = [
          {
            productId: '1',
            productName: '직장인 신용대출',
            companyName: '우리은행',
            favorite: false,
            productTypeName: '대출',
            avgInterest: '3.4%',
            optionsInterestType: '대출',
          },
          {
            productId: '2',
            productName: '주부 신용대출',
            companyName: '국민은행',
            favorite: false,
            productTypeName: '대출',
            avgInterest: '3.4%',
            optionsInterestType: '대출',
          },
          {
            productId: '3',
            productName: '고양이 신용대출',
            companyName: '신한은행',
            favorite: false,
            productTypeName: '대출',
            avgInterest: '3.4%',
            optionsInterestType: '대출',
          },
          {
            productId: '4',
            productName: '주부 신용대출',
            companyName: '국민은행',
            favorite: false,
            productTypeName: '대출',
            avgInterest: '3.4%',
            optionsInterestType: '대출',
          },
          {
            productId: '5',
            productName: '직장인 신용대출',
            companyName: '우리은행',
            favorite: false,
            productTypeName: '대출',
            avgInterest: '3.4%',
            optionsInterestType: '대출',
          },
          {
            productId: '6',
            productName: '주부 신용대출',
            companyName: '신한은행',
            favorite: false,
            productTypeName: '대출',
            avgInterest: '3.4%',
            optionsInterestType: '대출',
          },
          {
            productId: '7',
            productName: '고양이 신용대출',
            companyName: '국민은행',
            favorite: false,
            productTypeName: '대출',
            avgInterest: '3.4%',
            optionsInterestType: '대출',
          },
          {
            productId: '8',
            productName: '대학생 신용대출',
            companyName: '제주은행',
            favorite: false,
            productTypeName: '대출',
            avgInterest: '3.4%',
            optionsInterestType: '대출',
          },
        ] as never;

        {
          userName ? setProducts(recommendedData) : setProducts(randomData);
        }
      } catch (error) {
        alert(MESSAGES.PRODUCT.ERROR_GET_DETAIL);
      } finally {
        dispatch(hideLoading());
      }
    }
    getProducts();
  }, []);
  return (
    <StyledHome>
      <Lottie animationData={WelcomeLottie} loop={false} className="welcome" />
      <div className="bannerBg">
        <Lottie animationData={BackgroundLottie} loop={true} className="background" />
      </div>
      <p className="welcomeText">
        {userName ? userName : '방문자'}님,
        <br />
        {userName ? '근사한 상품을 준비해 놓았어요!' : '오늘도 즐거운 하루 보내세요!'}
      </p>
      <div id="panel">
        <Link to="/search">
          <Input
            inputType="text"
            width="calc(100% - 10px)"
            placeholder="검색어를 임력해 주세요."
            classType="text-search"
          />
        </Link>
        <ul className="productsArea">
          {products.map((product: IProduct) => (
            <ProductCard key={productId} data={product} />
          ))}
        </ul>
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

  p.welcomeText {
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

    .background {
      width: 230px;
    }
    position: relative;
  }

  #panel {
    position: absolute;
    width: 100%;
    height: calc(100% - 182px);
    left: 0;
    border-radius: 15px 15px 0 0;
    box-shadow: 0 -5px 5px rgba(0, 0, 0, 0.5);
    background: ${COLORS.background};
    padding: 20px 0 0 10px;
    overflow-y: auto;

    .productsArea {
      height: calc(100% - 79px);
      margin-top: 10px;
      padding-right: 10px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
  }
`;
