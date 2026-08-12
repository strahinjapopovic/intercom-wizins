import js from "@eslint/js";
import ts from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";

export default ts.config(
  // ==========================================
  // 1. GLOBAL SETTINGS (Applies to all files)
  // ==========================================
  { 
    ignores: ["**/dist/**", "**/node_modules/**"] 
  },
  js.configs.recommended,
  ...ts.configs.recommended,

  // ==========================================
  // 2. CLIENT WORKSPACE RULES (React Frontend)
  // ==========================================
  {
    files: ["client/src/**/*.{ts,tsx,js,jsx}"],
    plugins: {
      "react": react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    languageOptions: {
      ecmaVersion: 2025,
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        project: ["./client/tsconfig.json"],
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off", // Modern React 19 does not need this
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
    settings: {
      react: {
        version: "detect", // Automatically matches your React 19 installation
      },
    },
  },

  // ==========================================
  // 3. SERVER WORKSPACE RULES (Node Backend)
  // ==========================================
  {
    files: ["server/src/**/*.{ts,js}"],
    languageOptions: {
      ecmaVersion: 2025,
      sourceType: "commonjs", // Change to "module" if using ES Modules on server
      globals: {
        ...globals.node,
      },
      parserOptions: {
        project: ["./server/tsconfig.json"],
      },
    },
    rules: {
      "no-console": "off", // Safe to allow console.log on a Node backend
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  }
);