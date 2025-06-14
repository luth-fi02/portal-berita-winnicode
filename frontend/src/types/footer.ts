export default interface FooterQueryResponse {
    data: {
        id: number;
        documentId: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        Footer: Footer;
    };
}

interface Footer {
    id: number;
    Winnicode: Winnicode;
    TopikLink: TopikLink;
    Kontak: Kontak;
    SocialLink: SocialLink;
}

interface Winnicode {
    id: number;
    label: string;
    Link: Links[]
}

    export interface Links {
        id: number;
        label: string;
        href: string;
    }

interface TopikLink {
    id: number;
    label: string;
    Categories: Category[];
}

    export interface Category {
        id: number;
        documentId: string;
        name: string;
        href: string;
    }

interface Kontak {
    id: number;
    label: string;
    email: string;
    alamatCabang: string;
    alamatPusat: string;
    callCenter: string;
}

interface SocialLink {
    label: string;
    id: number;
    LinkExternal: LinkExternal[];
}

    export interface LinkExternal {
        id: number;
        url: string;
        label: string;
    }