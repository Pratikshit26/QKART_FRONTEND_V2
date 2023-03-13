
import { Box } from "@mui/system";
import React, { useState } from "react";
import "./Footer.css";
import Dialog from "@mui/material/Dialog";
// import "./SizeChartShoe.css";

const Footer = () => {
  const [open, setOpen] = useState(false);

  const sizeChart = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box className="footer">
        <Box>
          <img src="logo_dark.svg" alt="QKart-icon"></img>
        </Box>
        <p className="footer-text">
          QKart is your one stop solution to the buy the latest trending items
          with India 's Fastest Delivery to your doorstep
        </p>
        <Box className="footer-links">
          <p className="footer-text">
            <a target="_blank" href="privacy-policy">
              Privacy policy
            </a>
          </p>
          <p className="footer-text">
            <a target="_blank" href="aboutus">
              About us{" "}
            </a>
          </p>
          <p onClick={sizeChart} className="footer-text">
            Contact us
          </p>
          <p className="footer-text">
            <a target="_blank" href="terms-of-service">
              Terms of Service
            </a>
          </p>
        </Box>
      </Box>
      <Dialog open={open} onClose={handleClose} className="dialog">
        <section className="login-block">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <form className="md-float-material form-material">
                  <div className="auth-box card">
                    <div className="card-block">
                      <div className="row">
                        <div className="col-md-12">
                          <h3 className="text-center">
                            <i className="fa fa-phone-square text-primary f-56"></i>
                          </h3>
                          <div class="contactClose" onClick={handleClose}>
                            X
                          </div>
                          <h3 className="text-center contact-us">Contact Us</h3>
                          <h6 className="text-center respond">
                            (we generally respond in 24 hours)
                          </h6>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group form-primary">
                            <input
                              type="text"
                              name="email"
                              className="form-control text-left"
                              placeholder="Name"
                              required=""
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-primary">
                            <input
                              type="text"
                              name="email"
                              className="form-control text-left"
                              placeholder="Email"
                              required=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group form-primary">
                        <input
                          type="text"
                          name="email"
                          className="form-control text-left"
                          placeholder="Message"
                          required=""
                        />
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <button
                            onClick={handleClose}
                            type="button"
                            className="btn btn-primary btn-md btn-block waves-effect text-center m-b-20"
                          >
                            <i className="fa fa-phone"></i> Contact Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Dialog>
    </>
  );
};

export default Footer;
