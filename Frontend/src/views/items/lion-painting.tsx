import "./lion-painting.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { CgProfile } from "react-icons/cg";
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";
import { FaShieldAlt } from "react-icons/fa";
import { VscVerified } from "react-icons/vsc";
import { MdOutlineStarOutline } from "react-icons/md";
import { GoShare } from "react-icons/go";
import Carousel from "@/lib/carousel";

const slides = ["lion-painting.png", "lion-painting2.jpg"];

function LionPainting() {
  const Divider = () => {
    return <hr style={{ borderTop: "1px solid lightgrey" }}></hr>;
  };

  return (
    <div className="product-page">
      <div className="product-container">
        <div className="product-description-photo">
          <div className="product-photo-container">
            {/*<img src="lion-painting.png" />*/}
            <div className="relative">
              <div className="max-w-lg">
                <Carousel slides={slides} />
              </div>
            </div>
          </div>
          <div className="product-description-container">
            <h2 className="product-description-title">Description</h2>
            <p className="product-description">
              This beautiful watercolor painting of a lion is a great addition
              to any room. The painting is framed in a wooden frame and is
              signed by the artist. The painting is in great condition and is
              ready to be hung on the wall. The painting is 200x120 cm.
            </p>
            <Divider />
            <div className="small-info-container">
              <p className="product-item-no">Item no. 587,231</p>
              <p className="product-views">Views 26</p>
              <p className="product-published">Published 14 Sep 20.42</p>
            </div>
          </div>
        </div>

        <div className="product-info">
          <div className="end-date-share-favorite">
            <p className="end-date">Sun 22 Sep 2024 12:54</p>
            <div className="share-fav-container">
              <button className="share-button">
                <GoShare />
              </button>
              <button className="favorite-button">
                <MdFavoriteBorder />
              </button>
            </div>
          </div>
          <h1 className="product-title">Lion Magnifiqué</h1>
          <p className="product-subtitle">Water color painting in wood frame</p>
          <div className="product-price-status-bids-timer-tag-container">
            <div className="price-status-bids">
              <p className="price-status">Price |</p>
              <p className="price-bids"> 3 bets </p>
            </div>
            <p className="end-timer-tag"> Ends in</p>
          </div>
          <div className="price-end-timer-container">
            <p className="product-price">$254</p>
            <p className="end-timer">3 days 22 hours</p>
          </div>
          <p className="buyer-protection">
            $264 including buyer protection
            <FaShieldAlt className="shield-logo" />
          </p>
          <button className="bid-button">Place a bid</button>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Shipping</AccordionTrigger>
              <AccordionContent>
                Shipping price within Denmark DKK 36 DHL
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Local Pickup</AccordionTrigger>
              <AccordionContent>Can be picked up in</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Payment</AccordionTrigger>
              <AccordionContent>
                All payments are reviewed by Tradera for your security.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="seller-info-container">
            <div className="seller-name-pic">
              <p className="seller-name">Marius Picasso</p>
              <img src="Marius.jpg" className="seller-profile-pic" />
            </div>
            <p className="seller-address">Rødovre, Denmark</p>
            <div className="seller-verifications">
              <p className="seller-verifications-logo"></p>
              <VscVerified />
              <p className="seller-verifications-text">Verified</p>
            </div>
            <div className="seller-reviews">
              <MdOutlineStarOutline />
              <p className="seller-reviews-text">44 reviews</p>
            </div>
            <div className="seller-profile-button-container">
              <button className="seller-contact-button">Contact</button>
              <button className="seller-reviews-button">Reviews</button>
              <button className="seller-follow-button">Follow</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LionPainting;
