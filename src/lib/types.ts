import { SectionLayoutProps } from "@/components/sectionLayout";
import { SLIDER_BTN_ACTIONS } from "@/components/slider";

export type ValueOf<T> = T[keyof T];

export interface SectionProps extends Omit<SectionLayoutProps, "children"> {}

export type SliderBtnActions = ValueOf<typeof SLIDER_BTN_ACTIONS>;
