/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SaraCookbookIndexImport } from './routes/SaraCookbook/index'
import { Route as SaraCookbookWheelImport } from './routes/SaraCookbook/wheel'
import { Route as SaraCookbookSoupImport } from './routes/SaraCookbook/soup'
import { Route as SaraCookbookSandwichImport } from './routes/SaraCookbook/sandwich'
import { Route as SaraCookbookPastaImport } from './routes/SaraCookbook/pasta'
import { Route as SaraCookbookEntreeImport } from './routes/SaraCookbook/entree'
import { Route as SaraCookbookDrinksImport } from './routes/SaraCookbook/drinks'
import { Route as SaraCookbookDessertImport } from './routes/SaraCookbook/dessert'
import { Route as SaraCookbookCuisineImport } from './routes/SaraCookbook/cuisine'
import { Route as SaraCookbookRecipeViewerRecipeNameImport } from './routes/SaraCookbook/recipe-viewer.$recipeName'

// Create/Update Routes

const SaraCookbookIndexRoute = SaraCookbookIndexImport.update({
  id: '/SaraCookbook/',
  path: '/SaraCookbook/',
  getParentRoute: () => rootRoute,
} as any)

const SaraCookbookWheelRoute = SaraCookbookWheelImport.update({
  id: '/SaraCookbook/wheel',
  path: '/SaraCookbook/wheel',
  getParentRoute: () => rootRoute,
} as any)

const SaraCookbookSoupRoute = SaraCookbookSoupImport.update({
  id: '/SaraCookbook/soup',
  path: '/SaraCookbook/soup',
  getParentRoute: () => rootRoute,
} as any)

const SaraCookbookSandwichRoute = SaraCookbookSandwichImport.update({
  id: '/SaraCookbook/sandwich',
  path: '/SaraCookbook/sandwich',
  getParentRoute: () => rootRoute,
} as any)

const SaraCookbookPastaRoute = SaraCookbookPastaImport.update({
  id: '/SaraCookbook/pasta',
  path: '/SaraCookbook/pasta',
  getParentRoute: () => rootRoute,
} as any)

const SaraCookbookEntreeRoute = SaraCookbookEntreeImport.update({
  id: '/SaraCookbook/entree',
  path: '/SaraCookbook/entree',
  getParentRoute: () => rootRoute,
} as any)

const SaraCookbookDrinksRoute = SaraCookbookDrinksImport.update({
  id: '/SaraCookbook/drinks',
  path: '/SaraCookbook/drinks',
  getParentRoute: () => rootRoute,
} as any)

const SaraCookbookDessertRoute = SaraCookbookDessertImport.update({
  id: '/SaraCookbook/dessert',
  path: '/SaraCookbook/dessert',
  getParentRoute: () => rootRoute,
} as any)

const SaraCookbookCuisineRoute = SaraCookbookCuisineImport.update({
  id: '/SaraCookbook/cuisine',
  path: '/SaraCookbook/cuisine',
  getParentRoute: () => rootRoute,
} as any)

