import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsKontak extends Struct.ComponentSchema {
  collectionName: 'components_components_kontaks';
  info: {
    description: '';
    displayName: 'kontak';
  };
  attributes: {
    alamatCabang: Schema.Attribute.Text & Schema.Attribute.Required;
    alamatPusat: Schema.Attribute.Text & Schema.Attribute.Required;
    callCenter: Schema.Attribute.String & Schema.Attribute.Required;
    email: Schema.Attribute.Email & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsLink extends Struct.ComponentSchema {
  collectionName: 'components_components_links';
  info: {
    description: '';
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsLinkExternal extends Struct.ComponentSchema {
  collectionName: 'components_components_link_externals';
  info: {
    description: '';
    displayName: 'LinkExternal';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsNavBarLink extends Struct.ComponentSchema {
  collectionName: 'components_components_nav_bar_links';
  info: {
    description: '';
    displayName: 'NavBarLink';
  };
  attributes: {
    Categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
  };
}

export interface ComponentsSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_components_social_links';
  info: {
    description: '';
    displayName: 'SocialLink';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    LinkExternal: Schema.Attribute.Component<'components.link-external', true>;
  };
}

export interface ComponentsTopikLink extends Struct.ComponentSchema {
  collectionName: 'components_components_topik_links';
  info: {
    description: '';
    displayName: 'TopikLink';
  };
  attributes: {
    Categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsWinnicode extends Struct.ComponentSchema {
  collectionName: 'components_components_winnicodes';
  info: {
    description: '';
    displayName: 'winnicode';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    Link: Schema.Attribute.Component<'components.link', true>;
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
    TopikLink: Schema.Attribute.Component<'components.topik-link', false>;
    Winnicode: Schema.Attribute.Component<'components.winnicode', false>;
  };
}

export interface LayoutNavigationBar extends Struct.ComponentSchema {
  collectionName: 'components_layout_navigation_bars';
  info: {
    description: '';
    displayName: 'Navigation Bar';
  };
  attributes: {
    Link: Schema.Attribute.Component<'components.nav-bar-link', true>;
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
      'components.link-external': ComponentsLinkExternal;
      'components.nav-bar-link': ComponentsNavBarLink;
      'components.social-link': ComponentsSocialLink;
      'components.topik-link': ComponentsTopikLink;
      'components.winnicode': ComponentsWinnicode;
      'layout.by-category': LayoutByCategory;
      'layout.featured': LayoutFeatured;
      'layout.footer': LayoutFooter;
      'layout.navigation-bar': LayoutNavigationBar;
      'layout.recent': LayoutRecent;
    }
  }
}
