import { SectionLayoutProps } from "@/components/sectionLayout";

export type ValueOf<T> = T[keyof T];

export interface SectionProps extends Omit<SectionLayoutProps, "children"> {}
