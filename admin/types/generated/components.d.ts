import type { Schema, Struct } from '@strapi/strapi';

export interface ContactDetailsContactDetails extends Struct.ComponentSchema {
  collectionName: 'components_contact_details_contact_details';
  info: {
    displayName: 'Contact_details';
  };
  attributes: {
    contactName: Schema.Attribute.String;
    contactPhone: Schema.Attribute.String;
    dni: Schema.Attribute.String;
  };
}

export interface ProviderCompanyDetail extends Struct.ComponentSchema {
  collectionName: 'components_provider_company_details';
  info: {
    displayName: 'Company_detail';
  };
  attributes: {
    address: Schema.Attribute.String;
    district: Schema.Attribute.String;
    district_url: Schema.Attribute.String;
    name: Schema.Attribute.String;
    ruc: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'contact-details.contact-details': ContactDetailsContactDetails;
      'provider.company-detail': ProviderCompanyDetail;
    }
  }
}
