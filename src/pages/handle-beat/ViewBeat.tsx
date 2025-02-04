import { useState, useEffect } from "react";
import "./HandleBeat.scss";

const BeatList = [
  {
    id: 1,
    beatName: "Mangalore",
    beatCode: "SC001",
  },
  {
    id: 2,
    beatName: "Ullal",
    beatCode: "SC002",
  },
  {
    id: 3,
    beatName: "Surathkal",
    beatCode: "SC003",
  },
  {
    id: 4,
    beatName: "Puttur",
    beatCode: "SC004",
  },
  {
    id: 5,
    beatName: "Bantwal",
    beatCode: "SC005",
  },
  {
    id: 6,
    beatName: "Belthangady",
    beatCode: "SC006",
  },
  {
    id: 7,
    beatName: "Moodabidri",
    beatCode: "SC007",
  },
  {
    id: 8,
    beatName: "Karkala",
    beatCode: "UD001",
  },
  {
    id: 9,
    beatName: "Udupi",
    beatCode: "UD002",
  },
  {
    id: 10,
    beatName: "Kundapura",
    beatCode: "UD003",
  },
  {
    id: 11,
    beatName: "Manipal",
    beatCode: "UD004",
  },
  {
    id: 12,
    beatName: "Malpe",
    beatCode: "UD005",
  },
  {
    id: 13,
    beatName: "Kaup",
    beatCode: "UD006",
  },
  {
    id: 14,
    beatName: "Brahmavar",
    beatCode: "UD007",
  },
  {
    id: 15,
    beatName: "Hebri",
    beatCode: "UD008",
  },
  {
    id: 16,
    beatName: "Kasaragod",
    beatCode: "KS001",
  },
  {
    id: 17,
    beatName: "Kanhangad",
    beatCode: "KS002",
  },
  {
    id: 18,
    beatName: "Manjeshwar",
    beatCode: "KS003",
  },
  {
    id: 19,
    beatName: "Uppala",
    beatCode: "KS004",
  },
  {
    id: 20,
    beatName: "Nileshwar",
    beatCode: "KS005",
  },
  {
    id: 21,
    beatName: "Bekal",
    beatCode: "KS006",
  },
  {
    id: 22,
    beatName: "Cheruvathur",
    beatCode: "KS007",
  },
  {
    id: 23,
    beatName: "Kumbla",
    beatCode: "KS008",
  },
  {
    id: 24,
    beatName: "Sullia",
    beatCode: "SC008",
  },
  {
    id: 25,
    beatName: "Dharmasthala",
    beatCode: "SC009",
  },
  {
    id: 26,
    beatName: "Venur",
    beatCode: "SC010",
  },
  {
    id: 27,
    beatName: "Mulki",
    beatCode: "SC011",
  },
  {
    id: 28,
    beatName: "Mudipu",
    beatCode: "SC012",
  },
  {
    id: 29,
    beatName: "Kinnigoli",
    beatCode: "SC013",
  },
  {
    id: 30,
    beatName: "Thokur",
    beatCode: "SC014",
  },
  {
    id: 31,
    beatName: "Padubidri",
    beatCode: "UD009",
  },
  {
    id: 32,
    beatName: "Shirva",
    beatCode: "UD010",
  },
  {
    id: 33,
    beatName: "Katapadi",
    beatCode: "UD011",
  },
  {
    id: 34,
    beatName: "Saligrama",
    beatCode: "UD012",
  },
  {
    id: 35,
    beatName: "Baindur",
    beatCode: "UD013",
  },
  {
    id: 36,
    beatName: "Byndoor",
    beatCode: "UD014",
  },
  {
    id: 37,
    beatName: "Hosangadi",
    beatCode: "UD015",
  },
  {
    id: 38,
    beatName: "Perdala",
    beatCode: "KS009",
  },
  {
    id: 39,
    beatName: "Badiadka",
    beatCode: "KS010",
  },
  {
    id: 40,
    beatName: "Pavoor",
    beatCode: "KS011",
  },
  {
    id: 41,
    beatName: "Pallikkara",
    beatCode: "KS012",
  },
  {
    id: 42,
    beatName: "Ajanoor",
    beatCode: "KS013",
  },
  {
    id: 43,
    beatName: "Mogral",
    beatCode: "KS014",
  },
  {
    id: 44,
    beatName: "Mulleria",
    beatCode: "KS015",
  },
  {
    id: 45,
    beatName: "Puthige",
    beatCode: "KS016",
  },
  {
    id: 46,
    beatName: "Bantwal",
    beatCode: "SC015",
  },
  {
    id: 47,
    beatName: "Belman",
    beatCode: "SC016",
  },
  {
    id: 48,
    beatName: "Kinnigoli",
    beatCode: "SC017",
  },
  {
    id: 49,
    beatName: "Nitte",
    beatCode: "SC018",
  },
  {
    id: 50,
    beatName: "Karkala",
    beatCode: "SC019",
  },
];

const ViewBeat = () => {
  const [sortedBeatList, setSortedBeatList] = useState(BeatList);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const sortedList = [...BeatList].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.beatName.localeCompare(b.beatName);
      } else {
        return b.beatName.localeCompare(a.beatName);
      }
    });
    setSortedBeatList(sortedList);
  }, [sortOrder]);

  const handleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="view-beat">
      <div className="list-header">
        <h1 className="page-title">Beat List</h1>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th onClick={handleSort} style={{ cursor: "pointer" }}>
              Beat Name {sortOrder === "asc" ? "▲" : "▼"}
            </th>
            <th>Beat Code</th>
          </tr>
        </thead>
        <tbody>
          {sortedBeatList.map((beat) => (
            <tr key={beat.id}>
              <td>{beat.id}</td>
              <td>{beat.beatName}</td>
              <td>{beat.beatCode}</td>
              {/* <td>
                <FontAwesomeIcon icon={faPencil} />
              </td>
              <td>
                <FontAwesomeIcon icon={faTrash} />
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewBeat;
