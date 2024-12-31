import "./DrawerMenu.scss";
import { MenuItem, Menu, MenuCategory } from "../../utils/master-menu";

const DrawerMenu = () => {
  const handleItemClick = (item: MenuItem) => {
    // TODO: Handle menu click
  };

  return (
    <div className="drawer-menu">
      {Menu.map((category: MenuCategory) => (
        <div key={category.id} className="drawer-menu-category">
          {!category.hasSubCategory && (
            <>
              <div className="drawer-menu-category-title">
                {category.category}
              </div>
              <ul>
                {category.items.map((item: MenuItem) => (
                  <li key={item.id} onClick={() => handleItemClick(item)}>
                    <div className="menu-title"> {item.name}</div>
                  </li>
                ))}
              </ul>
            </>
          )}
          {category.hasSubCategory && (
            <>
              <div className="drawer-menu-category-title">
                {category.category}
              </div>
              <ul>
                {category.items.map((item: MenuItem) => (
                  <li key={item.id} onClick={() => handleItemClick(item)}>
                    <div className="sub-category-title"> {item.name}</div>
                    <div className="menu-item">
                      {item.items?.map((item: MenuItem) => (
                        <div
                          key={item.id}
                          onClick={() => handleItemClick(item)}
                        >
                          <div className="sub-category-menu-title">
                            {item.name}
                          </div>
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
  );
};

export default DrawerMenu;
