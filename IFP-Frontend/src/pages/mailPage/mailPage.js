import React from "react";
import "./MailPage.css";
import galaxyWatchImg from "./galaxy-watch5-design.jpg";
import tablet from "./R.png";
// import samsungPhone from "./samsung.jpg";
import buds from "./buds.png";
import tag from "./tag.png";
import chromebook2 from "./chromebook2.png";
import winnerImg from "./OIP-removebg-preview.png";
import TextField from "@mui/material/TextField";
import Typography from '@mui/material/Typography';
import twitter from "./twitter.png";
import facebook from "./facebook.png";
import instagram from "./instagram.png";
import { RailwayAlert } from "@mui/icons-material";



const MailPage = () => {
  return (
    <div class="main-container"
      style={{
        backgroundImage: `url("https://st2.depositphotos.com/3591429/8816/i/950/depositphotos_88163656-stock-photo-cheerful-students-jumping-in-the.jpg"), url("https://st2.depositphotos.com/3591429/8816/i/950/depositphotos_88163656-stock-photo-cheerful-students-jumping-in-the.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "right top, left bottom",
        backgroundRepeat: "no-repeat, repeat",
        height: "110vh",
        width: "100vw",
        // border: "5px solid #263238",
        borderRadius: "10px",
      }}
    >

      <div class="mail-container1">
        <div
          class="mail-header"
          style={{
            width: "100%",
            height: "13rem",
            backgroundColor: "#263238",
            // borderRadius: "2rem",
            borderRadius: "0 0 30px 30px",
            border: "0.5rem solid #8bc34a",
            display: "flex",
            justifyContent: "space-evenly", 
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <div class="mail-header-left">
            <img
              src="https://ia801503.us.archive.org/15/items/winner_20221112/winner-removebg-preview.png"
              alt="Avatar"
              class="avatar"
            />
          </div>
          <div class="mail-header-center">
            <img
              src="https://archive.org/download/goethe-institut-360-278-removebg-preview/goethe-institut-360-278-removebg-preview.png"
              alt="Goethe"
              class="goethe"
            />
          </div>
          <div class="mail-header-right">
            {/* <Typography
              variant="h6"
              component="div"
              gutterBottom
              style={{ color: "white" }}
            >
              Sponsor by
            </Typography> */}
            <img
              src="https://ia801503.us.archive.org/8/items/samsung-logo_202211/Samsung-Logo.png"
              alt="Samsung"
            />
          </div>
        </div>
        <div class="mail-body"
          style={{
            // marginLeft: "6rem",
            // marginRight: "6rem",
          }}
        >
          <div class="mail-body-header-heading">
            {/* <h1
              style={{
                color: "#8bc34a",
                transform: "translateY(1rem) translateX(1rem) rotate(10deg) scale(1.5)",
                textShadow: "0px 0px 10px #8bc34a",
                animation: "shake 0.82s cubic-bezier(.36,.07,.19,.97) both",
                transform: "translate3d(0, 0, 0)",
                backfaceVisibility: "hidden",
                perspective: "1000px",
                "animation-delay": "0.5s",
                "animation-duration": "1.5s",
                "animation-iteration-count": "infinite",
                "animation-timing-function": "ease-in-out",
                "@keyframes shake": {
                  "10%, 90%": {
                    transform: "translate3d(-1px, 0, 0)",
                  },
                  "20%, 80%": {
                    transform: "translate3d(2px, 0, 0)",
                  },
                  "30%, 50%, 70%": {
                    transform: "translate3d(-4px, 0, 0)",
                  },
                  "40%, 60%": {
                    transform: "translate3d(4px, 0, 0)",
                  },
                },
                fontSize: "3rem",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Congratulations!
            </h1> */}
            <Typography 
        variant="h1"
        // className={classes.h1} 
        component="div" 
        utterBottom
        sx={{textAlign:"center", fontWeight:"bold", color:"#8bc34a", marginTop:"60px", fontFamily:"sans-serif", transform:"translateY(350px) translateX(50px) rotate(0deg) scale(2.5)", textShadow:"0px 0px 10px #8bc34a", animation:"shake 0.82s cubic-bezier(.36,.07,.19,.97) both", transform:"translate3d(0, 0, 0)", backfaceVisibility:"hidden", perspective:"1000px", "@keyframes shake": {
          "10%, 90%": {
            transform: "translate3d(-1px, 0, 0)",
          },

          "20%, 80%": {
            transform: "translate3d(2px, 0, 0)",
          },

          "30%, 50%, 70%": {
            transform: "translate3d(-4px, 0, 0)",
          },

          "40%, 60%": {
            transform: "translate3d(4px, 0, 0)",
          },
        },
        fontSize:"3rem",
        marginTop:"2px",

        }}>
        Congratulations ! <span role="img" aria-label="tada">🎉</span>
        </Typography>
          </div>
          <div class="mail-body-header2">
              <div class="mail-body-header">
            {/* <h1
              style={{
                color: "#8bc34a",
                fontSize: "3rem",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
               Here are the lucky winners of the Samsung Contest 2022 in the month of september Organised by Goethe Institut Max Mueller Bhavan
            </h1> */}
          </div>
          </div>
          <div
            class="table-winners-container"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundImage:
                "url(https://www.solidbackgrounds.com/images/2880x1800/2880x1800-yellow-green-solid-color-background.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "60px",
              marginTop: "20rem",
              border: "0.5rem solid #8bc34a",
            }}
          >
            <table
              class="table-winners"
              style={{
                width: "100%",
                // border: "1px solid black",
                borderCollapse: "collapse",
                textAlign: "center",
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                borderRadius: "60px",
                padding: "10px",
                margin: "1px",
              }}
            >

              <thead>
                <tr
                  style={{
                    textAlign: "center",
                    fontWeight: 300,
                    fontSize: "1.2rem",
                    color: "#b71c1c",
                    borderBottom: "3px solid #263238",
                    height: "50px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    // textShadow: "1px 1px 1px #000000",
                  }}
                >
                  <th>Prize</th>
                  <th>Winner</th>
                  <th>Winning Price</th>
                </tr>
              </thead>
              <tbody
                style={{
                  textAlign: "center",
                  fontWeight: 200,
                  fontSize: "1.2rem",
                  color: "black",
                  // borderBottom: "3px solid black",
                  height: "50px",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  // textShadow: "1px 1px 1px #000000",
                }}
              >
                <tr
                  style={{
                    textAlign: "center",
                    fontWeight: 200,
                    fontSize: "1.2rem",
                    color: "black",
                    borderBottom: "0.5px solid #37474f",
                    height: "50px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    color: "#f5ebe0",
                    // textShadow: "1px 1px 1px #000000",
                  }}
                >
                  <td>1st</td>
                  <td>Pallavi Sati</td>
                  <td>
                    <h6
                      style={{
                        textTransform: "uppercase",
                        textShadow: "1px 1px 1px #000000",
                        letterSpacing: "1px",
                        fontWeight: 1000,
                        fontSize: "1.2rem",
                        color: "#1a237e",
                        // borderBottom: "3px solid black",
                        // height: "50px",
                      }}
                    >
                      Chromebook 2
                    </h6>
                    {/* <img
                      src={samsungPhone}
                      alt="Samsung Galaxy s22"
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "5%",
                        marginBottom: "1rem",
                        boxShadow: "0 0 60px 0 rgba(0, 0, 0, 1.5)",

                      }}
                    /> */}
                    <img
                      src={chromebook2}
                      alt="Galaxy Watch 5"
                      style={{
                        width: "150px",
                        height: "110px",
                        borderRadius: "30px",
                        // border: "2px solid black",
                        // padding: "10px",
                        // margin: "10px",
                        // backgroundColor: "black",
                        boxShadow: "0 0 60px 0 rgba(0, 0, 0, 1.5)",
                        marginBottom: "1rem",
                        backgroundColor: "#353535",

                      }}
                    />
                  </td>
                </tr>
                <tr
                  style={{
                    textAlign: "center",
                    fontWeight: 200,
                    fontSize: "1.2rem",
                    color: "black",
                    borderBottom: "0.5px solid #37474f",
                    height: "50px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    // textShadow: "1px 1px 1px #000000",
                    color: "#f5ebe0",
                  }}
                >
                  <td>2nd</td>
                  <td>Sachin Chaunhan</td>

                  <td>
                    <h6
                      style={{
                        textTransform: "uppercase",
                        textShadow: "1px 1px 1px #000000",
                        letterSpacing: "1px",
                        fontWeight: 1000,
                        fontSize: "1.2rem",
                        color: "#1a237e",
                        // borderBottom: "3px solid black",
                        // height: "50px",
                      }}
                    >
                      Galaxy Tablet S7FE
                    </h6>
                    <img
                      src={tablet}
                      alt="Galaxy Watch 5"
                      style={{
                        width: "120px",
                        height: "110px",
                        borderRadius: "10px",
                        // border: "2px solid black",
                        // padding: "10px",
                        // margin: "10px",
                        // backgroundColor: "black",
                        boxShadow: "0 0 60px 0 rgba(0, 0, 0, 1.5)",
                        marginBottom: "1rem",
                        backgroundColor: "#e5e5e5",

                      }}
                    />
                  </td>
                </tr>
                <tr
                  style={{
                    textAlign: "center",
                    fontWeight: 200,
                    fontSize: "1.2rem",
                    color: "black",
                    height: "50px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    // textShadow: "1px 1px 1px #000000",
                    color: "#f5ebe0",
                    borderBottom: "0.5px solid #37474f",

                  }}
                >
                  <td>3rd</td>
                  <td>Anushi Ray</td>
                  <td>
                    <h6
                      style={{
                        textTransform: "uppercase",
                        textShadow: "1px 1px 1px #000000",
                        letterSpacing: "1px",
                        fontWeight: 1000,
                        fontSize: "1.2rem",
                        color: "#1a237e",
                        // borderBottom: "3px solid black",
                        // height: "50px",
                      }}
                    >
                      Galaxy Watch 5
                    </h6>
                    <img
                      src={galaxyWatchImg}
                      alt="Galaxy Watch 5"
                      style={{
                        width: "120px",
                        height: "110px",
                        boxShadow: "0 0 60px 0 rgba(0, 0, 0, 1.5)",
                        borderRadius: "50px",
                        marginBottom: "1rem",

                      }}
                    />
                  </td>
                </tr>
                <tr
                  style={{
                    textAlign: "center",
                    fontWeight: 200,
                    fontSize: "1.2rem",
                    color: "black",
                    borderBottom: "0.5px solid #37474f",
                    height: "50px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    // textShadow: "1px 1px 1px #000000",
                    color: "#f5ebe0",
                  }}
                >
                  <td>4th</td>
                  <td>Shivam Kumar</td>
                  <td>
                    <h6
                      style={{
                        textTransform: "uppercase",
                        textShadow: "1px 1px 1px #000000",
                        letterSpacing: "1px",
                        fontWeight: 1000,
                        fontSize: "1.2rem",
                        color: "#1a237e",
                        // borderBottom: "3px solid black",
                        // height: "50px",
                      }}
                    >
                      Galaxy Buds 2
                    </h6>
                    <img
                      src={buds}
                      alt="Galaxy Buds 2"
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "5px",
                        // border: "2px solid black",
                        // padding: "10px",
                        // margin: "10px",
                        // backgroundColor: "black",
                        boxShadow: "0 0 60px 0 rgba(0, 0, 0, 1.5)",
                        marginBottom: "1rem",
                        backgroundColor: "#cad2c5",

                      }}
                    />
                  </td>
                </tr>
                <tr
                  style={{
                    textAlign: "center",
                    fontWeight: 200,
                    fontSize: "1.2rem",
                    color: "black",
                    // borderBottom: "0.5px solid #37474f",
                    height: "50px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    // textShadow: "1px 1px 1px #000000",
                    color: "#f5ebe0",
                  }}
                >
                  <td>5th</td>
                  <td>Ritu Mishra</td>
                  <td>
                    <h6
                      style={{
                        textTransform: "uppercase",
                        textShadow: "1px 1px 1px #000000",
                        letterSpacing: "1px",
                        fontWeight: 1000,
                        fontSize: "1.2rem",
                        color: "#1a237e",
                        // borderBottom: "3px solid black",
                        // height: "50px",
                      }}
                    >
                      Galaxy Tag
                    </h6>
                    <img
                      src={tag}
                      alt="Galaxy Buds 2"
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "5px",
                        // border: "2px solid black",
                        // padding: "10px",
                        // margin: "10px",
                        // backgroundColor: "black",
                        boxShadow: "0 0 60px 0 rgba(0, 0, 0, 1.5)",
                        marginBottom: "1rem",
                        backgroundColor: "#354f52",

                      }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: "row",
                // marginTop: "2rem",
              }}
              >
                <img src={winnerImg} alt="winner image" style={{
                borderRadius: "50%",
                width: "8rem",
                height: "8rem",
                }}/>
            <Typography
              variant="h5"
              style={{
                color: "#90323d",
                textShadow: "1px 1px 1px #000000",
                letterSpacing: "1px",
                fontWeight: 1000,
                fontSize: "1.0rem",
                textTransform: "uppercase",
                marginTop: "2rem",
                marginBottom: "2rem",
                marginLeft: "1rem",
              }}
            >
              <span style={{ color: "#b71c1c" }}></span> 
              Heartily Congratulations to all the students who participated in the quiz.
              <br />
              The Names mentioned above are the winners for the quiz <span style={{ color: "#f4511e" , fontWeight: 1000}}>
              "Mordern Technology"</span> held in the month of September 2022,
              through our stories on our Official Goethe Institut Instagram page
              <br />
              <div style={{ marginTop: "1rem"}}>
              the quiz is sponsored by <span style={{ color: "#283593" , fontWeight: 1000}}>
              Samsung India.</span>
              </div>
              <br />
              The winners will be contacted by our team and the prizes will be delivered to them with in 2 weeks.
              <br />
              <div style={{ marginTop: "1rem",border: "1px solid #37474f", padding: "1rem", borderRadius: "10px", boxShadow: "0 0 6px 0 rgba(0, 0, 0, 1.5)", marginLef: "1rem", marginRight: "1rem"}}>
              Please e-mail us your information (including your name, phone number, address, pin code..etc)
              stay tuned for more such exciting quizzes.
              </div>

            </Typography>
            
                </div>
          </div>
        </div>
        <div className="footer" style={{ backgroundColor: "#263238", height: "250px", width: "100%", marginTop: "1rem",
        borderRadius: "30px 30px 0 0",
        border: "0.5rem solid #8bc34a",
      }}>
      
          <div className="footer__content" style={{ display: "flex", justifyContent: "space-around", alignItems: "center", height: "100%",marginTop:"0.5rem" }}>
            <div className="footer__content__left" style={{ display: "flex", justifyContent: "space-around", alignItems: "center", height: "100%" }}>
              <div className="footer__content__left__logo" style={{ 
                display: "flex", 
                flexDirection: "column",
                justifyContent: "space-around", 
                alignItems: "center", 
                height: "100%",
                color: "#dad7cd",
                marginRight: "6rem",
                margin: "1rem",
                }}>
                {/* <img src={logo} alt /> */}
                <h3>Goethe Institut Max Mueller Bhavan</h3>
                <p>
                  Goethe-Institut Max Mueller Bhavan is a cultural institute
                  dedicated to promoting the study of German language and
                  culture. It is a non-profit organization and is a part of the
                  Goethe-Institut network.
                </p>
                <div className="footer__content__left__logo__social" style={{ display: "flex", justifyContent: "space-around", alignItems: "center",
               }}>
                  {/* <a href="https://www.facebook.com/GoetheInstitutMumbai/"> */}
                    <img style={{ width: "30px", height: "30px" }} src={facebook} alt="facebook" />
                  {/* </a> */}
                  {/* <a href="https://www.instagram.com/goetheinstitut_mumbai/"> */}
                    <img  style={{ width: "30px", height: "30px" }} src={instagram } alt="instagram" />
                  {/* </a> */}
                  {/* <a href="https://twitter.com/GoetheMumbai"> */}
                    <img  style={{ width: "30px", height: "30px" }} src={twitter} alt="twitter" />
                  {/* </a> */}
                  </div>
              </div>
            </div>
            <div className="footer__content__right" style={{ display: "flex", justifyContent: "space-around", alignItems: "center", height: "100%", color:"#dad7cd" }}>
              <div className="footer__content__right__links" style={{ display: "flex", justifyContent: "space-around", alignItems: "center", height: "100%", flexDirection: "column" }}>
                <h3>Quick Links</h3>
                <ul>
                  <li>
                    <a style={{ color: "#f4a261" }} href="https://www.goethe.de/ins/in/enindex.htm">Goethe Institut</a>
                  </li>
                  <li>
                    <a style={{ color: "#f4a261" }} href="https://www.goethe.de/ins/in/enindex.htm">Goethe Institut Max Mueller Bhavan</a>
                  </li>
                  <li>
                    <a  style={{ color: "#f4a261" }} href="https://www.goethe.de/ins/in/enindex.htm">Goethe Institut Max Mueller Bhavan Delhi</a>
                  </li>
                 </ul>
              </div>
              <div className="footer__content__right__contact" style={{ display: "flex", justifyContent: "space-around", alignItems: "center", fontSize: "0.7rem", height: "100%", flexDirection: "column",
            }}>
                <h3 style={{ fontSize: "1.2rem",
                marginTop: "1rem",
              }}>Contact Us</h3>
                <ul>
                  <li>
                    {/* <h4 style={{ fontSize: "0.9rem" }}>Address</h4> */}
                    <p>
                      Goethe-Institut New Delhi
                      <br />
                      3 Max Mueller Bhavan, K.G.Marg 
                      New Delhi, Delhi 110001
                      <br />
                      INDIEN
                      <br />
                      T 0112357110

                    </p>
                    <p>
                      <a style={{ color: "#f4a261" }} href="mailto:" >
                      bhavana.goethe@gmail.com
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }

export default MailPage;




// MAil Content for the winner of the quiz "Mordern Technology" held in the month of September 2022, through our stories on our Official Goethe Institut Instagram page

// Dear Ms. Anushiya,

// Thanks for entering and taking part in our contest. We are happy to inform you that you have won the quiz "Mordern Technology" held in the month of September 2022, through our stories on our Official Goethe Institut Instagram page
// Please find the details of the prize below in attachment.

// To claim your prize, please respond to this email within 72 hours. In your reply, please include your full name, address, phone number, and email address. If we do not hear from you within 72 hours, we will have to select another winner.