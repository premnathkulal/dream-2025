export enum TaxType {
  GST = "gst",
  CESS = "cess",
}

enum RoutesList {
  HOME = "/",
  NOT_FOUND = "*",
  LOGIN = "/login",
  HandleCompany = "/handle-company",
  HandleBrand = "/handle-brand",
  HandleCategory = "/handle-category",
  HandleUnit = "/handle-unit",
  HandleProduct = "/handle-product",
  HandleTaxMaster = "/handle-tax",
  ViewCompanyBrand = "/view-company-brand",
  CreateBeat = "/create-beat",
  ViewBeat = "/view-beat",
  GoodsReceptEntry = "/goods-receipt-entry",
  CreateSupplier = "/create-supplier",
}

interface SubMenuItem {
  id: number | string;
  name: string;
  path?: string;
}

interface MenuItem {
  id: number | string;
  name: string;
  path?: string;
  subCategory?: string;
  items?: SubMenuItem[];
}

interface MenuCategory {
  id: number | string;
  category: string;
  path?: string;
  hasSubCategory: boolean;
  items: MenuItem[];
}

enum MenuCategories {
  Home = "Home",
  Purchase = "Purchase",
  Stock = "Stock",
  Sales = "Sales",
  SalesReturn = "Sales Return",
  Finance = "Finance",
  Master = "Master",
  Schemes = "Schemes",
  Reports = "Reports",
  MyProfile = "MyProfile",
  DamageClaim = "Damage Claim",
  GSTTDS = "GST/TDS",
  ReportStock = "Report Stock",
  ReportPurchase = "Report Purchase",
  GeneralReport = "General Report",
  SalesReport = "Sales Report",
}

enum MenuItems {
  GoodsReceiptEntry = "Goods Receipt entry",
  PurchaseInvoiceView = "Purchase Invoice View",
  GoodsShortageReturns = "Goods Shortage returns",
  StockAdjustment = "Stock Adjustment",
  StockBrowser = "Stock Browser",
  StockTransferBrowser = "Stock Transfer Browser",
  StockTransferEntry = "Stock Transfer Entry",
  BillEntry = "Bill Entry",
  BillUpdatePrint = "Bill Update/Print",
  Invoice = "Invoice",
  BillGenerate = "Bill generate",
  SalesmanOrderGenerate = "Salesman order generate",
  SalesReturnEntry = "Sales return entry",
  SalesReturnUpdate = "Sales return update",
  DamageReturn = "Damage return",
  CollectionShopwise = "Collection shopwise",
  CollectionBrowserHeader = "Collection browser header",
  BulkCollection = "Bulk collection",
  CustomerAccountLedger = "Customer Account ledger",
  DebitNoteEntry = "Debit note entry",
  ViewDebitNote = "View debit note",
  CreditNoteEntry = "Credit note entry",
  CreditNoteUpdate = "Credit note update",
  SupplierAccountStatement = "Supplier account statement",
  CustomerAccountStatement = "Customer account statement",
  CreateCustomer = "Create customer",
  ViewUpdateCustomer = "View/update customer",
  StaffAttendanceEntry = "Staff attendance entry",
  StaffViewUpdate = "Staff view/update",
  BeatCreate = "Beat create",
  BeatUpdate = "Beat update",
  BankCreate = "Bank create",
  CustomerRealignment = "Customer realignment",
  PriceMaster = "Price master",
  CreateScheme = "Create scheme",
  ViewScheme = "View scheme",
  CombiCreateScheme = "Combi create scheme",
  SalesReportBilledCustomer = "Billed customer",
  SalesReportCustomerProdwiseQuantity = "Customer Prodwise quantity",
  SalesReportProductivityReport = "Productivity report",
  SalesReportDealerList = "Dealer list",
  SalesReportCustomerOutstanding = "Customer outstanding",
  SalesReportSalesReturn = "Sales return",
  SalesReportEcoReport = "Eco report",
  SalesReportDepositoryList = "Depository list",
  PurchaseReportRegister = "Purchase register",
  PurchaseReportSpecialDiscReport = "Special disc report",
  PurchaseReportCSRReport = "CSR report",
  GeneralReportUnbilledCustomer = "Unbilled customer",
  GeneralReportDailySalesReport = "Daily sales report",
  GeneralReportChequeCollectionReport = "Cheque collection report",
  GeneralReportPriceMasterReport = "Price master report",
  GeneralReportDailyCollectionReport = "Daily collection report",
  StockReportRegister = "Stock register",
  StockReportSalesDetails = "Sales details",
  StockReportLoadSheetReport = "Load sheet report",
  StockReportManualCreditNote = "Manual credit note",
  StockReportMobileSalesOrderSummaryReport = "Mobile sales summary",
  StockReportDamageStockReport = "Damage stock report",
  StockReportUnloadSheet = "Unload sheet",
  StockReportRetailerPayout = "Retailer payout",
  StockReportStockAgeingReport = "Stock ageing report",
  StockReportNewStockRegister = "New stock register",
  GSTTDSReportGSTTaxSummary = "GST Tax Summary",
  GSTTDSReportGSTSetup = "GST Setup",
  GSTTDSReportGSTReport = "GST Report",
  GSTTDSReportGSTSalesSummary = "GST sales summary",
  GSTTDSReportGSTPurchaseSummary = "GST purchase summary",
  GSTTDSReportTDSReport = "TDS Report",
  GSTTDSReportTCSReport = "TCS report",
  DamageClaimCreate = "Damage Claim create",
  DamageClaimListAndChange = "Damage Claim List and Change",
  DamageClaimDetailReport = "Claim detail report",
  CreateSupplier = "Create supplier",
  Customer = "Customer",
  Supplier = "Supplier",
  Staff = "Staff",
  Beat = "Beat",
  Products = "Products",
  CreateProducts = "Create Products",
  CreateCompany = "Create Company",
  CreateCategory = "Create Category",
  CreateUnit = "Create Unit",
  CreateBrand = "Create Brand",
  ViewProducts = "View Products",
  ViewCompany = "View Company",
  ViewCategory = "View Category",
  ViewUnit = "View Unit",
  ViewBrand = "View Brand",
  TaxMaster = "Tax Master",
  AddGST = "Add GST",
  AddCESS = "Add CESS",
  ViewGST = "View GST",
  ViewCESS = "View CESS",
  Other = "Other",
}

