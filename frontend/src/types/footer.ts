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
    winnicode: Winnicode;
    TopikLink: TopikLink;
    Kontak: Kontak;
    SocialLink: SocialLink;
}

interface Winnicode {
    id: number;
    Label: string;
    Link: Links[]
}

    export interface Links {
        id: number;
        name: string;
        href: string;
    }

interface TopikLink {
    id: number;
    Label: string;
    categories: Category[];
}

    export interface Category {
        id: number;
        documentId: string;
        name: string;
        href: string;
    }

interface Kontak {
    id: number;
    Label: string;
    email: string;
    AlamatCabang: string;
    AlamatPusat: string;
    CallCenter: string;
}

interface SocialLink {
    Label: string;
    id: number;
    href: string;
}