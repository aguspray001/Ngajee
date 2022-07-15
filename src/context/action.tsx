import { instance } from "api/instance";
import { BASE_API_URL } from "constant";
import { 
    SUCCESS_GET_DATA_QURAN, 
    PROCESS_GET_DATA_QURAN, 
    FAILED_GET_DATA_QURAN } from "./types";

export const getQuranData = async (context:any, page:Number, id:String | undefined) => {
    const {dispatch} = context;
    try {
        const verses = await instance.get(BASE_API_URL + `/verses/by_chapter/${id}?language=en&words=true&page=${page}&per_page=10`);
        const ayah = await instance.get(BASE_API_URL + `/quran/verses/uthmani?chapter_number=${id}`);
        const recitations = await instance.get(BASE_API_URL + `/recitations/1/by_chapter/${id}?page=${page}&per_page=10`);

        const fixedAyah = ayah.data.verses
        .filter((verse: any, i: any) => {
            return verse.id >= verses.data.verses[0].id //get data >= verse id
        })
        .map((verse: any) => {
            return {
                id: verse.id,
                verseKey: verse.verse_key,
                textUtsmani: verse.text_uthmani,
            }
        })

        const fixedVerses = verses.data.verses
        .map((verse: any, i: any) => {
            return {
                id: verse.id,
                juzNumber: verse.juz_number,
                pageNumber: verse.page_number,
                verseNumber: verse.verse_number,
                // words: verse.words,
                text: fixedAyah[i].textUtsmani,
                verseKey: fixedAyah[i].verse_key,
                audioFiles: recitations.data.audio_files[i].url
            }
        })
        dispatch({type: SUCCESS_GET_DATA_QURAN, payload: {verses: fixedVerses, pagging: verses.data.pagination}})
    } 
    catch (e) {
        dispatch({type: FAILED_GET_DATA_QURAN});
    }
}