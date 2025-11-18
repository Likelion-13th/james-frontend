import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

import "../../styles/Mypage.css";
import Profile from "./Profile";
import Status from "./Status";
import Address from "./Address";
import History from "./History";

const Mypage = () => {
    const [cookies] = useCookies(["accessToken"]);
    const [profileData, setProfileData] = useState({});
    const [orderStatusData, setOrderStatusData] = useState({});
    const [historyData, setHistoryData] = useState([]);

    useEffect(() => {
        axios.get("/users/profile", {
            headers: {
                accept: "*/*",
                Authorization: `Bearer ${cookies.accessToken}`,
            },
        })
        .then((response) => {
            setProfileData({
                usernickname: response.data.result.usernickname,
                recentTotal: response.data.result.recentTotal,
                maxMileage: response.data.result.maxMileage,
            });
            setOrderStatusData(response.data.result.orderStatusCounts);
        })
        .catch((err) => {
            console.error("API 요청 실패: ", err);
        })
    }, [cookies.accessToken]);

    useEffect(() => {
        axios.get("/orders", {
            headers: {
                accept: "*/*",
                Authorization: `Bearer ${cookies.accessToken}`,
            },
        })
        .then((response) => {
            setHistoryData(response.data.result);
        })
        .catch((err) => {
            console.error("주문 내역 API 요청 실패: ", err);
        })
    }, [cookies.accessToken]);

    const onCancel = async (orderId) => {
        try{
            const response = await axios.put(
                `/orders/${orderId}/cancel`, {
                    "orderId": orderId,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${cookies.accessToken}`,
                    },
                }
            );
            if (response.data.isSuccess) {
                alert("주소가 성공적으로 취소되었습니다.");
            } else {
                alert(`주소 저장에 실패:${response.data.message}`);
            }
        } catch (error) {
            console.error("주문 취소 중 오류 발생: ", error);
        }
    };

    const handleSave = async (zipcode, address, addressDetail) => {
        try {
            const response = await axios.post(
                "/users/address",
                {
                    "zipcode": zipcode,
                    "address": address,
                    "addressDetail": addressDetail,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${cookies.accessToken}`,
                    },
                }
            );
            if (response.data.isSuccess) {
                alert("주소가 성공적으로 저장되었습니다.");
            } else {
                alert(`주소 저장에 실패:${response.data.message}`);
            }
        } catch (error) {
            console.error("주소 저장 중 오류 발생: ", error);
            alert("주소 저장 중 오류가 발생하였습니다.");
        }
    };

    return (
        <div className="page-container">
            <Profile profileData={profileData} />
            <Status orderStatusData={orderStatusData} />
            <Address handleSave={handleSave}/>
            <History historyData={historyData} onCancel={onCancel}/>
        </div>
    );
};

export default Mypage;