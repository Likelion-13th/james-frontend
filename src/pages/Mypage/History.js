import React from "react";

const History = ( {historyData=[], onCancel}) => {
    
    return (
        <div className="history-container-wrap">
            <div className="history-title">나의 쇼핑 내역</div>
            <div className="history-container">
                <table className="history-table" cellPadding="10" cellSpacing="0">
                    <thead>
                        <tr>
                            <th>주문 일자</th>
                            <th>상품 정보</th>
                            <th>수량</th>
                            <th>구매 금액</th>
                            <th>상태</th>
                            <th>주문 취소</th>
                        </tr>
                    </thead>
                    <tbody>
                        {historyData.map((item) => (
                            <tr key={item.orderId}>
                                <td>{new Date(item.createdAt).toLocaleDateString('ko-KR')}</td>
                                <td>
                                <div className="history-list">
                                    <div className="history-script">
                                        <div className="script-title">{item.itemName}</div>
                                    </div>
                                </div>
                            </td>
                            <td>{item.quantity}</td>
                            <td>{item.totalPrice.toLocaleString()}원</td>
                            <td>{item.status}</td>
                            <td>
                                {item.status === "PROCESSING" ? (
                                <div>
                                    <div className="history-cancel">
                                        <div className="history-cancel-button"
                                        onClick={() => onCancel(item.orderId)}
                                        >취소</div>
                                    </div>    
                                </div>    ) : (
                                    <span>-</span>
                                )} 
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default History;