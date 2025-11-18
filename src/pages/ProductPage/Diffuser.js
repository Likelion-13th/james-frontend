import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import ProductCard from "./ProductCard";
import PayModal from "../../components/PayModal";
import axios from "axios";
import { useCookies } from "react-cookie";


const Diffuser = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
        
    const totalPages = Math.ceil(products.length / itemsPerPage);
        
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = products.slice(startIndex, endIndex);
    const [cookies] = useCookies(["accessToken"]);

    const handleCardClick = (product) => {
        setSelectedProduct(product);
        if (typeof cookies.accessToken !== "string") {
            alert("로그인이 필요한 서비스입니다.");
            return;
        }
        setModalOpen(true);
    }
        
    const handleCloseModal = () => {
        setSelectedProduct(null);
        setModalOpen(false);
    }

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
         axios.get("/categories/2/items", {
            headers: {
                accept: "*/*",
            },
        }).then((response) => {
            setProducts(response.data.result);
        })
        .catch((err) => {
            console.error("CATEGORY API 요청 실패: ", err);
        });
    }, []);

    return (
        <div>
            <Banner title="Diffuser" imagePath={"/banner_diffuser.jpg"} />
            <div className="product-container">
                <div className="product-grid">
                    {currentProducts.map((product) => (
                        <ProductCard 
                            key={product.id} 
                            product={product}
                            onClick={()=>handleCardClick(product)}    
                        />
                    ))}
                </div>
            </div>
            <div className="paging">
                  {currentPage > 1 && (
                    <button onClick={()=> handlePageChange(currentPage-1)}>
                    Prev
                    </button>
                )}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (pageNumber) => (
                    <button
                        key={pageNumber}
                        onClick={() => handlePageChange(pageNumber)}
                        className={currentPage === pageNumber ? "active" : ""}
                    >
                        {pageNumber}
                    </button>
                    )
                )}
                {currentPage < totalPages && (
                    <button onClick={() => handlePageChange(currentPage+1)}>
                    Next
                    </button>
                )}
            </div>
            {isModalOpen && (
                <PayModal product={selectedProduct} onClose={handleCloseModal}/>
            )}
        </div>
    );
};

export default Diffuser;