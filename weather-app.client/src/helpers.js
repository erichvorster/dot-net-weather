export default function formatEpochDate(epoch) {

    const date = new Date(epoch * 1000);


    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];


    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();


    const formattedDate = `${month} ${day}, ${year}`;

    return formattedDate;
}
