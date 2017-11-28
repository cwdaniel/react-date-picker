/// <reference types="react" />

type Detail = "month" | "year" | "decade" | "century"
type DateCallback = (date: Date) => void

declare module "react-date-picker" {
  export default function DatePicker(props: DatePickerProps): JSX.Element;

  export interface DatePickerProps {
    calendarClassName?: string | string[];
    calendarType?: "US" | "ISO 8601";
    className?: string | string[];
    isOpen?: boolean;
    locale?: string;
    maxDate?: Date;
    maxDetail?: Detail;
    minDate?: Date;
    minDetail?: Detail;
    next2Label?: string | React.ReactElement<any>;
    nextLabel?: string | React.ReactElement<any>;
    onChange?: DateCallback;
    onClickDay?: DateCallback;
    onClickDecade?: DateCallback;
    onClickMonth?: DateCallback;
    onClickYear?: DateCallback;
    prev2Label?: string | React.ReactElement<any>;
    prevLabel?: string | React.ReactElement<any>;
    renderChildren?: (props: CalendarTileProperties) => JSX.Element | null;
    returnValue?: "start" | "end";
    tileClassName?: string | string[] | ((props: CalendarTileProperties) => string | string[] | null);
    tileContent?: React.ReactElement<any> | ((props: CalendarTileProperties) => JSX.Element | null);
    showNeighboringMonth?: boolean;
    showWeekNumbers?: boolean;
    value?: Date;
    view?: Detail;
  }

  export interface CalendarTileProperties {
    date: Date;
    view: Detail;
  }
}
