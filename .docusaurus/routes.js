import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
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
    component: ComponentCreator('/docs', '8d6'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'cac'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'b48'),
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
                path: '/docs/documentation/cloud-nodes',
                component: ComponentCreator('/docs/documentation/cloud-nodes', 'd47'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/documentation/connection-nodes',
                component: ComponentCreator('/docs/documentation/connection-nodes', '6fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/documentation/custom-nodes',
                component: ComponentCreator('/docs/documentation/custom-nodes', '6cb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/documentation/flow-control-nodes',
                component: ComponentCreator('/docs/documentation/flow-control-nodes', '8f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/documentation/io-nodes',
                component: ComponentCreator('/docs/documentation/io-nodes', 'dc0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/documentation/manipulation-nodes',
                component: ComponentCreator('/docs/documentation/manipulation-nodes', '067'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/documentation/visualization-nodes',
                component: ComponentCreator('/docs/documentation/visualization-nodes', 'ac2'),
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
                path: '/docs/getting-started/create-a-custom-node',
                component: ComponentCreator('/docs/getting-started/create-a-custom-node', '2b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/create-a-flow',
                component: ComponentCreator('/docs/getting-started/create-a-flow', 'cce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/create-a-model',
                component: ComponentCreator('/docs/getting-started/create-a-model', '5de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/export-import-flows',
                component: ComponentCreator('/docs/getting-started/export-import-flows', '5f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/matterflow-features',
                component: ComponentCreator('/docs/getting-started/matterflow-features', 'f24'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/start-your-flow',
                component: ComponentCreator('/docs/getting-started/start-your-flow', '213'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/installation/',
                component: ComponentCreator('/docs/installation/', '597'),
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
