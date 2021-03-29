import moment from 'moment';

export default function dateToStringFormatter(date) {
    return moment(date).format('yyyy-MM-DDTHH:mm');
}
