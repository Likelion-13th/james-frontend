import React from "react";

const Status = () => {
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('ko-KR').format(amount);
    }
    return (
        <div className="status-container">
            <div className="status-title">나의 주문 현황</div>
            <div className="status-section">
                <div className="status-content">
                    <div className="status-label">입금완료</div>
                    <div className="status-value">
                        <span>{formatCurrency(1)}</span>
                    </div>
                </div>
                <div className="status-content">
                    <div className="status-label">배송중</div>
                    <div className="status-value">
                        <span>{formatCurrency(10)}</span>
                    </div>
                </div>
                <div className="status-content">
                    <div className="status-label">배송완료</div>
                    <div className="status-value">
                        <span>{formatCurrency(100)}</span>
                    </div>
                </div>
                <div className="status-content">
                    <div className="status-label">주문취소</div>
                    <div className="status-value">
                        <span>{formatCurrency(0)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Status;