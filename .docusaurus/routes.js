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
    component: ComponentCreator('/docs', 'fbc'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '840'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '115'),
            routes: [
              {
                path: '/docs/category/home-assistant---addon',
                component: ComponentCreator('/docs/category/home-assistant---addon', '059'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/standalone-docker-instance',
                component: ComponentCreator('/docs/category/standalone-docker-instance', '4e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/home-assistant-addon/congratulations',
                component: ComponentCreator('/docs/home-assistant-addon/congratulations', '75d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/home-assistant-addon/create-a-blog-post',
                component: ComponentCreator('/docs/home-assistant-addon/create-a-blog-post', 'fa2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/home-assistant-addon/create-a-document',
                component: ComponentCreator('/docs/home-assistant-addon/create-a-document', '61a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/home-assistant-addon/create-a-page',
                component: ComponentCreator('/docs/home-assistant-addon/create-a-page', '248'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/home-assistant-addon/deploy-your-site',
                component: ComponentCreator('/docs/home-assistant-addon/deploy-your-site', 'c73'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/home-assistant-addon/markdown-features',
                component: ComponentCreator('/docs/home-assistant-addon/markdown-features', '70f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/standalone-docker-instance/manage-docs-versions',
                component: ComponentCreator('/docs/standalone-docker-instance/manage-docs-versions', '475'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/standalone-docker-instance/translate-your-site',
                component: ComponentCreator('/docs/standalone-docker-instance/translate-your-site', '5f6'),
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
