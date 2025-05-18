import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsLink extends Struct.ComponentSchema {
  collectionName: 'components_components_links';
  info: {
    description: '';
    displayName: 'link';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
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
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    thumbnail: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
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

export interface LayoutRecent extends Struct.ComponentSchema {
  collectionName: 'components_layout_recents';
  info: {
    displayName: 'Recent';
  };
  attributes: {
    articles: Schema.Attribute.Relation<'oneToMany', 'api::article.article'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.link': ComponentsLink;
      'layout.featured': LayoutFeatured;
      'layout.navigation-bar': LayoutNavigationBar;
      'layout.recent': LayoutRecent;
    }
  }
}
