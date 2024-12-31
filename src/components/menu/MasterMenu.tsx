import "./MasterMenu.scss";
import { MenuItem, Menu, MenuCategory } from "../../utils/master-menu";
import { useState } from "react";
import DrawerMenu from "./DrawerMenu";

const MasterMenu = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleItemClick = (item: MenuItem) => {
    // TODO: Handle menu click
  };

  return (
    <div className="master-menu">
      <div className="drawer-menu-container">
        {isDrawerOpen && <DrawerMenu />}
      </div>
      <div className="horizontal-menu desktop">
        {Menu.map((category: MenuCategory) => (
          <div key={category.id} className="menu-category">
            {!category.hasSubCategory && (
              <>
                {category.items.length <= 1 && (
                  <div
                    className="dropdown-category"
                    onClick={() => handleItemClick(category.items[0])}
                  >
                    {category.category}
                  </div>
                )}
                {category.items.length > 1 && (
                  <>
                    <div className="dropdown-category">{category.category}</div>
                    <ul className="dropdown">
                      {category.items.map((item: MenuItem) => (
                        <li key={item.id} onClick={() => handleItemClick(item)}>
                          {item.name}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </>
            )}
            {category.hasSubCategory && (
              <>
                <div className="dropdown-category">{category.category}</div>
                <ul className="dropdown-sub-categories">
                  {category.items.map((item: MenuItem) => (
                    <li key={item.id} className="dropdown-sub-category">
                      <div className="sub-category-title">{item.name}</div>
                      <div className="menu-item">
                        {item.items?.map((item: MenuItem) => (
                          <div
                            key={item.id}
                            onClick={() => handleItemClick(item)}
                          >
                            <div className="menu-title">{item.name}</div>
                          </div>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasterMenu;
