import React, { useContext, useEffect, useState } from "react";
import Card from "./Card/Card";
import "./Product.css";
import axios from "axios";
import { FilterContext } from "../useFilterContext";

function ProductView() {
  const [mercedesChecked, setMercedesChecked] = useState(true);
  const [toyotaChecked, setToyotaChecked] = useState(true);
  const [mitsubishiChecked, setMitsubishiChecked] = useState(true);
  const [nissanChecked, setNissanChecked] = useState(true);

  const [webApplication, setWebApplication] = useState(true);
  const [mobileApplication, setMobileApplication] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const { filterData, setFilterData } = useContext(FilterContext);

  useEffect(() => {
    fetchData();
  }, [currentPage, filterData]);

  const fetchData = async () => {


    
    setIsLoading(true);

    const url =
      "https://18ebbuf8l8.execute-api.ap-south-1.amazonaws.com/demo/api/v3/user/marketplace/filter";
    const headers = {
      "Content-Type": "application/json",
      "Access-Token":
        "eyJhbGciOiJIUzUxMiIsImlhdCI6MTYwODEwMDI4MCwiZXhwIjoxNjE1ODc2MjgwfQ.eyJ0eXBlIjozLCJpZCI6MTQ5MzMsImNyZWF0ZWQiOiIyMDIwLTEyLTE2IDA2OjMxOjIwLjczMTk2NiJ9.Ef001xBUX_ZPsgvGWCou9sUa6Q2BV9jvPWZZsnwE8qB3_IDTGaSNV0d0lmcuWab2FwEUQ3GouA9LVdd7ExmkvQ",
    };

    const body = {
      page_num: currentPage,
      filter_id: filterData.filter_id,
      segment_id: filterData.segment_id,
      application_type: filterData.application_type,
      min_price_limit: 0,
      max_price_limit: 29500000,
      min_investment_limit: 0,
      max_investment_limit: 100000000,
      sort_by: filterData.sort_by,
    };

    try {
      const response = await axios.post(url, body, { headers });
      setProducts(response.data.data.products);
      setTotalPages(response.data.data.total_pages);

      
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    setIsLoading(false);
  };

 
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    setSearchQuery(searchTerm);
  };

  const filteredProducts = products.filter((product) =>
    product.product_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  

  const handleSortChange = (filterId) => {
    setFilterData((prevFilterData) => ({
      ...prevFilterData,
      sort_by: filterId,
    }));
  };

  const handleApplicationTypeChange = (type) => {
    if (type === "1") {
      setWebApplication(!webApplication);
      setMobileApplication(true);
      setFilterData((prevFilterData) => ({
        ...prevFilterData,
        application_type: "1",
      }));
    } else if (type === "2") {
      setMobileApplication(!mobileApplication);
      setWebApplication(true);
      setFilterData((prevFilterData) => ({
        ...prevFilterData,
        application_type: "2",
      }));
    }
  };
  return (
    <div className="m-5" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
      <section className="">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search products with Title..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>

              <button
                className="btn btn-outline-secondary mb-3 w-100 d-lg-none"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span>Show filter</span>
              </button>

              <div
                className="collapse card d-lg-block mb-5"
                id="navbarSupportedContent"
              >
                <div className="accordion" id="accordionPanelsStayOpenExample">
                  <div>
                    <h6 id="headingTwo">
                      <span
                        className=" text-dark bg-transparent Develope mt-5 "
                        style={{ marginLeft: "22px" }}
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#panelsStayOpen-collapseTwo"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseTwo"
                      >
                        Develope By
                      </span>
                    </h6>
                    <div
                      id="panelsStayOpen-collapseTwo"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingTwo"
                    >
                      <div className="accordion-body">
                        <div>
                          <div className="form-check checkBoxes mb-3">
                            <input
                              className="form-check-input rounded-circle"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked1"
                              checked={mercedesChecked}
                              onChange={() =>
                                setMercedesChecked(!mercedesChecked)
                              }
                            />
                            <label
                              className="form-check-label"
                              for="flexCheckChecked1"
                            >
                              All
                            </label>
                            <span className="badge badge-secondary float-end">
                              120
                            </span>
                          </div>

                          <div className="form-check checkBoxes mb-3">
                            <input
                              className="form-check-input rounded-circle"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked2"
                              checked={toyotaChecked}
                              onChange={() => setToyotaChecked(!toyotaChecked)}
                            />
                            <label
                              className="form-check-label"
                              for="flexCheckChecked2"
                            >
                              Lorem Ipsum
                            </label>
                            <span className="badge badge-secondary float-end">
                              15
                            </span>
                          </div>

                          <div className="form-check checkBoxes mb-3">
                            <input
                              className="form-check-input rounded-circle"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked3"
                              checked={mitsubishiChecked}
                              onChange={() =>
                                setMitsubishiChecked(!mitsubishiChecked)
                              }
                            />
                            <label
                              className="form-check-label"
                              for="flexCheckChecked3"
                            >
                              Lorem Ipsum
                            </label>
                            <span className="badge badge-secondary float-end">
                              35
                            </span>
                          </div>

                          <div className="form-check checkBoxes mb-3">
                            <input
                              className="form-check-input rounded-circle"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked4"
                              checked={nissanChecked}
                              onChange={() => setNissanChecked(!nissanChecked)}
                            />
                            <label
                              className="form-check-label"
                              for="flexCheckChecked4"
                            >
                              Lorem Ipsum
                            </label>
                            <span className="badge badge-secondary float-end">
                              89
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h6 id="headingThree">
                      <span
                        className="text-dark bg-transparent mt-5 "
                        style={{ marginLeft: "-225px" }}
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#panelsStayOpen-collapseFive"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseFive"
                      >
                        Ratings By
                      </span>
                    </h6>
                    <div
                      id="panelsStayOpen-collapseFive"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingThree"
                    >
                      <div className="accordion-body">
                        <div className="small-ratings-container mb-5 ">
                          <div className="small-ratings d-flex align-items-center gap-2 mb-3">
                            <input type="radio" name="rating" value="all" />
                            <span>All</span>
                          </div>
                          <div className="small-ratings d-flex align-items-center gap-2 mb-3 ">
                            <input type="radio" name="rating" value="3" />
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <span className="aboveClass">& above</span>
                          </div>

                          <div className="small-ratings d-flex align-items-center gap-2 mb-3">
                            <input type="radio" name="rating" value="3" />
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <span className="aboveClass">& above</span>
                          </div>

                          <div className="small-ratings d-flex align-items-center gap-2 mb-3">
                            <input type="radio" name="rating" value="3" />
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <span className="aboveClass">& above</span>
                          </div>

                          <div className="small-ratings d-flex align-items-center gap-2 mb-3">
                            <input type="radio" name="rating" value="3" />
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <span className="aboveClass">& above</span>
                          </div>
                        </div>

                        <div>
                          <h6 id="headingTwoSeparate" className="mb-3">
                            <span
                              className="text-dark bg-transparent Develope mt-5"
                              type="button"
                              data-mdb-toggle="collapse"
                              data-mdb-target="#panelsStayOpen-collapseTwoSeparate"
                              aria-expanded="true"
                              aria-controls="panelsStayOpen-collapseTwoSeparate"
                            >
                              Application type
                            </span>
                          </h6>
                          <div
                            id="panelsStayOpen-collapseTwoSeparate"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingTwoSeparate"
                          >
                            <div className="accordion-body px-0">
                              <div>
                                <div className="form-check checkBoxes mb-3">
                                  <input
                                    className="form-check-input rounded-circle"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckCheckedSeparate1"
                                    checked={mercedesChecked}
                                    onChange={() =>
                                      setMercedesChecked(!mercedesChecked)
                                    }
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckCheckedSeparate1"
                                  >
                                    All
                                  </label>
                                  <span className="badge badge-secondary float-end">
                                    120
                                  </span>
                                </div>

                                <div className="form-check checkBoxes mb-3">
                                  <input
                                    className="form-check-input rounded-circle"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckCheckedSeparate2"
                                    checked={webApplication}
                                    onChange={() =>
                                      handleApplicationTypeChange("1")
                                    }
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckCheckedSeparate2"
                                  >
                                    Web based applications
                                  </label>
                                  <span className="badge badge-secondary float-end">
                                    15
                                  </span>
                                </div>
                                <div className="form-check checkBoxes">
                                  <input
                                    className="form-check-input rounded-circle"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckCheckedSeparate3"
                                    checked={mobileApplication}
                                    onChange={() =>
                                      handleApplicationTypeChange("2")
                                    }
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckCheckedSeparate3"
                                  >
                                    Mobile applications
                                  </label>
                                  <span className="badge badge-secondary float-end">
                                    35
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <header className="d-sm-flex align-items-center mb-4 pb-3">
                <div className="ms-auto custom-dropdown d-flex align-items-center">
                  <label htmlFor="sort-by" className="me-2 sortClass">
                    <strong>Sort by:</strong>
                  </label>
                  <div className="custom-select-wrapper position-relative">
                    <select
                      id="sort-by"
                      className="form-select d-inline-block w-auto border pt-1 custom-select"
                      onChange={(e) => handleSortChange(e.target.value)}
                    >
                      <option value="0">Select</option>
                      <option value="1">Newly added</option>
                      <option value="2">Top Rated</option>
                      <option value="3">Top Performing</option>
                      <option value="4">Name</option>
                      <option value="5">Price Low to High</option>
                      <option value="6">Price High to Low</option>
                    </select>
                    <span className="arrow-down">&#9660;</span>
                  </div>
                </div>
              </header>

              <div className="d-flex justify-content-center">
                {isLoading ? (
                  <p>Loading...</p>
                ) : (
                  <div className="row">
                    {filteredProducts.map((product) => (
                      <Card key={product.product_name} product={product} />
                    ))}
                  </div>
                )}
              </div>

              <nav
                aria-label="Page navigation example"
                className="d-flex justify-content-center mt-3"
              >
                <ul className="pagination">
                  <li
                    className={`page-item ${
                      currentPage === 1 ? "disabled" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => handlePageClick(currentPage - 1)}
                      aria-label="Previous"
                    >
                      <span aria-hidden="true">&laquo;</span>
                    </button>
                  </li>
                  {Array.from(
                    { length: totalPages },
                    (_, index) => index + 1
                  ).map((page) => (
                    <li
                      key={page}
                      className={`page-item ${
                        currentPage === page ? "active" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => handlePageClick(page)}
                      >
                        {page}
                      </button>
                    </li>
                  ))}
                  <li
                    className={`page-item ${
                      currentPage === totalPages ? "disabled" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => handlePageClick(currentPage + 1)}
                      aria-label="Next"
                    >
                      <span aria-hidden="true">&raquo;</span>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductView;
