
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','d7d'),
  exact: true,
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','d12'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','33d'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','929'),
  exact: true,
},
{
  path: '/blog/tags/api',
  component: ComponentCreator('/blog/tags/api','620'),
  exact: true,
},
{
  path: '/blog/tags/documentation',
  component: ComponentCreator('/blog/tags/documentation','40d'),
  exact: true,
},
{
  path: '/blog/tags/release',
  component: ComponentCreator('/blog/tags/release','e8e'),
  exact: true,
},
{
  path: '/blog/v1-release',
  component: ComponentCreator('/blog/v1-release','458'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','1d9'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','bc1'),
  exact: true,
},
{
  path: '/docs/ammos',
  component: ComponentCreator('/docs/ammos','996'),
  exact: true,
},
{
  path: '/docs/armors',
  component: ComponentCreator('/docs/armors','9fe'),
  exact: true,
},
{
  path: '/docs/ashes',
  component: ComponentCreator('/docs/ashes','48a'),
  exact: true,
},
{
  path: '/docs/bosses',
  component: ComponentCreator('/docs/bosses','78a'),
  exact: true,
},
{
  path: '/docs/classes',
  component: ComponentCreator('/docs/classes','f09'),
  exact: true,
},
{
  path: '/docs/creatures',
  component: ComponentCreator('/docs/creatures','e5e'),
  exact: true,
},
{
  path: '/docs/graphql',
  component: ComponentCreator('/docs/graphql','2f2'),
  exact: true,
},
{
  path: '/docs/incantations',
  component: ComponentCreator('/docs/incantations','51d'),
  exact: true,
},
{
  path: '/docs/items',
  component: ComponentCreator('/docs/items','cfc'),
  exact: true,
},
{
  path: '/docs/locations',
  component: ComponentCreator('/docs/locations','a2a'),
  exact: true,
},
{
  path: '/docs/npcs',
  component: ComponentCreator('/docs/npcs','d7f'),
  exact: true,
},
{
  path: '/docs/shields',
  component: ComponentCreator('/docs/shields','c1a'),
  exact: true,
},
{
  path: '/docs/sorceries',
  component: ComponentCreator('/docs/sorceries','58e'),
  exact: true,
},
{
  path: '/docs/spirits',
  component: ComponentCreator('/docs/spirits','55d'),
  exact: true,
},
{
  path: '/docs/talismans',
  component: ComponentCreator('/docs/talismans','37a'),
  exact: true,
},
{
  path: '/docs/weapons',
  component: ComponentCreator('/docs/weapons','eed'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
