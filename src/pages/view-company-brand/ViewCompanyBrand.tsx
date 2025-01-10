const data = [
  {
    companyName: "TechCorp",
    logoLink: "https://picsum.photos/seed/1/200/200",
  },
  {
    companyName: "GreenSolutions",
    logoLink: "https://picsum.photos/seed/2/200/200",
  },
  {
    companyName: "EduSmart",
    logoLink: "https://picsum.photos/seed/3/200/200",
  },
  {
    companyName: "HealthFirst",
    logoLink: "https://picsum.photos/seed/4/200/200",
  },
  {
    companyName: "FinanceWise",
    logoLink: "https://picsum.photos/seed/5/200/200",
  },
  {
    companyName: "NextGen AI",
    logoLink: "https://picsum.photos/seed/6/200/200",
  },
  {
    companyName: "EcoEnergy",
    logoLink: "https://picsum.photos/seed/7/200/200",
  },
  {
    companyName: "BuildTech",
    logoLink: "https://picsum.photos/seed/8/200/200",
  },
  {
    companyName: "CloudBase",
    logoLink: "https://picsum.photos/seed/9/200/200",
  },
  {
    companyName: "TravelEase",
    logoLink: "https://picsum.photos/seed/10/200/200",
  },
  {
    companyName: "FoodiesHub",
    logoLink: "https://picsum.photos/seed/11/200/200",
  },
  {
    companyName: "MedAssist",
    logoLink: "https://picsum.photos/seed/12/200/200",
  },
  {
    companyName: "AutoDrive",
    logoLink: "https://picsum.photos/seed/13/200/200",
  },
  {
    companyName: "SmartRetail",
    logoLink: "https://picsum.photos/seed/14/200/200",
  },
  {
    companyName: "QuantumSoft",
    logoLink: "https://picsum.photos/seed/15/200/200",
  },
  {
    companyName: "SportsPro",
    logoLink: "https://picsum.photos/seed/16/200/200",
  },
  {
    companyName: "UrbanSpaces",
    logoLink: "https://picsum.photos/seed/17/200/200",
  },
  {
    companyName: "CreativeStudios",
    logoLink: "https://picsum.photos/seed/18/200/200",
  },
  {
    companyName: "SecureNet",
    logoLink: "https://picsum.photos/seed/19/200/200",
  },
  {
    companyName: "Learnify",
    logoLink: "https://picsum.photos/seed/20/200/200",
  },
  {
    companyName: "GlobalConnect",
    logoLink: "https://picsum.photos/seed/21/200/200",
  },
  {
    companyName: "PixelPerfect",
    logoLink: "https://picsum.photos/seed/22/200/200",
  },
  {
    companyName: "AgriTech",
    logoLink: "https://picsum.photos/seed/23/200/200",
  },
  {
    companyName: "EventSphere",
    logoLink: "https://picsum.photos/seed/24/200/200",
  },
  {
    companyName: "BrightFuture",
    logoLink: "https://picsum.photos/seed/25/200/200",
  },
  {
    companyName: "Visionary Labs",
    logoLink: "https://picsum.photos/seed/26/200/200",
  },
  {
    companyName: "InnoWorks",
    logoLink: "https://picsum.photos/seed/27/200/200",
  },
  {
    companyName: "SustainCo",
    logoLink: "https://picsum.photos/seed/28/200/200",
  },
  {
    companyName: "TechSavvy",
    logoLink: "https://picsum.photos/seed/29/200/200",
  },
  {
    companyName: "BrightSkies",
    logoLink: "https://picsum.photos/seed/30/200/200",
  },
  {
    companyName: "SolarWave",
    logoLink: "https://picsum.photos/seed/31/200/200",
  },
  {
    companyName: "AeroDynamics",
    logoLink: "https://picsum.photos/seed/32/200/200",
  },
  {
    companyName: "GameVerse",
    logoLink: "https://picsum.photos/seed/33/200/200",
  },
  {
    companyName: "SoftEdge",
    logoLink: "https://picsum.photos/seed/34/200/200",
  },
  {
    companyName: "HomeSphere",
    logoLink: "https://picsum.photos/seed/35/200/200",
  },
  {
    companyName: "CarePoint",
    logoLink: "https://picsum.photos/seed/36/200/200",
  },
  {
    companyName: "DataGenics",
    logoLink: "https://picsum.photos/seed/37/200/200",
  },
  {
    companyName: "NetFusion",
    logoLink: "https://picsum.photos/seed/38/200/200",
  },
  {
    companyName: "CoreSmart",
    logoLink: "https://picsum.photos/seed/39/200/200",
  },
  {
    companyName: "MarketMinds",
    logoLink: "https://picsum.photos/seed/40/200/200",
  },
  {
    companyName: "CodeX",
    logoLink: "https://picsum.photos/seed/41/200/200",
  },
  {
    companyName: "DroneTech",
    logoLink: "https://picsum.photos/seed/42/200/200",
  },
  {
    companyName: "FreshFarm",
    logoLink: "https://picsum.photos/seed/43/200/200",
  },
  {
    companyName: "CloudNova",
    logoLink: "https://picsum.photos/seed/44/200/200",
  },
  {
    companyName: "IdeaSpring",
    logoLink: "https://picsum.photos/seed/45/200/200",
  },
  {
    companyName: "WaveNet",
    logoLink: "https://picsum.photos/seed/46/200/200",
  },
  {
    companyName: "LifeTrack",
    logoLink: "https://picsum.photos/seed/47/200/200",
  },
  {
    companyName: "UrbanFutures",
    logoLink: "https://picsum.photos/seed/48/200/200",
  },
  {
    companyName: "BrightLabs",
    logoLink: "https://picsum.photos/seed/49/200/200",
  },
  {
    companyName: "InspireTech",
    logoLink: "https://picsum.photos/seed/50/200/200",
  },
];
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ViewCompanyBrand.scss";
import {
  faEdit,
  faMagnifyingGlass,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import InputBox, { InputTypes } from "../../components/input-box/InputBox";
import { useEffect, useState } from "react";

const ViewCompanyBrand = () => {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    if (cards.length) {
      cards.forEach((card) => {
        const cardTitleElement = card.querySelector("#title");
        if (cardTitleElement) {
          const cardTitle = cardTitleElement.textContent?.toLowerCase();
          if (cardTitle && cardTitle.includes(searchText.toLowerCase())) {
            (card as HTMLElement).style.display = "block";
          } else {
            (card as HTMLElement).style.display = "none";
          }
        }
      });
    }
  }, [searchText]);

  return (
    <div className="container">
      <div className="list-header">
        <h1>Company List</h1>
        <div className="search-bar">
          <InputBox
            id="search-text"
            name="search-text"
            type={InputTypes.Text}
            label="Search company name"
            value={searchText}
            showUnitIcon
            iconName={faMagnifyingGlass}
            setInputValue={setSearchText}
          />
        </div>
      </div>
      <div className="grid">
        {data.map((data) => (
          <div className="card">
            <img src={data.logoLink} alt="TechCorp Logo" />
            <div className="card-footer">
              <div className="title" id="title">
                {data.companyName}
              </div>
              <div className="icons">
                <FontAwesomeIcon icon={faEdit} />
                <FontAwesomeIcon icon={faTrash} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewCompanyBrand;
