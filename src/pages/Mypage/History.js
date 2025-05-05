import React from "react";

const History = () => {
    const onCancel = () => {
        //API호출
        alert("취소");
    }

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
                        <tr>
                            <td>2025-01-01</td>
                            <td>
                                <div className="history-list">
                                    <div className="history-image">
                                        <img className="h-image" src="../../img/maison.png" alt="maison"/>
                                    </div>
                                    <div className="history-script">
                                        <div className="script-title">Masion Margiela</div>
                                        <div className="script-sub">레이지 선데이 모닝</div>
                                    </div>
                                </div>
                            </td>
                            <td>1</td>
                            <td>135,000원</td>
                            <td>배송 중</td>
                            <td>
                                <div>
                                    <div className="history-cancel">
                                        <div className="history-cancel-button"
                                        onClick={onCancel}
                                        >취소</div>
                                    </div>    
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>2025-01-01</td>
                            <td>
                                <div className="history-list">
                                    <div className="history-image">
                                        <img className="h-image" src="../../img/jomalone.png" alt="jomalone"/>
                                    </div>
                                    <div className="history-script">
                                        <div className="script-title">Jo Malone</div>
                                        <div className="script-sub">블랙베리 앤 베이 코롱</div>
                                    </div>
                                </div>
                            </td>
                            <td>1</td>
                            <td>235,000원</td>
                            <td>주문취소</td>
                            <td>
                                <div>
                                    <div className="history-cancel">
                                        <div className="history-cancel-button"
                                        onClick={onCancel}
                                        >취소</div>
                                    </div>    
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>2025-01-01</td>
                            <td>
                                <div className="history-list">
                                    <div className="history-image">
                                        <img className="h-image" src="../../img/granhand.png" alt="granhand"/>
                                    </div>
                                    <div className="history-script">
                                        <div className="script-title">GRANHAND</div>
                                        <div className="script-sub">마린오키드</div>
                                    </div>
                                </div>
                            </td>
                            <td>1</td>
                            <td>178,000원</td>
                            <td>배송완료</td>
                            <td>
                                <div>
                                    <div className="history-cancel">
                                        <div className="history-cancel-button"
                                        onClick={onCancel}
                                        >취소</div>
                                    </div>    
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default History;