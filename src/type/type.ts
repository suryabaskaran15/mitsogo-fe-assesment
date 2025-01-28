export interface TabContentProps {
    heading: string;
    points: string[];
    image: string;
    alt: string;
}

export interface Tab {
    id: number;
    title: string;
    content: TabContentProps;
}