const Menu = [
  {
    id: 0,
    category: MenuCategories.Home,
    hasSubCategory: false,
    items: [{ id: "home", name: MenuCategories.Home, path: RoutesList.HOME }],
  },
  {
    id: 1,
    category: MenuCategories.Purchase,
    hasSubCategory: false,
    items: [
      {
        id: 11,
        name: MenuItems.GoodsReceiptEntry,
        path: RoutesList.GoodsReceptEntry,
      },
      { id: 12, name: MenuItems.PurchaseInvoiceView },
      { id: 13, name: MenuItems.GoodsShortageReturns },
    ],
  },
  {
    id: 4,
    category: MenuCategories.Sales,
    hasSubCategory: false,
    items: [
      { id: 41, name: MenuItems.BillEntry },
      { id: 42, name: MenuItems.BillUpdatePrint },
      { id: 43, name: MenuItems.Invoice },
      { id: 44, name: MenuItems.BillGenerate },
      { id: 45, name: MenuItems.SalesmanOrderGenerate },
    ],
  },

  {
    id: 5,
    category: MenuCategories.SalesReturn,
    hasSubCategory: false,
    items: [
      { id: 51, name: MenuItems.SalesReturnEntry },
      { id: 52, name: MenuItems.SalesReturnUpdate },
      { id: 53, name: MenuItems.DamageReturn },
    ],
  },
  {
    id: 2,
    category: MenuCategories.Master,
    hasSubCategory: true,
    items: [
      {
        id: 21,
        subCategory: MenuItems.Products,
        name: MenuItems.Products,
        items: [
          {
            id: 211,
            name: MenuItems.CreateCompany,
            path: RoutesList.HandleCompany,
          },
          { id: 212, name: MenuItems.ViewCompany },
          {
            id: 213,
            name: MenuItems.CreateBrand,
            path: RoutesList.HandleBrand,
          },
          { id: 214, name: MenuItems.ViewBrand },
          {
            id: 215,
            name: MenuItems.CreateCategory,
            path: RoutesList.HandleCategory,
          },
          { id: 216, name: MenuItems.ViewCategory },
          { id: 217, name: MenuItems.CreateUnit, path: RoutesList.HandleUnit },
          { id: 218, name: MenuItems.ViewUnit },
          {
            id: 219,
            name: MenuItems.CreateProducts,
            path: RoutesList.HandleProduct,
          },
          { id: 220, name: MenuItems.ViewProducts },
        ],
      },
      {
        id: 22,
        subCategory: MenuItems.Customer,
        name: MenuItems.Customer,
        items: [
          { id: 221, name: MenuItems.CreateCustomer },
          { id: 222, name: MenuItems.ViewUpdateCustomer },
          { id: 223, name: MenuItems.CustomerRealignment },
        ],
      },
      {
        id: 23,
        subCategory: MenuItems.Supplier,
        name: MenuItems.Supplier,
        items: [
          {
            id: 231,
            name: MenuItems.CreateSupplier,
            path: RoutesList.CreateSupplier,
          },
        ],
      },
      {
        id: 24,
        subCategory: MenuItems.Staff,
        name: MenuItems.Staff,
        items: [
          { id: 241, name: MenuItems.StaffAttendanceEntry },
          { id: 242, name: MenuItems.StaffViewUpdate },
        ],
      },
      {
        id: 25,
        subCategory: MenuItems.Beat,
        name: MenuItems.Beat,
        items: [
          { id: 251, name: MenuItems.BeatCreate, path: RoutesList.CreateBeat },
          { id: 252, name: MenuItems.BeatUpdate, path: RoutesList.ViewBeat },
        ],
      },
      {
        id: 26,
        subCategory: MenuItems.TaxMaster,
        name: MenuItems.TaxMaster,
        items: [
          {
            id: 261,
            name: MenuItems.AddGST,
            path: `${RoutesList.HandleTaxMaster}/${TaxType.GST}`,
          },
          { id: 262, name: MenuItems.ViewGST },
          {
            id: 263,
            name: MenuItems.AddCESS,
            path: `${RoutesList.HandleTaxMaster}/${TaxType.CESS}`,
          },
          { id: 264, name: MenuItems.ViewCESS },
        ],
      },
      {
        id: 27,
        subCategory: MenuItems.Other,
        name: MenuItems.Other,
        items: [
          { id: 271, name: MenuItems.BankCreate },
          { id: 272, name: MenuItems.PriceMaster },
        ],
      },
    ],
  },
  {
    id: 3,
    category: MenuCategories.Stock,
    hasSubCategory: false,
    items: [
      { id: 31, name: MenuItems.StockAdjustment },
      { id: 32, name: MenuItems.StockBrowser },
      { id: 33, name: MenuItems.StockTransferBrowser },
      { id: 34, name: MenuItems.StockTransferEntry },
    ],
  },
  {
    id: 6,
    category: MenuCategories.Reports,
    hasSubCategory: true,
    items: [
      {
        id: 61,
        subCategory: MenuCategories.SalesReport,
        name: MenuCategories.SalesReport,
        items: [
          { id: 611, name: MenuItems.SalesReportBilledCustomer },
          { id: 612, name: MenuItems.SalesReportCustomerProdwiseQuantity },
          { id: 613, name: MenuItems.SalesReportProductivityReport },
          { id: 614, name: MenuItems.SalesReportDealerList },
          { id: 615, name: MenuItems.SalesReportCustomerOutstanding },
          { id: 616, name: MenuItems.SalesReportSalesReturn },
          { id: 617, name: MenuItems.SalesReportEcoReport },
          { id: 618, name: MenuItems.SalesReportDepositoryList },
        ],
      },
      {
        id: 62,
        subCategory: MenuCategories.ReportPurchase,
        name: MenuCategories.ReportPurchase,
        items: [
          { id: 621, name: MenuItems.PurchaseReportRegister },
          { id: 622, name: MenuItems.PurchaseReportSpecialDiscReport },
          { id: 623, name: MenuItems.PurchaseReportCSRReport },
        ],
      },
      {
        id: 63,
        subCategory: MenuCategories.GeneralReport,
        name: MenuCategories.GeneralReport,
        items: [
          { id: 631, name: MenuItems.GeneralReportUnbilledCustomer },
          { id: 632, name: MenuItems.GeneralReportDailySalesReport },
          { id: 633, name: MenuItems.GeneralReportChequeCollectionReport },
          { id: 634, name: MenuItems.GeneralReportPriceMasterReport },
          { id: 635, name: MenuItems.GeneralReportDailyCollectionReport },
        ],
      },
      {
        id: 64,
        subCategory: MenuCategories.ReportStock,
        name: MenuCategories.ReportStock,
        items: [
          { id: 641, name: MenuItems.StockReportRegister },
          { id: 642, name: MenuItems.StockReportSalesDetails },
          { id: 643, name: MenuItems.StockReportLoadSheetReport },
          { id: 644, name: MenuItems.StockReportManualCreditNote },
          { id: 645, name: MenuItems.StockReportMobileSalesOrderSummaryReport },
          { id: 646, name: MenuItems.StockReportDamageStockReport },
          { id: 647, name: MenuItems.StockReportUnloadSheet },
          { id: 648, name: MenuItems.StockReportRetailerPayout },
          { id: 649, name: MenuItems.StockReportStockAgeingReport },
          { id: 650, name: MenuItems.StockReportNewStockRegister },
        ],
      },
      {
        id: 65,
        subCategory: MenuCategories.GSTTDS,
        name: MenuCategories.GSTTDS,
        items: [
          { id: 651, name: MenuItems.GSTTDSReportGSTTaxSummary },
          { id: 652, name: MenuItems.GSTTDSReportGSTSetup },
          { id: 653, name: MenuItems.GSTTDSReportGSTReport },
          { id: 654, name: MenuItems.GSTTDSReportGSTSalesSummary },
          { id: 655, name: MenuItems.GSTTDSReportGSTPurchaseSummary },
          { id: 656, name: MenuItems.GSTTDSReportTDSReport },
          { id: 657, name: MenuItems.GSTTDSReportTCSReport },
        ],
      },
    ],
  },
  {
    id: 7,
    category: MenuCategories.Finance,
    hasSubCategory: false,
    items: [
      { id: 71, name: MenuItems.CollectionShopwise },
      { id: 72, name: MenuItems.CollectionBrowserHeader },
      { id: 73, name: MenuItems.BulkCollection },
      { id: 74, name: MenuItems.CustomerAccountLedger },
      { id: 75, name: MenuItems.DebitNoteEntry },
      { id: 76, name: MenuItems.ViewDebitNote },
      { id: 77, name: MenuItems.CreditNoteEntry },
      { id: 78, name: MenuItems.CreditNoteUpdate },
      { id: 79, name: MenuItems.SupplierAccountStatement },
      { id: 710, name: MenuItems.CustomerAccountStatement },
    ],
  },
  {
    id: 8,
    category: MenuCategories.Schemes,
    hasSubCategory: false,
    items: [
      { id: 81, name: MenuItems.CreateScheme },
      { id: 82, name: MenuItems.ViewScheme },
      { id: 83, name: MenuItems.CombiCreateScheme },
    ],
  },
  {
    id: 9,
    category: MenuCategories.DamageClaim,
    hasSubCategory: false,
    items: [
      { id: 91, name: MenuItems.DamageClaimCreate },
      { id: 92, name: MenuItems.DamageClaimListAndChange },
      { id: 93, name: MenuItems.DamageClaimDetailReport },
    ],
  },
];

export { Menu, RoutesList };
export type { MenuCategories, MenuItems, MenuCategory, MenuItem };
