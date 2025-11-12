import js from '@eslint/js' // Recommended JavaScript rules
import globals from 'globals'
import tsParser from "@typescript-eslint/parser";
import pluginTs from "@typescript-eslint/eslint-plugin";
import reactHooks from 'eslint-plugin-react-hooks'
import pluginReact from "eslint-plugin-react";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'


export default defineConfig([
  globalIgnores(['dist']),
  {
    extends: [
      // ESLint's recommended JavaScript rules
      js.configs.recommended,
      
      // ESLint's recommended TypeScript rules, good to put ?
      tseslint.configs.recommended, 
      // TypeScript configuration
      {
        
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
        parser: tsParser,
        parserOptions: {
          project: "./tsconfig.json", // Specify your tsconfig.json path
          ecmaFeatures: {
            jsx: true,
          },
        },
        plugins: {
          "@typescript-eslint": pluginTs,
        },
        rules: {
          ...pluginTs.configs.recommended.rules, // TypeScript-specific recommended rules
          
          // Custom rules for your project
          "no-unused-vars": "warn", // Warn on unused variables
          "semi": ["error", "always"], // Require semicolons
          "indent": ["error", 2], // Enforce 2-space indentation
        },
      },
    },
    
    // React configuration
    {
      files: ["**/*.{js,jsx,ts,tsx}"],
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
        globals: globals.browser, // Browser globals for React environments
      },
      plugins: {
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      "jsx-a11y": pluginJsxA11y,
    },
    rules: {
      ...pluginReact.configs.recommended.rules, // React-specific recommended rules
      ...pluginReactHooks.configs.recommended.rules, // React Hooks recommended rules
      ...pluginJsxA11y.configs.recommended.rules, // Accessibility rules
      "react/react-in-jsx-scope": "off", // Not needed with React 17+
      "react/prop-types": "off", // Often not needed with TypeScript
      // Add or override React rules as needed
    },
    settings: {
      react: {
        version: "detect", // Automatically detect React version
      },
    },
  },
  reactHooks.configs['recommended-latest'],
  reactRefresh.configs.vite,

  ],
},
])
