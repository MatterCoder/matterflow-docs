import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '47e'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/oidebrett',
    component: ComponentCreator('/blog/authors/oidebrett', 'bd4'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/example-blog-post',
    component: ComponentCreator('/blog/example-blog-post', 'a57'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'a8d'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '0e9'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '337'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'fa4'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '1e8'),
            routes: [
              {
                path: '/docs/category/documentation',
                component: ComponentCreator('/docs/category/documentation', '275'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/getting-started',
                component: ComponentCreator('/docs/category/getting-started', '4e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/installation',
                component: ComponentCreator('/docs/category/installation', '9d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/documentation/manage-docs-versions',
                component: ComponentCreator('/docs/documentation/manage-docs-versions', '990'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/documentation/translate-your-site',
                component: ComponentCreator('/docs/documentation/translate-your-site', '84e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/congratulations',
                component: ComponentCreator('/docs/getting-started/congratulations', '673'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/create-a-blog-post',
                component: ComponentCreator('/docs/getting-started/create-a-blog-post', 'd3a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/create-a-document',
                component: ComponentCreator('/docs/getting-started/create-a-document', '660'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/create-a-page',
                component: ComponentCreator('/docs/getting-started/create-a-page', '35b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/deploy-your-site',
                component: ComponentCreator('/docs/getting-started/deploy-your-site', '0ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/markdown-features',
                component: ComponentCreator('/docs/getting-started/markdown-features', 'd88'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/installation/manage-docs-versions',
                component: ComponentCreator('/docs/installation/manage-docs-versions', '6d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/installation/translate-your-site',
                component: ComponentCreator('/docs/installation/translate-your-site', 'a3e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
