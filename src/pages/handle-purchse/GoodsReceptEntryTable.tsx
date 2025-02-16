import { useEffect, useState } from "react";
import "./GoodsReceptEntryTable.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import InputBox, { InputTypes } from "../../components/input-box/InputBox";

const TableHeaders = [
  "Sl No",
  "Item Code",
  "Item Description",
  "Cas",
  "Unit",
  "Quantity",
  "Purchase Rate",
  "P",
  "Amount",
  "Disc Percentage",
  "Disc Amount",
  "GST",
  "CESS",
  "Frt+Misc",
  "Sell: f Rate",
  "M",
];

const GoodsReceptEntryTable = () => {
  const [rows, setRows] = useState([
    { id: 1, columns: Array(TableHeaders.length).fill("") },
  ]);

  const addRow = () => {
    setRows([
      ...rows,
      { id: rows.length + 1, columns: Array(TableHeaders.length).fill("") },
    ]);
  };

  useEffect(() => {
    console.log(rows);
  }, [rows]);

  return (
    <div className="goods-recept-entry-table">
      <table className="table">
        <thead className="thead">
          <tr className="tr">
            {TableHeaders.map((header, index) => (
              <th key={index} className="th">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="goods-recept-entry-table-tbody">
          {rows.length &&
            rows.map((row) => (
              <tr key={row.id} className="goods-recept-entry-table-tr">
                {row.columns.map((column, index) => (
                  <td
                    key={index}
                    className={`goods-recept-entry-table-td ${
                      index === row.columns.length - 1 ? "last-column" : ""
                    }`}
                  >
                    {index === 0 && <span>{row.id}</span>}
                    {index !== 0 && (
                      <InputBox
                        id={`row-${row.id}-column-${index}`}
                        name={`row-${row.id}-column-${index}`}
                        type={InputTypes.Text}
                        label=""
                        value={column}
                        setInputValue={(value: string) => {
                          const newRows = rows.map((r) => {
                            if (r.id === row.id) {
                              const newColumns = [...r.columns];
                              newColumns[index] = value;
                              return { ...r, columns: newColumns };
                            }
                            return r;
                          });
                          setRows(newRows);
                        }}
                      />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          <tr>
            <button onClick={addRow} className="add-row-button">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GoodsReceptEntryTable;
