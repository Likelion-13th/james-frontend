import React, {useState} from "react";
import Banner from "./Banner";
import ProductCard from "./ProductCard";
import PayModal from "../../components/PayModal";

const New = () => {

    const products = [
        {
            id: 1,
            name: "퍼퓸",
            brand: "브랜드",
            price: 60000,
            imagePath: "/img/perfume_1.png",
            isNew: true,
        },
        {
            id: 2,
            name: "디퓨저",
            brand: "브랜드",
            price: 50000,
            imagePath: "/img/diffuser_1.png",
            isNew: true,
        },
        {
            id: 3,
            name: "디퓨저",
            brand: "브랜드",
            price: 30000,
            imagePath: "/img/diffuser_5.png",
            isNew: true,
        },
        {
            id: 4,
            name: "퍼퓸",
            brand: "브랜드",
            price: 70000,
            imagePath: "/img/perfume_4.png",
            isNew: true,
        },
        {
            id: 5,
            name: "퍼퓸",
            brand: "브랜드",
            price: 253000,
            imagePath: "/img/perfume_7.png",
            isNew: true,
        },
    ]

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 15;
    
    const totalPages = Math.ceil(products.length / itemsPerPage);
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = products.slice(startIndex, endIndex);
   
    
    const handleCardClick = (product) => {
        setSelectedProduct(product);
        setModalOpen(true);
    }
    
    const handleCloseClick = () => {
        setSelectedProduct(null);
        setModalOpen(false);
    }

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return(
        <div>
            <Banner title="New" imagePath={"/banner_new.png"} />
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
            {isModalOpen && (
                <PayModal product={selectedProduct} onClose={handleCloseClick}/>)}
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
        </div>

    );
};

export default New;