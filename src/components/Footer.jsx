import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Footer = () => {

    const {page, handalSetPage, totalPage} = useContext(AppContext)
    return (
        <footer>
           <div>
                { page > 1 &&
                    <button onClick={ () => (handalSetPage(page - 1))}>
                        Previous
                    </button>
                }
                { page < totalPage && 
                    <button onClick={ () => (handalSetPage(page + 1))}>
                        Next
                    </button>
                }
           </div>
           <div>
             <p>{`Page ${page} of ${totalPage}`}</p>
           </div>
        </footer>
    )
}

export default Footer;