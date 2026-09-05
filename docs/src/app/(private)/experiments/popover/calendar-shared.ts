import { Popover } from '@obstudio/react/popover';

export const eventPopover = Popover.createHandle<EventData>();

export interface EventData {
  title: string;
  dayOfWeek: number;
  dateString: string;
  description?: string;
  location?: string;
  imageUrl?: string;
  startTime: number;
  endTime: number;
  id: number;
}
