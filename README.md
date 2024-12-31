# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

## Menu

- Purchase
  - Goods Receipt entry
  - Purchase Invoice View
  - Goods Shortage returns
- Stock
  - Stock Adjustment
  - Stock Browser
  - Stock Transfer Browser
  - Stock Transfer Entry
- Sales
  - Bill Entry
  - Bill Update/Print
  - Invoice
  - Bill generate
  - Salesman order generate
- Sales return
  - Sales return entry
  - Sales return update
  - Damage return
- Finance
  - Collection shopwise
  - Collection browser header
  - Bulk collection
  - Customer Account ledger
  - Debit note entry
  - View debit note
  - Credit note entry
  - Credit note update
  - Supplier account statement
  - Customer account statement
- Master
  - Create customer
  - View/update customer
  - Staff attendance entry
  - Staff view/update
  - Beat create
  - Beat update
  - Bank create
  - Customer realignment
  - Price master
- Schemes
  - Create scheme
  - View scheme
  - Combi create scheme
- Reports
  - Sales report
    - Billed customer
    - Customer Prodwise quantity
    - Productivity report
    - Dealer list
    - Customer outstanding
    - Sales return
    - Eco report
    - Depository list
  - Purchase
    - Purchase register
    - Special disc report
    - CSR report
  - General report
    - Unbilled customer
    - Daily sales report
    - Cheque collection report
    - Price master report
    - Daily collection report
  - Stock
    - Stock register
    - Sales details
    - Load sheet report
    - Manual credit note
    - Mobile sales order summary report
    - Damage stock report
    - Unload sheet
    - Retailer payout
    - Stock ageing report
    - New stock register
  - GST/TDS
    - GST Tax Summary
    - GST Setup
    - GST Report
    - GST sales summary
    - GST purchase summary
    - TDS Report
    - TCS report
- My Profile
- Damage Claim
  - Damage Claim create
  - Damage Claim List and Change
  - Claim detail report
