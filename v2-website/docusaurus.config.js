module.exports={
  "title": "mediQuo",
  "tagline": "MediQuo API Documentation",
  "url": "https://developer.mediquo.com",
  "baseUrl": "/",
  "organizationName": "mediquo",
  "projectName": "mediquo-docs",
  "favicon": "img/favicon.ico",
  "customFields": {},
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "path": "../docs",
          "sidebarPath": "../website/sidebars.json"
        },
        "blog": {},
        "theme": {
          "customCss": "../src/css/customTheme.css"
        }
      }
    ]
  ],
  "plugins": [],
  "themeConfig": {
    "navbar": {
      "title": "mediQuo",
      "logo": {
        "src": "img/logo.svg"
      },
      "items": []
    },
    "image": "img/MediQuo-PRO.png",
    "footer": {
      "links": [],
      "copyright": "Copyright © 2023 mediQuo",
      "logo": {
        "src": "img/favicon.ico"
      }
    },
    "algolia": {
      "appId":"EHQ9YMQQ66",
      "apiKey": "efa3e01b1c9b590d6075aa008862b726",
      "indexName": "mediquo"
    }
  }
}