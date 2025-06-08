import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsKontak extends Struct.ComponentSchema {
  collectionName: 'components_components_kontaks';
  info: {
    displayName: 'Kontak';
  };
  attributes: {};
}

export interface ComponentsLink extends Struct.ComponentSchema {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
  };
  attributes: {};
}

export interface ComponentsNavBarLink extends Struct.ComponentSchema {
  collectionName: 'components_components_nav_bar_links';
  info: {
    displayName: 'NavBarLink';
  };
  attributes: {
    categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
  };
}

export interface ComponentsSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_components_social_links';
  info: {
    displayName: 'SocialLink';
  };
  attributes: {};
}

export interface ComponentsWinnicode extends Struct.ComponentSchema {
  collectionName: 'components_components_winnicodes';
  info: {
    description: '';
    displayName: 'winnicode';
  };
  attributes: {
    Link: Schema.Attribute.Component<'components.link', true>;
    Title: Schema.Attribute.String;
  };
}

export interface LayoutByCategory extends Struct.ComponentSchema {
  collectionName: 'components_layout_by_categories';
  info: {
    displayName: 'ByCategory';
  };
  attributes: {
    categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
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

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    description: '';
    displayName: 'Footer';
  };
  attributes: {
    Kontak: Schema.Attribute.Component<'components.kontak', false>;
    SocialLink: Schema.Attribute.Component<'components.social-link', false>;
    TopikLink: Schema.Attribute.Component<'components.nav-bar-link', false>;
    winnicode: Schema.Attribute.Component<'components.winnicode', false>;
  };
}

export interface LayoutNavigationBar extends Struct.ComponentSchema {
  collectionName: 'components_layout_navigation_bars';
  info: {
    description: '';
    displayName: 'Navigation Bar';
  };
  attributes: {
    link: Schema.Attribute.Component<'components.nav-bar-link', true>;
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
      'components.kontak': ComponentsKontak;
      'components.link': ComponentsLink;
      'components.nav-bar-link': ComponentsNavBarLink;
      'components.social-link': ComponentsSocialLink;
      'components.winnicode': ComponentsWinnicode;
      'layout.by-category': LayoutByCategory;
      'layout.featured': LayoutFeatured;
      'layout.footer': LayoutFooter;
      'layout.navigation-bar': LayoutNavigationBar;
      'layout.recent': LayoutRecent;
    }
  }
}
