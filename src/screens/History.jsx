import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Wrapper from "../assets/Wrapper.png";
import Header from "../components/Header";
import HistoryCard from "../components/HistoryCard";
import { UserContext } from "../Contexts/UserContext";

export default function History() {
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [showTabs, SetShowTabs] = useState(1);
  const [reports, setReports] = useState([]);
  const fetchReports = async () => {
    await axios
      .get(`${import.meta.env.VITE_REACT_APP_API_URL}/report/get_all`)
      .then((res) => {
        console.log("response", res.data);
        setReports(
          res.data.filter((report) => {
            return report.user === user._id;
          })
        );
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchReports();

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 300);
  }, []);
  console.log("reports", reports);

  const pendingReports = reports.filter((report) => {
    return (
      report.status.map((item) => {
        return item.value;
      }) == "pending"
    );
  });
  const solvedReports = reports.filter((report) => {
    return (
      report.status.map((item) => {
        return item.value;
      }) != "pending"
    );
  });
  console.log("solvedReports", solvedReports);
  function toggeleTab(i) {
    SetShowTabs(i);
  }
  return (
    <div className="user__landing__container__main">
      <div className="user__landing__container__one">
        <div
          className="user__landing__container__one__img"
          id="history__container__one__img"
        >
          <img src={Wrapper} alt="Wrapper" />
        </div>
        <div className="user__landing__header__wrapper">
          <Header />
        </div>
        <div
          className="user__landing__container__one__wrapper"
          id="history__container__one__wrapper"
        >
          <div className="history__container__one__heading">
            <div className="header__content__text">History</div>
          </div>
          <div className="history__contaier__one__tabs__container">
            <div
              onClick={() => toggeleTab(1)}
              className={
                showTabs == 1
                  ? "history__contaier__one__tabs__container__tabs history__contaier__one__tabs__container__tabs__active"
                  : "history__contaier__one__tabs__container__tabs"
              }
            >
              All Reports
            </div>
            <div
              onClick={() => toggeleTab(2)}
              className={
                showTabs == 2
                  ? "history__contaier__one__tabs__container__tabs history__contaier__one__tabs__container__tabs__active"
                  : "history__contaier__one__tabs__container__tabs"
              }
            >
              Solved
            </div>
            <div
              onClick={() => toggeleTab(3)}
              className={
                showTabs == 3
                  ? "history__contaier__one__tabs__container__tabs history__contaier__one__tabs__container__tabs__active"
                  : "history__contaier__one__tabs__container__tabs"
              }
            >
              Pending
            </div>
          </div>
        </div>
      </div>
      <div
        className="user__landing__container__two"
        id="history__contianer__two"
      >
        <div className="user__landing__container__two__content">
          <div className="history__contaier__one__tabs__content__container">
            <div
              className={
                showTabs == 1
                  ? "history__contaier__one__tabs__content__container__content__active history__contaier__one__tabs__content__container__content"
                  : "history__contaier__one__tabs__content__container__content"
              }
            >
              <div className="history__contaier__one__tabs__content__container__content__cards">
                {isLoading ? (
                  <>
                    <h2> Loading...</h2>
                  </>
                ) : reports.length == 0 ? (
                  <>
                    <h2> No Data</h2>
                  </>
                ) : (
                  reports.map((report) => {
                    return (
                      <HistoryCard
                        key={report._id}
                        type={report.crimeType.map((item) => {
                          return item.value;
                        })}
                        date={report.createdAt.split("T")[0]}
                        subject={report.description.substring(0, 60) + "..."}
                      />
                    );
                  })
                )}
              </div>
            </div>
            <div
              className={
                showTabs == 2
                  ? "history__contaier__one__tabs__content__container__content__active history__contaier__one__tabs__content__container__content"
                  : "history__contaier__one__tabs__content__container__content"
              }
            >
              <div className="history__contaier__one__tabs__content__container__content__cards">
                {isLoading ? (
                  <>
                    <h2> Loading...</h2>
                  </>
                ) : solvedReports.length == 0 ? (
                  <>
                    <h2> No Data</h2>
                  </>
                ) : (
                  solvedReports.map((report) => {
                    return (
                      <HistoryCard
                        key={report._id}
                        type={report.crimeType.map((item) => {
                          return item.value;
                        })}
                        date={report.createdAt.split("T")[0]}
                        subject={report.description.substring(0, 60) + "..."}
                      />
                    );
                  })
                )}
              </div>
            </div>
            <div
              className={
                showTabs == 3
                  ? "history__contaier__one__tabs__content__container__content__active history__contaier__one__tabs__content__container__content"
                  : "history__contaier__one__tabs__content__container__content"
              }
            >
              <div className="history__contaier__one__tabs__content__container__content__cards">
                {isLoading ? (
                  <>
                    <h2> Loading...</h2>
                  </>
                ) : pendingReports.length == 0 ? (
                  <>
                    <h2> No Data</h2>
                  </>
                ) : (
                  pendingReports.map((report) => {
                    return (
                      <HistoryCard
                        key={report._id}
                        type={report.crimeType.map((item) => {
                          return item.value;
                        })}
                        date={report.createdAt.split("T")[0]}
                        subject={report.description.substring(0, 60) + "..."}
                      />
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