const SaraCookbookRecipeViewerRecipeNameRoute =
  SaraCookbookRecipeViewerRecipeNameImport.update({
    id: '/SaraCookbook/recipe-viewer/$recipeName',
    path: '/SaraCookbook/recipe-viewer/$recipeName',
    getParentRoute: () => rootRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/SaraCookbook/cuisine': {
      id: '/SaraCookbook/cuisine'
      path: '/SaraCookbook/cuisine'
      fullPath: '/SaraCookbook/cuisine'
      preLoaderRoute: typeof SaraCookbookCuisineImport
      parentRoute: typeof rootRoute
    }
    '/SaraCookbook/dessert': {
      id: '/SaraCookbook/dessert'
      path: '/SaraCookbook/dessert'
      fullPath: '/SaraCookbook/dessert'
      preLoaderRoute: typeof SaraCookbookDessertImport
      parentRoute: typeof rootRoute
    }
    '/SaraCookbook/drinks': {
      id: '/SaraCookbook/drinks'
      path: '/SaraCookbook/drinks'
      fullPath: '/SaraCookbook/drinks'
      preLoaderRoute: typeof SaraCookbookDrinksImport
      parentRoute: typeof rootRoute
    }
    '/SaraCookbook/entree': {
      id: '/SaraCookbook/entree'
      path: '/SaraCookbook/entree'
      fullPath: '/SaraCookbook/entree'
      preLoaderRoute: typeof SaraCookbookEntreeImport
      parentRoute: typeof rootRoute
    }
    '/SaraCookbook/pasta': {
      id: '/SaraCookbook/pasta'
      path: '/SaraCookbook/pasta'
      fullPath: '/SaraCookbook/pasta'
      preLoaderRoute: typeof SaraCookbookPastaImport
      parentRoute: typeof rootRoute
    }
    '/SaraCookbook/sandwich': {
      id: '/SaraCookbook/sandwich'
      path: '/SaraCookbook/sandwich'
      fullPath: '/SaraCookbook/sandwich'
      preLoaderRoute: typeof SaraCookbookSandwichImport
      parentRoute: typeof rootRoute
    }
    '/SaraCookbook/soup': {
      id: '/SaraCookbook/soup'
      path: '/SaraCookbook/soup'
      fullPath: '/SaraCookbook/soup'
      preLoaderRoute: typeof SaraCookbookSoupImport
      parentRoute: typeof rootRoute
    }
    '/SaraCookbook/wheel': {
      id: '/SaraCookbook/wheel'
      path: '/SaraCookbook/wheel'
      fullPath: '/SaraCookbook/wheel'
      preLoaderRoute: typeof SaraCookbookWheelImport
      parentRoute: typeof rootRoute
    }
    '/SaraCookbook/': {
      id: '/SaraCookbook/'
      path: '/SaraCookbook'
      fullPath: '/SaraCookbook'
      preLoaderRoute: typeof SaraCookbookIndexImport
      parentRoute: typeof rootRoute
    }
    '/SaraCookbook/recipe-viewer/$recipeName': {
      id: '/SaraCookbook/recipe-viewer/$recipeName'
      path: '/SaraCookbook/recipe-viewer/$recipeName'
      fullPath: '/SaraCookbook/recipe-viewer/$recipeName'
      preLoaderRoute: typeof SaraCookbookRecipeViewerRecipeNameImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/SaraCookbook/cuisine': typeof SaraCookbookCuisineRoute
  '/SaraCookbook/dessert': typeof SaraCookbookDessertRoute
  '/SaraCookbook/drinks': typeof SaraCookbookDrinksRoute
  '/SaraCookbook/entree': typeof SaraCookbookEntreeRoute
  '/SaraCookbook/pasta': typeof SaraCookbookPastaRoute
  '/SaraCookbook/sandwich': typeof SaraCookbookSandwichRoute
  '/SaraCookbook/soup': typeof SaraCookbookSoupRoute
  '/SaraCookbook/wheel': typeof SaraCookbookWheelRoute
  '/SaraCookbook': typeof SaraCookbookIndexRoute
  '/SaraCookbook/recipe-viewer/$recipeName': typeof SaraCookbookRecipeViewerRecipeNameRoute
}

export interface FileRoutesByTo {
  '/SaraCookbook/cuisine': typeof SaraCookbookCuisineRoute
  '/SaraCookbook/dessert': typeof SaraCookbookDessertRoute
  '/SaraCookbook/drinks': typeof SaraCookbookDrinksRoute
  '/SaraCookbook/entree': typeof SaraCookbookEntreeRoute
  '/SaraCookbook/pasta': typeof SaraCookbookPastaRoute
  '/SaraCookbook/sandwich': typeof SaraCookbookSandwichRoute
  '/SaraCookbook/soup': typeof SaraCookbookSoupRoute
  '/SaraCookbook/wheel': typeof SaraCookbookWheelRoute
  '/SaraCookbook': typeof SaraCookbookIndexRoute
  '/SaraCookbook/recipe-viewer/$recipeName': typeof SaraCookbookRecipeViewerRecipeNameRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/SaraCookbook/cuisine': typeof SaraCookbookCuisineRoute
  '/SaraCookbook/dessert': typeof SaraCookbookDessertRoute
  '/SaraCookbook/drinks': typeof SaraCookbookDrinksRoute
  '/SaraCookbook/entree': typeof SaraCookbookEntreeRoute
  '/SaraCookbook/pasta': typeof SaraCookbookPastaRoute
  '/SaraCookbook/sandwich': typeof SaraCookbookSandwichRoute
  '/SaraCookbook/soup': typeof SaraCookbookSoupRoute
  '/SaraCookbook/wheel': typeof SaraCookbookWheelRoute
  '/SaraCookbook/': typeof SaraCookbookIndexRoute
  '/SaraCookbook/recipe-viewer/$recipeName': typeof SaraCookbookRecipeViewerRecipeNameRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/SaraCookbook/cuisine'
    | '/SaraCookbook/dessert'
    | '/SaraCookbook/drinks'
    | '/SaraCookbook/entree'
    | '/SaraCookbook/pasta'
    | '/SaraCookbook/sandwich'
    | '/SaraCookbook/soup'
    | '/SaraCookbook/wheel'
    | '/SaraCookbook'
    | '/SaraCookbook/recipe-viewer/$recipeName'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/SaraCookbook/cuisine'
    | '/SaraCookbook/dessert'
    | '/SaraCookbook/drinks'
    | '/SaraCookbook/entree'
    | '/SaraCookbook/pasta'
    | '/SaraCookbook/sandwich'
    | '/SaraCookbook/soup'
    | '/SaraCookbook/wheel'
    | '/SaraCookbook'
    | '/SaraCookbook/recipe-viewer/$recipeName'
  id:
    | '__root__'
    | '/SaraCookbook/cuisine'
    | '/SaraCookbook/dessert'
    | '/SaraCookbook/drinks'
    | '/SaraCookbook/entree'
    | '/SaraCookbook/pasta'
    | '/SaraCookbook/sandwich'
    | '/SaraCookbook/soup'
    | '/SaraCookbook/wheel'
    | '/SaraCookbook/'
    | '/SaraCookbook/recipe-viewer/$recipeName'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  SaraCookbookCuisineRoute: typeof SaraCookbookCuisineRoute
  SaraCookbookDessertRoute: typeof SaraCookbookDessertRoute
  SaraCookbookDrinksRoute: typeof SaraCookbookDrinksRoute
  SaraCookbookEntreeRoute: typeof SaraCookbookEntreeRoute
  SaraCookbookPastaRoute: typeof SaraCookbookPastaRoute
  SaraCookbookSandwichRoute: typeof SaraCookbookSandwichRoute
  SaraCookbookSoupRoute: typeof SaraCookbookSoupRoute
  SaraCookbookWheelRoute: typeof SaraCookbookWheelRoute
  SaraCookbookIndexRoute: typeof SaraCookbookIndexRoute
  SaraCookbookRecipeViewerRecipeNameRoute: typeof SaraCookbookRecipeViewerRecipeNameRoute
}

const rootRouteChildren: RootRouteChildren = {
  SaraCookbookCuisineRoute: SaraCookbookCuisineRoute,
  SaraCookbookDessertRoute: SaraCookbookDessertRoute,
  SaraCookbookDrinksRoute: SaraCookbookDrinksRoute,
  SaraCookbookEntreeRoute: SaraCookbookEntreeRoute,
  SaraCookbookPastaRoute: SaraCookbookPastaRoute,
  SaraCookbookSandwichRoute: SaraCookbookSandwichRoute,
  SaraCookbookSoupRoute: SaraCookbookSoupRoute,
  SaraCookbookWheelRoute: SaraCookbookWheelRoute,
  SaraCookbookIndexRoute: SaraCookbookIndexRoute,
  SaraCookbookRecipeViewerRecipeNameRoute:
    SaraCookbookRecipeViewerRecipeNameRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/SaraCookbook/cuisine",
        "/SaraCookbook/dessert",
        "/SaraCookbook/drinks",
        "/SaraCookbook/entree",
        "/SaraCookbook/pasta",
        "/SaraCookbook/sandwich",
        "/SaraCookbook/soup",
        "/SaraCookbook/wheel",
        "/SaraCookbook/",
        "/SaraCookbook/recipe-viewer/$recipeName"
      ]
    },
    "/SaraCookbook/cuisine": {
      "filePath": "SaraCookbook/cuisine.tsx"
    },
    "/SaraCookbook/dessert": {
      "filePath": "SaraCookbook/dessert.tsx"
    },
    "/SaraCookbook/drinks": {
      "filePath": "SaraCookbook/drinks.tsx"
    },
    "/SaraCookbook/entree": {
      "filePath": "SaraCookbook/entree.tsx"
    },
    "/SaraCookbook/pasta": {
      "filePath": "SaraCookbook/pasta.tsx"
    },
    "/SaraCookbook/sandwich": {
      "filePath": "SaraCookbook/sandwich.tsx"
    },
    "/SaraCookbook/soup": {
      "filePath": "SaraCookbook/soup.tsx"
    },
    "/SaraCookbook/wheel": {
      "filePath": "SaraCookbook/wheel.tsx"
    },
    "/SaraCookbook/": {
      "filePath": "SaraCookbook/index.tsx"
    },
    "/SaraCookbook/recipe-viewer/$recipeName": {
      "filePath": "SaraCookbook/recipe-viewer.$recipeName.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
