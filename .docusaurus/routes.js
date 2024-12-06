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
    component: ComponentCreator('/blog', '6a8'),
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
    path: '/blog/authors/oidebrett',
    component: ComponentCreator('/blog/authors/oidebrett', '000'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '71b'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '7ac'),
    exact: true
  },
  {
    path: '/blog/welcomee-blog-post',
    component: ComponentCreator('/blog/welcomee-blog-post', 'd38'),
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
