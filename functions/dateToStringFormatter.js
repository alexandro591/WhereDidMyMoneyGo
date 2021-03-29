export default function dateToStringFormatter(date) {
    return date
        .toLocaleTimeString('es-CA', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        })
        .split(' ')
        .join('T');
}
