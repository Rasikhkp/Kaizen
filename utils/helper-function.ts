export const slugify = (title: string): string => {
    return title.toLowerCase().split(" ").join("-")
}

export const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    })
}

export const htmlTagCleaner = (html: string): string => {
    const textWithoutTags = html.replace(/<[^>]*>/g, ' ');
    const words = textWithoutTags.trim().split(/\s+/);
    const filteredWords = words.filter(word => word !== '').join(" ");

    return filteredWords
}

export const estimateReadingTime = (words: string): string => {
    const wordsPerMinute = 200;
    const wordCount = words.length;
    const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute);

    return `${readingTimeMinutes} min read`;
}

