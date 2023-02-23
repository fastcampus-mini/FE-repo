import { ROUTES } from '@/constants/routes';
import COLORS from '@/styles/colors';
import styled from '@emotion/styled';
import React from 'react';
import Button from './components/common/Button';
import { useNavigate } from 'react-router-dom';
import FavorButton from './components/Product/FavorButton';

interface Prop {
  data: { id: string; title: string; bank: string; favorite: boolean };
  bankLogo: string | undefined;
  bankTitle: string;
  productName: string;
  isFavor: boolean;
  loanTitle: string;
  rateAverage: string;
  rateSort: string;
}

const ProductCardBuy = ({
  data,
  bankLogo,
  bankTitle,
  productName,
  isFavor = true,
  loanTitle,
  rateAverage,
  rateSort,
}: Prop) => {
  const navigate = useNavigate();
  return (
    <StyledProductCardBuy>
      <div className="cardCon">
        <div className="logoTitle">
          <img className="bankLogo" src={bankLogo} alt={bankTitle} />
          <h2 className="bankTitle">{bankTitle}</h2>
        </div>
        <div className="cancelBuy">
          <Button width="30%" height="30px" marginTop="10px">
            신청 취소하기
          </Button>
        </div>

        <p className="productName">{productName}</p>
        <div className="textBox">
          <p>
            대출종류<span>{loanTitle}</span>
          </p>
          <p>
            평균금리<span>{rateAverage}</span>
          </p>
          <p>
            금리구분<span>{rateSort}</span>
          </p>
        </div>
      </div>
    </StyledProductCardBuy>
  );
};

export default ProductCardBuy;

const StyledProductCardBuy = styled.li`
  background-color: ${COLORS.white};
  border-radius: 10px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  padding: 0.6rem;
  border: 1px solid ${COLORS.lightGray};
  font-size: 12px;
  font-weight: bold;
  position: relative;

  .cardCon {
    .logoTitle {
      display: flex;
      gap: 10px;
      font-weight: bold;
      align-items: center;
      margin-bottom: 10px;
      color: ${COLORS.primary};

      .bankLogo {
        width: 30px;
        margin-right: 10px;
      }
    }

    .cancelBuy button {
      position: absolute;
      right: 15px;
      top: 15px;
    }

    .productName {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 25px;
    }

    .textBox {
      display: flex;
      gap: 1.6rem;
      margin-bottom: 20px;

      p {
        display: flex;
        width: 25%;
        flex-direction: column;
        color: ${COLORS.gray};
        font-weight: normal;

        span {
          color: ${COLORS.mainText};
          font-size: 16px;
          font-weight: bold;
          margin-top: 5px;
        }
      }
    }
  }
`;