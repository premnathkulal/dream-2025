import "./MasterMenu.scss";
import DrawerMenu from "./DrawerMenu";
import { useSelector } from "react-redux";
import { RootState } from "../../store/app-store";
import { MenuItem, Menu } from "../../utils/master-menu";
import useNavigation from "../../hooks/useNavigation";
import { useEffect } from "react";

const MasterMenu = () => {
  const isDrawerMenuOpen =
    useSelector<RootState>((state) => state.uiControls.isDrawerMenuOpen) ??
    false;
  const navigation = useNavigation();

  const handleItemClick = (item: MenuItem, parentElementId: string) => {
    const element = document.getElementById(parentElementId);
    if (element) {
      element.classList.remove("dropdown-options");
      setTimeout(() => {
        element.classList.add("dropdown-options");
      }, 100);
    }
    navigation.handleNavigation(item.path);
  };

  useEffect(() => {}, []);

  return (
    <div className="master-menu">
      <div className="drawer-menu-container">
        {isDrawerMenuOpen && <DrawerMenu />}
      </div>
      <div className="horizontal-menu desktop">
        {Menu.map((category: any) => (
          <div key={category.id} className="menu-category">
            {!category.hasSubCategory && (
              <>
                {category.items.length <= 1 && (
                  <div
                    className="dropdown-category"
                    onClick={() => handleItemClick(category.items[0], "")}
                  >
                    {category.category}
                  </div>
                )}
                {category.items.length > 1 && (
                  <>
                    <div className="dropdown-category">{category.category}</div>
                    <ul
                      className="dropdown dropdown-options"
                      id={`${category.id}`}
                    >
                      {category.items.map((item: MenuItem) => (
                        <li
                          key={item.id}
                          onClick={() =>
                            handleItemClick(item, `${category.id}`)
                          }
                        >
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
                <ul
                  className="dropdown-sub-categories dropdown-options"
                  id={`${category.id}`}
                >
                  {category.items.map((item: MenuItem) => (
                    <li key={item.id} className="dropdown-sub-category">
                      <div className="sub-category-title">{item.name}</div>
                      <div className="menu-item">
                        {item.items?.map((item: MenuItem) => (
                          <div
                            key={item.id}
                            onClick={() =>
                              handleItemClick(item, `${category.id}`)
                            }
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
