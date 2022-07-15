export interface Verses {
    id: Number,
    juz_number: Number,
    page_number: Number,
    verse_number: Number,
    words: String[],
}

export interface Pagination{
    current_page: Number,
    next_page: Number,
    per_page: Number,
    total_pages: Number,
    total_records: Number,
}