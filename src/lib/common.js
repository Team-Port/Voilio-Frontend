export function publishedDate(publishDateValue) {
    const publishDate=new Date(publishDateValue);
    publishDate.setHours(publishDate.getHours()+9);
    const currentDate = new Date();
    const second = (currentDate.getTime() - publishDate.getTime()) / 1000;

    let result;
    
    if (second < 60) {
        result = `${second}초 전`;
    } else if (second < 3600) {
        result = `${Math.floor(second / 60)}분 전`;
    } else if (second < 86400) {
        result = `${Math.floor(second / 3600)}시간 전`;
    } else if (second < 604800) {
        result = `${Math.floor(second / 86400)}일 전`;
    } else if (second < 2592000) {
        result = `${Math.floor(second / 604800)}주 전`;
    } else if (second < 31536000) {
        result = `${Math.floor(second / 2592000)}달 전`;
    } else {
        result = `${Math.floor(second / 31536000)}년 전`;
    }

    return result;
}