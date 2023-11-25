import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { Button } from "react-bootstrap";

export default function App() {
  return (
    <MDBFooter className="text-center" color="white" bgColor="black">
      <MDBContainer className="p-4">
        <section className="mt-4  mb-4 d-flex justify-content-center">
          <a href="https://www.facebook.com" className="mx-2">
            <FacebookTwoToneIcon />
          </a>
          <a href="https://www.twitter.com" className="mx-2">
            <TwitterIcon />
          </a>
          <a href="https://www.google.com" className="mx-2">
            <GoogleIcon />
          </a>
          <a href="https://www.instagram.com" className="mx-2">
            <InstagramIcon />
          </a>
          <a href="https://www.linkedin.com" className="mx-2">
            <LinkedInIcon />
          </a>
        </section>

        <section className="">
          <form action="">
            <MDBRow className="d-flex justify-content-center">
              <MDBCol size="auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md="4" start>
                <MDBInput
                  contrast
                  type="email"
                  label="Email address"
                  className="mb-4"
                />
              </MDBCol>

              <MDBCol size="auto">
                <Button variant="outline-info" className="me-2">
                  Subscribe
                </Button>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className="mb-4">
          <p>
            Thank you for visiting our review page. We value your time and trust
            in our recommendations. Our team of experts strives to provide
            insightful and unbiased reviews to assist you in making informed
            decisions. Your feedback is essential in helping us improve and
            serve you better. If you have any comments, suggestions, or
            questions, please don't hesitate to reach out. We appreciate your
            continued support, and we hope our reviews have been valuable to
            you. Happy exploring!
          </p>
        </section>
      </MDBContainer>

      <div className="text-center p-3" style={{ backgroundColor: "black" }}>
        © 2020 Copyright{" "}
        <a className="text-white" href="/" style={{ textDecoration: "none" }}>
          RR CRITICS, Inc
        </a>
      </div>
    </MDBFooter>
  );
}
