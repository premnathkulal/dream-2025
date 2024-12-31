export interface SubMenuItem {
  id: number;
  name: string;
}

export interface MenuItem {
  id: number;
  name: string;
  subCategory?: string;
  items?: SubMenuItem[];
}

export interface MenuCategory {
  id: number;
  category: string;
  hasSubCategory: boolean;
  items: MenuItem[];
}

enum MenuCategories {
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
  MyProfile = "My Profile",
  DamageClaimCreate = "Damage Claim create",
  DamageClaimListAndChange = "Damage Claim List and Change",
  DamageClaimDetailReport = "Claim detail report",
}

const Menu = [
  {
    id: 1,
    category: MenuCategories.Purchase,
    hasSubCategory: false,
    items: [
      { id: 1, name: MenuItems.GoodsReceiptEntry },
      { id: 2, name: MenuItems.PurchaseInvoiceView },
      { id: 3, name: MenuItems.GoodsShortageReturns },
    ],
  },
  {
    id: 2,
    category: MenuCategories.Stock,
    hasSubCategory: false,
    items: [
      { id: 4, name: MenuItems.StockAdjustment },
      { id: 5, name: MenuItems.StockBrowser },
      { id: 6, name: MenuItems.StockTransferBrowser },
      { id: 7, name: MenuItems.StockTransferEntry },
    ],
  },
  {
    id: 3,
    category: MenuCategories.Sales,
    hasSubCategory: false,
    items: [
      { id: 8, name: MenuItems.BillEntry },
      { id: 9, name: MenuItems.BillUpdatePrint },
      { id: 10, name: MenuItems.Invoice },
      { id: 11, name: MenuItems.BillGenerate },
      { id: 12, name: MenuItems.SalesmanOrderGenerate },
    ],
  },
  {
    id: 4,
    category: MenuCategories.SalesReturn,
    hasSubCategory: false,
    items: [
      { id: 13, name: MenuItems.SalesReturnEntry },
      { id: 14, name: MenuItems.SalesReturnUpdate },
      { id: 15, name: MenuItems.DamageReturn },
    ],
  },
  {
    id: 8,
    category: MenuCategories.Reports,
    hasSubCategory: true,
    items: [
      {
        id: 88,
        subCategory: MenuCategories.SalesReport,
        name: MenuCategories.SalesReport,
        items: [
          { id: 38, name: MenuItems.SalesReportBilledCustomer },
          { id: 39, name: MenuItems.SalesReportCustomerProdwiseQuantity },
          { id: 40, name: MenuItems.SalesReportProductivityReport },
          { id: 41, name: MenuItems.SalesReportDealerList },
          { id: 42, name: MenuItems.SalesReportCustomerOutstanding },
          { id: 43, name: MenuItems.SalesReportSalesReturn },
          { id: 44, name: MenuItems.SalesReportEcoReport },
          { id: 45, name: MenuItems.SalesReportDepositoryList },
        ],
      },
      {
        id: 89,
        subCategory: MenuCategories.ReportPurchase,
        name: MenuCategories.ReportPurchase,
        items: [
          { id: 46, name: MenuItems.PurchaseReportRegister },
          { id: 47, name: MenuItems.PurchaseReportSpecialDiscReport },
          { id: 48, name: MenuItems.PurchaseReportCSRReport },
        ],
      },
      {
        id: 90,
        subCategory: MenuCategories.GeneralReport,
        name: MenuCategories.GeneralReport,
        items: [
          { id: 49, name: MenuItems.GeneralReportUnbilledCustomer },
          { id: 50, name: MenuItems.GeneralReportDailySalesReport },
          { id: 51, name: MenuItems.GeneralReportChequeCollectionReport },
          { id: 52, name: MenuItems.GeneralReportPriceMasterReport },
          { id: 53, name: MenuItems.GeneralReportDailyCollectionReport },
        ],
      },

      {
        id: 91,
        subCategory: MenuCategories.ReportStock,
        name: MenuCategories.ReportStock,
        items: [
          { id: 54, name: MenuItems.StockReportRegister },
          { id: 55, name: MenuItems.StockReportSalesDetails },
          { id: 56, name: MenuItems.StockReportLoadSheetReport },
          { id: 57, name: MenuItems.StockReportManualCreditNote },
          { id: 58, name: MenuItems.StockReportMobileSalesOrderSummaryReport },
          { id: 59, name: MenuItems.StockReportDamageStockReport },
          { id: 60, name: MenuItems.StockReportUnloadSheet },
          { id: 61, name: MenuItems.StockReportRetailerPayout },
          { id: 62, name: MenuItems.StockReportStockAgeingReport },
          { id: 63, name: MenuItems.StockReportNewStockRegister },
        ],
      },
      {
        id: 92,
        subCategory: MenuCategories.GSTTDS,
        name: MenuCategories.GSTTDS,
        items: [
          { id: 64, name: MenuItems.GSTTDSReportGSTTaxSummary },
          { id: 65, name: MenuItems.GSTTDSReportGSTSetup },
          { id: 66, name: MenuItems.GSTTDSReportGSTReport },
          { id: 67, name: MenuItems.GSTTDSReportGSTSalesSummary },
          { id: 68, name: MenuItems.GSTTDSReportGSTPurchaseSummary },
          { id: 69, name: MenuItems.GSTTDSReportTDSReport },
          { id: 70, name: MenuItems.GSTTDSReportTCSReport },
        ],
      },
    ],
  },
  {
    id: 5,
    category: MenuCategories.Finance,
    hasSubCategory: false,
    items: [
      { id: 16, name: MenuItems.CollectionShopwise },
      { id: 17, name: MenuItems.CollectionBrowserHeader },
      { id: 18, name: MenuItems.BulkCollection },
      { id: 19, name: MenuItems.CustomerAccountLedger },
      { id: 20, name: MenuItems.DebitNoteEntry },
      { id: 21, name: MenuItems.ViewDebitNote },
      { id: 22, name: MenuItems.CreditNoteEntry },
      { id: 23, name: MenuItems.CreditNoteUpdate },
      { id: 24, name: MenuItems.SupplierAccountStatement },
      { id: 25, name: MenuItems.CustomerAccountStatement },
    ],
  },
  {
    id: 6,
    category: MenuCategories.Master,
    hasSubCategory: false,
    items: [
      { id: 26, name: MenuItems.CreateCustomer },
      { id: 27, name: MenuItems.ViewUpdateCustomer },
      { id: 28, name: MenuItems.StaffAttendanceEntry },
      { id: 29, name: MenuItems.StaffViewUpdate },
      { id: 30, name: MenuItems.BeatCreate },
      { id: 31, name: MenuItems.BeatUpdate },
      { id: 32, name: MenuItems.BankCreate },
      { id: 33, name: MenuItems.CustomerRealignment },
      { id: 34, name: MenuItems.PriceMaster },
    ],
  },
  {
    id: 7,
    category: MenuCategories.Schemes,
    hasSubCategory: false,
    items: [
      { id: 35, name: MenuItems.CreateScheme },
      { id: 36, name: MenuItems.ViewScheme },
      { id: 37, name: MenuItems.CombiCreateScheme },
    ],
  },
  {
    id: 9,
    category: MenuCategories.MyProfile,
    hasSubCategory: false,
    items: [{ id: 71, name: MenuItems.MyProfile }],
  },
  {
    id: 10,
    category: MenuCategories.DamageClaim,
    hasSubCategory: false,
    items: [
      { id: 72, name: MenuItems.DamageClaimCreate },
      { id: 73, name: MenuItems.DamageClaimListAndChange },
      { id: 74, name: MenuItems.DamageClaimDetailReport },
    ],
  },
];

export { MenuCategories, MenuItems, Menu };
