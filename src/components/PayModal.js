import React, {useState, useEffect} from "react";
import "../styles/PayModal.css";

const PayModal = ({product, onClose}) => {
    const [quantity, setQuantity] = useState(1);
    const [mileageToUse, setMileageToUse] = useState("");
    const maxMileage = 100000;
    const [, setProductPrice] = useState(product.price);
    const [totalPrice, setTotalPrice] = useState(product.price);

    //수량 증가 및 감소 함수
    const handleQuantityChange = (type) => {
        setQuantity((prev) => (type === "plus"? prev + 1 : Math.max(1,prev-1)));
    };
    
    useEffect(()=> {
        const newProductPrice = product.price * quantity;
        setProductPrice(newProductPrice);
        setTotalPrice(Math.max(newProductPrice - mileageToUse, 0));
    }, [quantity, mileageToUse, product.price]);

    //input에 입력할 때 실행
    const handleMileageChange = (e) => {
        const value = e.target.value;
        const numericValue = value === " " ? 0 : Math.min(Number(value),maxMileage);
        setMileageToUse(numericValue);
    };


    return(
        <div className="modal">
            <div className="overlay" onClick={onClose}></div>
            <div className="container">
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
                <div className="title">주문 / 결제</div>
                <div className="section">
                    <div className="section-title">주문 상품</div>
                    <div className="order-info">
                        <img
                            src={product.imagePath}
                            alt={product.name}
                            className="order-image"
                        />
                        <div>
                            <div className="order-name">{product.name}</div>
                            <div className="order-brand">{product.brand}</div>
                            <div className="order-price">
                                {product.price.toLocaleString()}원
                            </div>

                            <div className="quantity-control">
                                <button
                                    className="quantity-button"
                                    onClick={() => handleQuantityChange("minus")}
                                    >
                                        -
                                    </button>
                                    <div className="quantity">{quantity}</div>
                                    <button
                                        className="quantity-button"
                                        onClick={() => handleQuantityChange("plus")}
                                        >
                                            +
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="section-title">배송지</div>
                    <div className="user-info">제임스</div>
                    <div className="user-info">010-0000-0000</div>
                    <div className="user-info">
                        경기도 고양시 덕양구 항공대학로 76
                    </div>
                </div>
                <div className="section">
                    <div className="section-title">마일리지 사용</div>
                    <div className="mileage-info">
                        현재 사용 가능한 마일리지: {maxMileage.toLocaleString()} 원
                    </div>
                    <input
                        className="mileageToUse-input"
                        placeholder="사용하실 마일리지를 입력하세요"
                        value={mileageToUse}
                        onChange={handleMileageChange}
                    />
                </div>
                <div className="section">
                    <div className="section-title">총 결제금액</div>
                    <div className="total">
                        <div>
                            <div className="total-item">총 상품금액</div>
                            <div className="total-item">마일리지 확인</div>
                            <div className="total-item">배송비</div>
                        </div>
                        <div>
                            <div className="total-value">
                                {totalPrice.toLocaleString()} 원
                            </div>
                            <div className="total-value discount">
                                -{mileageToUse.toLocaleString()} 원
                            </div>
                            <div className="total-value">무료배송</div>
                        </div>
                    </div>
                </div>
                <button className="pay-button">결제하기</button>
            </div>
        </div>
    )
}

export default PayModal;