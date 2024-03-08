import * as moment from 'moment-timezone';

export default function convertUtcToIst(dateString: string): string {
    const utcDate = moment.utc(dateString);
    const istDate = utcDate.tz('Asia/Kolkata');
    const istFormatted = istDate.format('DD/MM/YYYY, HH:mm');
    return istFormatted;
}