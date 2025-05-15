import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsLink extends Struct.ComponentSchema {
  collectionName: 'components_components_links';
  info: {
    description: '';
    displayName: 'link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
  };
}

export interface ComponentsListMore extends Struct.ComponentSchema {
  collectionName: 'components_components_list_mores';
  info: {
    displayName: 'List More';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ComponentsSearchBar extends Struct.ComponentSchema {
  collectionName: 'components_components_search_bars';
  info: {
    displayName: 'Search Bar';
  };
  attributes: {
    caption: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface LayoutFeatured extends Struct.ComponentSchema {
  collectionName: 'components_layout_featureds';
  info: {
    description: '';
    displayName: 'Featured';
  };
  attributes: {
    article: Schema.Attribute.Relation<'oneToOne', 'api::article.article'>;
    description: Schema.Attribute.Text;
    thumbnail: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface LayoutNavigationBar extends Struct.ComponentSchema {
  collectionName: 'components_layout_navigation_bars';
  info: {
    description: '';
    displayName: 'Navigation Bar';
  };
  attributes: {
    link: Schema.Attribute.Component<'components.link', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.link': ComponentsLink;
      'components.list-more': ComponentsListMore;
      'components.search-bar': ComponentsSearchBar;
      'layout.featured': LayoutFeatured;
      'layout.navigation-bar': LayoutNavigationBar;
    }
  }
}
