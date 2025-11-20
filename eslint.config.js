import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginTypeScript from '@typescript-eslint/eslint-plugin';
import parserTypeScript from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  // 검사 대상 파일 설정
  { files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'] },

  // 브라우저 글로벌 변수 사용 허용
  { languageOptions: { globals: globals.browser } },

  // 기본 JS 규칙
  pluginJs.configs.recommended,

  // React 규칙
  pluginReact.configs.flat.recommended,

  // TypeScript + Prettier 설정
  {
    languageOptions: {
      parser: parserTypeScript,
      parserOptions: {
        project: './tsconfig.json',     // TS 설정 파일 경로
        tsconfigRootDir: __dirname,     // TS 기준 디렉토리 설정
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      '@typescript-eslint': pluginTypeScript,
      prettier: pluginPrettier,
    },
    rules: {
      // TypeScript 규칙
      '@typescript-eslint/no-unused-vars': 'warn',  // 사용 안 한 변수 경고
      '@typescript-eslint/no-explicit-any': 'off',  // any 허용
      '@typescript-eslint/explicit-module-boundary-types': 'off',

      // React 규칙
      'react/react-in-jsx-scope': 'off',            // React import 필요 없음
      'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],

      // Prettier 포맷 강제
      'prettier/prettier': 'error',
    },
  },

  // Prettier와 충돌나는 규칙 끄기
  prettier,
];
